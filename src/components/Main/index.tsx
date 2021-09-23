import { createContext, useEffect, useState } from 'react';
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Header from '../Header';
import Dashboard from '../Dashboard';
import Info from '../Info';
import DATA from '../data';
import { SLP_PRICE_API } from '../data';
import * as SC from './styled';

export const AppContext = createContext<any>(undefined);
const AVG_LIMIT = 125;

export default () => {
  const [data, setData] = useState<any>(undefined);
  const [slpPrice, setSlpPrice] = useState<number>(0);
  const [selectedInfo, setSelectedInfo] = useState<any | undefined>(undefined);

  useEffect(() => {
    getSLPPrice();
  }, []);

  const fetchData = async (item: any) => {
    const response = await fetch(`https://game-api.axie.technology/api/v1/${item.ronin}`);
    return {...await response.json(), ...item};
  };

  const getSLPPrice = async () => {
    const response = await fetch(SLP_PRICE_API);
    const json = await response.json();
    setSlpPrice(!!json && !!json['smooth-love-potion'] && json['smooth-love-potion'].php);
  };

  useEffect(() => {
    Promise.all(
      DATA.map(item => fetchData(item))
    ).then((values) => {
      console.log(values)
      setData(values);
    });
  }, []);

  return (
    <AppContext.Provider value={{
      slpPrice,
      data,
      selectedInfo,
      avgLimit: AVG_LIMIT,
      onInfoItemClick: setSelectedInfo,
    }}>
      <HashRouter>
        <Header/>
        {!data || !slpPrice ? <SC.Loader/> : (
          <SC.Container>
            <Switch>
              <Route exact path="/">
                <Dashboard/>
              </Route>
              <Route path="/info">
                <Info/>
              </Route>
            </Switch>
          </SC.Container>
        )}
      </HashRouter>
    </AppContext.Provider>
  )
}