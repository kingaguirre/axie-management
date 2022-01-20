import Panel from '../../Panel';
import LabelValue from '../../LabelValue';
import ronin_img from '../../../assets/rounded-ronin-icon.png';
import { copyToClipboard } from '../../utils';
import * as SC from './styled';

export default (props: any) => {
  const { mmr, rank, ronin } = props;

  const goToAccount = (ronin: any) => {
    const newWindow = window.open(`https://marketplace.axieinfinity.com/profile/${ronin}/axie/`, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  }

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
          value={<span onClick={() => goToAccount(ronin)}>View Axies</span>}
          isReverse
          size="small"
        />
        {/* <LabelValue
          label="Battles"
          value={fetchingBattles ? '-' : getWinRate(battles)}
          isReverse
          size="small"
        /> */}
      </SC.Info>
    </Panel>
  )
}