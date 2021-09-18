import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardInfo from '../CardInfo';
import CardItem from '../CardItem';
import DATA from '../data';
import {
  getTotalAvg,
  getTotaDashboardlSlp,
  getTotaDashboardlUnclaimedSlp,
  getTotaDashboardlClaimedSlp,
  getTotalIskoSlp,
  getTotalManagerSlp
} from '../utils';
import { AppContext } from '../../App';
import * as SC from './styled';

export default () => {
  const [data, setData] = useState<any>(undefined);

  const fetchData = async (item: any) => {
    const response = await fetch(`https://game-api.axie.technology/api/v1/${item.ronin}`);
    return {...await response.json(), ...item};
  };

  useEffect(() => {
    Promise.all(
      DATA.map(item => fetchData(item))
    ).then((values) => {
      console.log(values);
      setData(values)
    });
  }, []);

  return (
    <SC.Container>
      {!data ? <SC.Loader/> : (
        <Container>
          {/* <SC.CardInfoContainer>
            <AppContext.Consumer>
              {({slpPrice}) => (
                <Row>
                  <Col md={2}>
                    <CardInfo
                      title="Total Average"
                      {...getTotalAvg(data, slpPrice)}
                    />
                  </Col>
                  <Col md={2}>
                    <CardInfo
                      title="Total SLP"
                      isHighligted
                      {...getTotaDashboardlSlp(data, slpPrice)}
                    />
                  </Col>
                  <Col md={2}>
                    <CardInfo
                      title="Total Manager SLP"
                      {...getTotalManagerSlp(data, slpPrice)}
                    />
                  </Col>
                  <Col md={2}>
                    <CardInfo
                      title="Total Scholar SLP"
                      {...getTotalIskoSlp(data, slpPrice)}
                    />
                  </Col>
                  <Col md={2}>
                    <CardInfo
                      title="Total Unclaimed SLP"
                      {...getTotaDashboardlUnclaimedSlp(data, slpPrice)}
                    />
                  </Col>
                  <Col md={2}>
                    <CardInfo
                      title="Total Claimed SLP"
                      {...getTotaDashboardlClaimedSlp(data, slpPrice)}
                    />
                  </Col>
                </Row>
              )}
            </AppContext.Consumer>
          </SC.CardInfoContainer>
           */}
          <SC.CardItemContainer>
            <Row>
              {!!data && !!data.length && data
                .sort((a: any, b: any) => {
                  const nameA = a.name.toUpperCase();
                  const nameB = b.name.toUpperCase();
                  return nameA !== nameB ? nameA < nameB ? -1 : 1 : 0;
                })
                .map((item: any, i: number) => (
                <Col xl={3} lg={4} md={6} key={i}>
                  <CardItem {...item}/>
                </Col>
              ))}
            </Row>
            
          </SC.CardItemContainer>
        </Container>
      )}
    </SC.Container>
  )
}