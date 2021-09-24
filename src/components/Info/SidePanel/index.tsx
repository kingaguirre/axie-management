import Panel from '../../Panel';
import LabelValue from '../../LabelValue';
import ronin_img from '../../../assets/rounded-ronin-icon.png';
import { getTotalSlp, getAvg, copyToClipboard } from '../../utils';
import { getWinRate } from '../utils';
import * as SC from './styled';

export default (props: any) => {
  const { mmr, fetchingAxies, axies, fetchingBattles, battles, last_claim, total_slp, in_game_slp, share, rank, ronin } = props;

  return (
    <Panel>
      <SC.Label>Stats</SC.Label>
      <SC.Ronin onClick={() => copyToClipboard(ronin)}>
        <img
          src={ronin_img}
          alt="Ronin Ico"
          title="Copy Ronin Address"
        />
        <span>{ronin}</span>
      </SC.Ronin>
      <SC.Info>
        <LabelValue
          label="MMR"
          value={mmr}
          isReverse
          size="small"
        />
        <LabelValue
          label="Rank"
          value={`#${rank}`}
          isReverse
          size="small"
        />
        <LabelValue
          label="Axies"
          value={fetchingAxies ? '-' : !!axies ? axies.length : 0}
          isReverse
          size="small"
        />
        <LabelValue
          label="Battles"
          value={fetchingBattles ? '-' : getWinRate(battles)}
          isReverse
          size="small"
        />
      </SC.Info>
    </Panel>
  )
}