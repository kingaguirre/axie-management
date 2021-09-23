import { ReactNode } from 'react';
import * as SC from './styled';

interface IProps {
  value: string | number;
  label: string;
  labelSmall?: ReactNode;
  isReverse?: boolean;
  size?: 'small' | 'large' | undefined;
  align?: 'left' | 'right'
}
export default (props: IProps) => {
  const { value, label, isReverse, align, labelSmall, size } = props;
  return (
    <SC.Container size={size} isReverse={isReverse} align={align}>
      {value}
      <p>{label} {!!labelSmall && <small>{labelSmall}</small>}</p>
    </SC.Container>
  )
}