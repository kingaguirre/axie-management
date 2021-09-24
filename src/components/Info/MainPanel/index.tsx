import TimeAgo from 'react-timeago';
import { Row, Col } from 'react-bootstrap';
import Panel from '../../Panel';
import LabelValue from '../../LabelValue';
import slp_img from '../../../assets/slp.png';
import { numberWithCommas, getTotalSlp, getAvg, PHP_PREFIX, getTotalDays } from '../../utils';
import * as SC from './styled';

export default (props: any) => {
  const { slpPrice, cache_last_updated, lifetime_slp, otherSlp, last_claim, total_slp, in_game_slp, share, rank, ronin } = props;

  const isManager = share === -1;
  const calculatedShare = getAvg(last_claim, in_game_slp) >= 125 ? 60 : 50;
  const totalIskoSlp: number = getTotalSlp(total_slp, isManager ? 100 : calculatedShare);

  return (
    <Panel>
      <SC.MainInfo>
        <SC.TimeContainer>
          <TimeAgo date={cache_last_updated}/>
        </SC.TimeContainer>
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

        <Row>
          <Col lg={6}>
            <SC.MainInfoInner>
              <SC.Label>This Month's Slp</SC.Label>
              <SC.Info>
                <LabelValue
                  label="Avg"
                  value={getAvg(last_claim, in_game_slp)}
                  isReverse
                />
                <LabelValue
                  label="Manager"
                  value={numberWithCommas(getTotalSlp(total_slp, isManager ? 100 : 100 - calculatedShare))}
                  isReverse
                />
                <LabelValue
                  label="Total"
                  value={numberWithCommas(total_slp)}
                  isReverse
                />
              </SC.Info>
            </SC.MainInfoInner>
          </Col>
          <Col lg={6}>
            <SC.MainInfoInner>
              <SC.Label>Other Slp Details</SC.Label>
              <SC.Info>
                <LabelValue
                  label="On hold"
                  labelSmall={!!otherSlp && <a href="https://docs.google.com/spreadsheets/d/1Wid6sPNYWrAtNd7o-Q2OIqLzBvkPuNkQClPbVvqz8Bk/edit#gid=0" target="_blank">Details</a>}
                  value={otherSlp || 0}
                  isReverse
                />
                <LabelValue
                  label="Share + On hold"
                  labelSmall={`${PHP_PREFIX}${numberWithCommas(slpPrice * (totalIskoSlp + (otherSlp || 0)))} `}
                  value={numberWithCommas(totalIskoSlp + (otherSlp || 0))}
                  isReverse
                />
                <LabelValue
                  label="Total Farmed"
                  value={numberWithCommas(lifetime_slp + total_slp)}
                  isReverse
                />
              </SC.Info>
            </SC.MainInfoInner>
          </Col>
        </Row>
      </SC.MainInfo>
    </Panel>

  )
}