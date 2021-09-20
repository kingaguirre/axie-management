import React from 'react';
import * as SC from './styled';

interface IProps {
  value: string | number;
  title: string;
  subValue?: string;
  isHighligted?: boolean
}
export default (props: IProps) => {
  const { value, title, subValue, isHighligted } = props;
  return (
    <SC.Container isHighligted={isHighligted}>
      <div>
        <SC.Title>{title}</SC.Title>
        <SC.Value>{value}</SC.Value>
        <SC.SubValue>{subValue}</SC.SubValue>
      </div>
    </SC.Container>
  )
}