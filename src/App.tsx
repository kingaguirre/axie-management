import { useEffect, useState, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as SC from './styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SLP_PRICE_API } from './components/data';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

export const AppContext = createContext<any>(undefined);
const AVG_LIMIT = 125;
export default () => {
  const [slpPrice, setSlpPrice] = useState<number>(0);

  useEffect(() => {
    getSLPPrice();
  }, []);

  const getSLPPrice = async () => {
    const response = await fetch(SLP_PRICE_API);
    const json = await response.json();
    setSlpPrice(!!json && !!json['smooth-love-potion'] && json['smooth-love-potion'].php);
  };

  return (
    <AppContext.Provider value={{
      slpPrice,
      avgLimit: AVG_LIMIT,
    }}>
      <SC.MainContainer>
        <SC.GlobalStyle/>
        <Router>
          <Header/>
          <Switch>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route> */}
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </SC.MainContainer>
    </AppContext.Provider>
  );
}
