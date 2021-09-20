import React from 'react';
import TimeAgo from 'react-timeago';
import slp_img from '../../assets/slp.png';
import ronin_img from '../../assets/rounded-ronin-icon.png';
import LabelValue from '../LabelValue';
import { AppContext } from '../../App';
import { numberWithCommas, getTotalSlp, getAvg, PHP_PREFIX, copyToClipboard, getTotalDays } from '../utils';
import * as SC from './styled';

export default (props: any) => {
  const { name, cache_last_updated, last_claim, total_slp, in_game_slp, mmr, share, rank, ronin, slpData, leaderboardData } = props;
  const { gameSlp, lastClaim, totalSlp, updatedOn } = slpData;
  const { elo, rank: rankNew } = leaderboardData;
  
  const isManager = share === -1;
  const calculatedShare = getAvg(lastClaim || last_claim, gameSlp || in_game_slp) >= 125 ? 60 : 50;
  const totalIskoSlp: number = getTotalSlp(totalSlp || total_slp, isManager ? 100 : calculatedShare);

  return (
    <SC.Container>
      <SC.ShareIcon
        isQouta={isManager ? true : calculatedShare > 50}
        title={`Share ${isManager ? 100 : calculatedShare}%`}
      >
        {isManager ? 100 : calculatedShare}%
      </SC.ShareIcon>
      <SC.Header>
        <SC.Name>
          <img
            onClick={() => copyToClipboard(ronin)}
            src={ronin_img} alt="Ronin Ico"
            title="Copy Ronin Address"
          />
          {name}
        </SC.Name>
        <LabelValue
          label="MMR"
          value={elo || mmr}
          align="right"
        />
      </SC.Header>
      <SC.Body>
        <SC.Slp>
          <img src={slp_img} alt="SLP Icon"/>
          <AppContext.Consumer>
            {({slpPrice}) => (
              <LabelValue
                label={`${PHP_PREFIX}${numberWithCommas(slpPrice * totalIskoSlp)}`}
                labelSmall={`in ${getTotalDays(lastClaim || last_claim)} days`}
                value={numberWithCommas(totalIskoSlp)}
                align="left"
                isLarge
              />
            )}
          </AppContext.Consumer>
        </SC.Slp>
        <LabelValue
          label="Avg"
          value={getAvg(lastClaim || last_claim, gameSlp || in_game_slp)}
          isReverse
        />
        <LabelValue
          label="Total"
          value={numberWithCommas(totalSlp || total_slp)}
          isReverse
        />
        <LabelValue
          label="Manager"
          value={numberWithCommas(getTotalSlp(totalSlp || total_slp, isManager ? 100 : 100 - calculatedShare))}
          isReverse
        />
      </SC.Body>
      <SC.Footer>
        <SC.UpdatedOn><TimeAgo date={updatedOn || cache_last_updated}/></SC.UpdatedOn>
          <LabelValue
            label="Rank"
            value={`#${rankNew || rank}`}
            align="right"
            isReverse
          />
      </SC.Footer>
    </SC.Container>
  )
}