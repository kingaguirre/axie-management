
import { ReactNode } from 'react';
import * as SC from './styled';

interface IProps {
  children?: ReactNode;
  isHighligted?: boolean;
  onClick?: any
}
export default (props: IProps) => (
  <SC.Container onClick={props.onClick} isHighligted={props.isHighligted}>
    {props.children}
  </SC.Container>
);