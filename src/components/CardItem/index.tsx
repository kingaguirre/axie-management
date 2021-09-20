import React from 'react';
import TimeAgo from 'react-timeago';
import slp_img from '../../assets/slp.png';
import ronin_img from '../../assets/rounded-ronin-icon.png';
import LabelValue from '../LabelValue';
import { AppContext } from '../../App';
import { numberWithCommas, getTotalSlp, getAvg, PHP_PREFIX } from '../utils';
import * as SC from './styled';

export default (props: any) => {
  const { name, cache_last_updated, last_claim, total_slp, in_game_slp, mmr, share, rank, ronin } = props;
  
  const isManager = share === -1;
  const totalIskoSlp: number = getTotalSlp(total_slp, isManager ? 100 : share);

  return (
    <SC.Container>
      <SC.ShareIcon
        isQouta={isManager ? true : share > 50}
        title={`Share ${isManager ? 100 : share}%`}
      >
        {isManager ? 100 : share}%
      </SC.ShareIcon>
      <SC.Header>
        <SC.Name>
          <img
            onClick={() => navigator.clipboard.writeText(ronin)}
            src={ronin_img} alt="Ronin Ico"
            title="Copy Ronin Address"
          />
          {name}
        </SC.Name>
        <LabelValue
          label="MMR"
          value={mmr}
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
                value={numberWithCommas(totalIskoSlp)}
                align="left"
                isLarge
              />
            )}
          </AppContext.Consumer>
        </SC.Slp>
        <LabelValue
          label="Avg"
          value={getAvg(last_claim, in_game_slp)}
          isReverse
        />
        <LabelValue
          label="Total"
          value={numberWithCommas(total_slp)}
          isReverse
        />
        <LabelValue
          label="Manager"
          value={numberWithCommas(getTotalSlp(total_slp, isManager ? 100 : 100 - share))}
          isReverse
        />
      </SC.Body>
      <SC.Footer>
        <SC.UpdatedOn><TimeAgo date={cache_last_updated}/></SC.UpdatedOn>
          <LabelValue
            label="Rank"
            value={`#${rank}`}
            align="right"
            isReverse
          />
      </SC.Footer>
    </SC.Container>
  )
}