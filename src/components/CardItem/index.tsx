import TimeAgo from 'react-timeago';
import { useHistory } from 'react-router-dom';
import slp_img from '../../assets/slp.png';
import ronin_img from '../../assets/rounded-ronin-icon.png';
import LabelValue from '../LabelValue';
import { AppContext } from '../Main';
import {
  numberWithCommas,
  getAvg,
  PHP_PREFIX,
  copyToClipboard,
  getTotalDays,
  getIskoSlp,
  getManagerSlp,
  getCalculatedShare,
} from '../utils';
import * as SC from './styled';

export default (props: any) => {
  const { name, cache_last_updated, last_claim, total_slp, in_game_slp, mmr, share, rank, ronin } = props;
  const history = useHistory();

  const isManager: boolean = share === -1;
  const managerSlp: number = getManagerSlp(props);
  const iskoSlp: number = isManager ? managerSlp : getIskoSlp(props);
  const calculatedShare = getCalculatedShare(props);

  const getShareIconColor = (avgLimit: number) => {
    const avg = getAvg(last_claim, in_game_slp);
    return avg < 40 ? -1 : avg >= avgLimit ? 1 : 0;
  };

  const handleOnClick = (onInfoItemClick: any) => {
    onInfoItemClick(props);
    history.push('/info');
  };

  const handleCopyToClipboard = (e: any) => {
    e.stopPropagation();
    copyToClipboard(ronin);
  };

  return (
    <AppContext.Consumer>
      {({avgLimit, onInfoItemClick}) => (
        <SC.Container onClick={() => handleOnClick(onInfoItemClick)}>
          <SC.ShareIcon
            isQouta={isManager ? 1 : getShareIconColor(avgLimit)}
            title={`Share ${isManager ? 100 : calculatedShare}%`}
          >
            {isManager ? 100 : calculatedShare}%
          </SC.ShareIcon>
          <SC.Header>
            <SC.Name>
              <img
                onClick={handleCopyToClipboard}
                src={ronin_img} alt="Ronin Ico"
                title="Copy Ronin Address"
              />
              {name}
            </SC.Name>
            <LabelValue
              label="MMR"
              value={mmr}
              align="right"
              size="small"
            />
          </SC.Header>
          <SC.Body>
            <SC.Slp>
              <img src={slp_img} alt="SLP Icon"/>
              <AppContext.Consumer>
                {({slpPrice}) => (
                  <LabelValue
                    label={`${PHP_PREFIX}${numberWithCommas(slpPrice * iskoSlp)}`}
                    labelSmall={`in ${getTotalDays(last_claim)} days`}
                    value={numberWithCommas(iskoSlp)}
                    align="left"
                  />
                )}
              </AppContext.Consumer>
            </SC.Slp>
            <LabelValue
              label="Avg"
              value={getAvg(last_claim, in_game_slp)}
              isReverse
              size="small"
            />
            <LabelValue
              label="Total"
              value={numberWithCommas(in_game_slp)}
              isReverse
              size="small"
            />
            <LabelValue
              label="Manager"
              value={numberWithCommas(managerSlp)}
              isReverse
              size="small"
            />
          </SC.Body>
          <SC.Footer>
            <SC.UpdatedOn><TimeAgo date={cache_last_updated}/></SC.UpdatedOn>
              <LabelValue
                label="Rank"
                value={`#${rank}`}
                align="right"
                isReverse
                size="small"
              />
          </SC.Footer>
        </SC.Container>
      )}
    </AppContext.Consumer>
  )
}