import React from 'react';
import * as SC from './styled';

interface IProps {
  value: string | number;
  label: string;
  labelSmall?: string;
  isReverse?: boolean;
  isLarge?: boolean;
  align?: 'left' | 'right'
}
export default (props: IProps) => {
  const { value, label, isReverse, align, isLarge, labelSmall } = props;
  return (
    <SC.Container isLarge={isLarge} isReverse={isReverse} align={align}>
      {value}
      <p>{label} <small>{labelSmall}</small></p>
    </SC.Container>
  )
}