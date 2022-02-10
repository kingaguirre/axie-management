import { createContext, useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Loader from '../Loader';
import Header from '../Header';
import Dashboard from '../Dashboard';
import Info from '../Info';
import AllAxies from '../AllAxies';
import DATA from '../data';
import { SLP_PRICE_API } from '../data';
import * as SC from './styled';

export const AppContext = createContext<any>(undefined);
const AVG_LIMIT = 80;

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
        {!data || !slpPrice ? <Loader/>: (
          <SC.Container>
            <Switch>
              <Route exact path="/">
                <Dashboard/>
              </Route>
              <Route path="/info">
                <Info/>
              </Route>
              {/* <Route path="/all-axies">
                <AllAxies/>
              </Route> */}
            </Switch>
          </SC.Container>
        )}
      </HashRouter>
    </AppContext.Provider>
  )
}