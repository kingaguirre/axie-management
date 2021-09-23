
import { ReactNode } from 'react';
import * as SC from './styled';

interface IProps {
  children?: ReactNode;
  isHighligted?: boolean;
}
export default (props: IProps) => (
  <SC.Container isHighligted={props.isHighligted}>
    {props.children}
  </SC.Container>
);