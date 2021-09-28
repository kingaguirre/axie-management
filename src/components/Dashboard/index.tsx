import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import CardInfo from '../CardInfo';
import CardItem from '../CardItem';
import {
  getTotalAvg,
  getTotaDashboardlSlp,
  getTotaDashboardlUnclaimedSlp,
  getTotaDashboardlClaimedSlp,
  getTotalIskoSlp,
  getTotalManagerSlp,
  getQueryStringParams,
} from '../utils';
import { AppContext } from '../Main';
import { filteredData } from './utils';
import ControlContainer from './ControlContainer';
import * as SC from './styled';

export default () => {
  const [isAsc, setIsAsc] = useState<any>(true);
  const [sortBy, setSortBy] = useState<string>('name');
  const [searchText, setSearchText] = useState<string>('');
  const isAdmin = getQueryStringParams('user') === 'admin';
  const history = useHistory();

  return (
    <AppContext.Consumer>
      {({slpPrice, data}) => (
        <SC.Container>
          <Container>
            {isAdmin && (
              <SC.CardInfoContainer>
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
                      onClick={() => history.push('/all-axies')}
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
                  <option value="share_slp">Share SLP</option>
                  <option value="total_slp">Total SLP</option>
                  <option value="mmr">MMR</option>
                  <option value="rank">Rank</option>
                </Form.Control>
              </ControlContainer>
              <ControlContainer
                sizes={{xl: 9, lg: 8, md: 6}}
                title="search"
                totalTeams={`Teams (${filteredData({data, sortBy, isAsc, searchText}).length})`}
              >
                <Form.Control placeholder="Search name..." size="sm" onChange={(e) => setSearchText(e.target.value)}/>
              </ControlContainer>
            </Row>

            <SC.CardItemContainer>
              <Row>
                {filteredData({data, sortBy, isAsc, searchText}).map((item: any, i: number) => (
                  <Col xl={3} lg={4} md={6} key={i}>
                    <CardItem {...item}/>
                  </Col>
                ))}
              </Row>
              
            </SC.CardItemContainer>
          </Container>
        </SC.Container>
      )}
    </AppContext.Consumer>
  )
}