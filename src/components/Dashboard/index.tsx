import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form} from 'react-bootstrap';
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
import ControlContainer from './ControlContainer';
import * as SC from './styled';

export default () => {
  const [data, setData] = useState<any>(undefined);
  const [isAsc, setIsAsc] = useState<any>(true);
  const [sortBy, setSortBy] = useState<string>('name');
  const [searchText, setSearchText] = useState<string>('');
  const { id } = useParams<{ id: string }>();

  const fetchData = async (item: any) => {
    const response = await fetch(`https://game-api.axie.technology/api/v1/${item.ronin}`);
    return {...await response.json(), ...item};
  };

  useEffect(() => {
    Promise.all(
      DATA.map(item => fetchData(item))
    ).then((values) => {
      // console.log(values)
      setData(values);
    });
  }, []);

  return !data ? <SC.Loader/> : (
    <SC.Container>
      <Container>
        {id === '0' && (
          <SC.CardInfoContainer>
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
        )}
        <Row>
          <ControlContainer
            sizes={{xl: 3, lg: 4, md: 6}}
            title="sort by"
            onClickAscDescButton={() => setIsAsc(!isAsc)}
            ascDescText={isAsc ? 'Asc' : 'Desc'}
          >
            <Form.Control as="select" size="sm" onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Name</option>
              <option value="total_slp">SLP</option>
              <option value="mmr">MMR</option>
              <option value="rank">Rank</option>
            </Form.Control>
          </ControlContainer>
          <ControlContainer
            sizes={{xl: 9, lg: 8, md: 6}}
            title="search"
          >
            <Form.Control placeholder="Search name..." size="sm" onChange={(e) => setSearchText(e.target.value)}/>
          </ControlContainer>
        </Row>

        <SC.CardItemContainer>
          <Row>
            {!!data && !!data.length && data
              .filter((item: any) => item.name.toLowerCase().includes(searchText.toLowerCase()))
              .sort((a: any, b: any) => {
                const valA = !!a[sortBy] && a[sortBy] !== 0 && a[sortBy];
                const valB = !!b[sortBy] && b[sortBy] !== 0 && b[sortBy];
                if (typeof valA === 'string' && typeof valB === 'string') {
                  const nameA = valA.toLowerCase();
                  const nameB = valB.toLowerCase();
                  if (isAsc) {
                    return nameA !== nameB ? nameA < nameB ? -1 : 1 : 0;
                  } else {
                    return nameA !== nameB ? nameA > nameB ? -1 : 1 : 0;
                  }
                } else {
                  if (isAsc) {
                    return valA !== valB ? valA < valB ? -1 : 1 : 0;
                  } else {
                    return valA !== valB ? valA > valB ? -1 : 1 : 0;
                  }
                }
              })
              .map((item: any, i: number) => (
              <Col xl={3} lg={4} md={6} key={i}>
                <CardItem {...item}/>
              </Col>
            ))}
          </Row>
          
        </SC.CardItemContainer>
      </Container>
    </SC.Container>
  )
}