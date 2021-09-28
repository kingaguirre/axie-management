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
  getIskoSlp,
  isManager
} from '../utils';
import { AppContext } from '../Main';
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
              >
                <Form.Control placeholder="Search name..." size="sm" onChange={(e) => setSearchText(e.target.value)}/>
              </ControlContainer>
            </Row>

            <SC.CardItemContainer>
              <Row>
                {!!data && !!data.length && data
                  .filter((item: any) => item.name.toLowerCase().includes(searchText.toLowerCase()))
                  .sort((a: any, b: any) => {
                    if (sortBy === 'share_slp') {
                      const valA = !!a.total_slp && a.total_slp !== 0 && (isManager(a.share) ? a.total_slp : getIskoSlp(a));
                      const valB = !!b.total_slp && b.total_slp !== 0 && (isManager(b.share) ? b.total_slp : getIskoSlp(b));
                      if (isAsc) {
                        return valA < valB ? -1 : 1;
                      } else {
                        return valA > valB ? -1 : 1;
                      }
                    } else {
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
      )}
    </AppContext.Consumer>
  )
}