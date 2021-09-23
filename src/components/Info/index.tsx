import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Panel from '../Panel';
import LabelValue from '../LabelValue';
import slp_img from '../../assets/slp.png';
import { AppContext } from '../Main';
import { numberWithCommas, getTotalSlp, getAvg, PHP_PREFIX, copyToClipboard, getTotalDays } from '../utils';
import * as SC from './styled';

export default () => {
  const history = useHistory();
  
  const goBack = () => {
    history.push('/');
  };

  return (
    <AppContext.Consumer>
      {({selectedInfo, slpPrice}) => {
        const { name, cache_last_updated, otherSlp, last_claim, total_slp, in_game_slp, mmr, share, rank, ronin } = !!selectedInfo && selectedInfo;
      
        const isManager = share === -1;
        const calculatedShare = getAvg(last_claim, in_game_slp) >= 125 ? 60 : 50;
        const totalIskoSlp: number = getTotalSlp(total_slp, isManager ? 100 : calculatedShare);

        if (!selectedInfo) {
          goBack();
        }
        console.log(selectedInfo);
        return !!selectedInfo && (
          <SC.Container>
            <Container>
              <Row>
                <Col xs={12}>
                  <SC.Title>
                    <span onClick={() => goBack()}>
                      <svg width="16" height="16" viewBox="0 0 16 16" style={{fill: 'white'}}><path d="M.225 6.436L6.437.225c.3-.3.785-.3 1.085 0l.724.724c.3.3.3.784.001 1.084L3.324 6.979l4.923 4.946c.299.3.298.785-.001 1.084l-.725.724c-.3.3-.785.3-1.085 0L.225 7.521c-.3-.3-.3-.785 0-1.085z"></path></svg>
                    </span>
                    {selectedInfo.name}
                  </SC.Title>
                </Col>
                <Col xl={9} md={8}>
                  <Panel>
                    <SC.MainInfo>
                      <SC.Slp>
                        <img src={slp_img} alt="SLP Icon"/>
                        <LabelValue
                          label="Slp Share for this month"
                          value={numberWithCommas(totalIskoSlp)}
                          align="left"
                          size="large"
                        />
                        <small>
                          {`${PHP_PREFIX}${numberWithCommas(slpPrice * totalIskoSlp)} `}
                          <i>{`in ${getTotalDays(last_claim)} days`}</i>
                        </small>
                      </SC.Slp>
                      <SC.MainInfoInner>
                        <LabelValue
                          label="Avg"
                          value={getAvg(last_claim, in_game_slp)}
                          isReverse
                        />
                        {/* <LabelValue
                          label="Manager"
                          value={numberWithCommas(getTotalSlp(total_slp, isManager ? 100 : 100 - calculatedShare))}
                          isReverse
                        /> */}
                        <LabelValue
                          label="Others"
                          labelSmall={!!otherSlp && <a href="https://docs.google.com/spreadsheets/d/1Wid6sPNYWrAtNd7o-Q2OIqLzBvkPuNkQClPbVvqz8Bk/edit#gid=0" target="_blank">Details</a>}
                          value={otherSlp || 0}
                          isReverse
                        />
                        <LabelValue
                          label="Total Slp + Others"
                          labelSmall={`${PHP_PREFIX}${numberWithCommas(slpPrice * (totalIskoSlp + (otherSlp || 0)))} `}
                          value={numberWithCommas(totalIskoSlp + (otherSlp || 0))}
                          isReverse
                        />
                        {/* <LabelValue
                          label="Total (includes Others Slp)"
                          value={numberWithCommas(total_slp + (otherSlp || 0))}
                          isReverse
                        /> */}
                      </SC.MainInfoInner>
                    </SC.MainInfo>
                  </Panel>
                </Col>
                <Col xl={3} md={4}>
                  <Panel></Panel>
                </Col>
              </Row>
            </Container>
          </SC.Container>
        )
      }}
    </AppContext.Consumer>
  )
}