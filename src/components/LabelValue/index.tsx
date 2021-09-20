import React from 'react';
import * as SC from './styled';

interface IProps {
  value: string | number;
  label: string;
  isReverse?: boolean;
  isLarge?: boolean;
  align?: 'left' | 'right'
}
export default (props: IProps) => {
  const { value, label, isReverse, align, isLarge } = props;
  return (
    <SC.Container isLarge={isLarge} isReverse={isReverse} align={align}>
      {value}
      <p>{label}</p>
    </SC.Container>
  )
}