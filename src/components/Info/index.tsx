import { useState, useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../Main';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';
import Axies from './Axies';
import * as SC from './styled';

export default () => {
  const [axies, setAxies] = useState<any | undefined>(undefined);
  const [battles, setBattles] = useState<any | undefined>(undefined);
  const history = useHistory();
  const { selectedInfo } = useContext(AppContext)
  
  useEffect(() => {
    if (!selectedInfo) {
      goBack();
    } else {
      const { ronin } = selectedInfo;
      getAxies(ronin);
      getBattles(ronin);
    }
  }, [selectedInfo]);

  const getAxies = async (ronin: string) => {
    if (!!ronin) {
      const axies = await fetch(`https://api.lunaciaproxy.cloud/_axies/${ronin}`);
      return Promise.all([await axies.json()]).then((response) => {
        if (!!response) {
          const axies = response[0].available_axies.results;
          // console.log(axies)
          setAxies(axies);
        }
      });
    }
  };

  const getBattles = async (ronin: string) => {
    if (!!ronin) {
      const battles = await fetch(`https://api.lunaciaproxy.cloud/_battles/${ronin}/200/0`);
      return Promise.all([await battles.json()]).then((response) => {
        if (!!response) {
          // console.log(response)
          const battles = response[0].battle_logs.pvp;
          setBattles(battles);
        }
      });
    }
  };

  const goBack = () => {
    history.push('/');
  };

  return (
    <AppContext.Consumer>
      {({selectedInfo, slpPrice}) => {
        const { name } = !!selectedInfo && selectedInfo;

        return !!selectedInfo && (
          <SC.Container>
            <Container>
              <Row>
                <Col xs={12}>
                  <SC.Title>
                    <span onClick={() => goBack()}>
                      <svg width="16" height="16" viewBox="0 0 16 16" style={{fill: 'white'}}><path d="M.225 6.436L6.437.225c.3-.3.785-.3 1.085 0l.724.724c.3.3.3.784.001 1.084L3.324 6.979l4.923 4.946c.299.3.298.785-.001 1.084l-.725.724c-.3.3-.785.3-1.085 0L.225 7.521c-.3-.3-.3-.785 0-1.085z"></path></svg>
                    </span>
                    {name}
                  </SC.Title>
                </Col>
                <Col xl={9} md={8}>
                  <MainPanel slpPrice={slpPrice} {...selectedInfo}/>
                </Col>
                <Col xl={3} md={4}>
                  <SidePanel
                    {...selectedInfo}
                    axies={axies}
                    battles={battles}
                  />
                </Col>
              </Row>
              <Axies axies={axies}/>
            </Container>
          </SC.Container>
        )
      }}
    </AppContext.Consumer>
  )
}