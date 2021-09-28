import Panel from '../Panel';
import * as SC from './styled';

interface IProps {
  value: string | number;
  title: string;
  subValue?: string;
  isHighligted?: boolean
  onClick?: any
}
export default (props: IProps) => {
  const { value, title, subValue, isHighligted, onClick } = props;
  return (
    <Panel onClick={onClick} isHighligted={isHighligted}>
      <SC.CardInfoContainer>
        <SC.Title>{title}</SC.Title>
        <SC.Value>{value}</SC.Value>
        <SC.SubValue>{subValue}</SC.SubValue>
      </SC.CardInfoContainer>
    </Panel>
  )
}