import { ReactNode } from 'react';
import { Col, InputGroup } from 'react-bootstrap';
import * as SC from './styled';

interface IProps {
  children: ReactNode;
  title: string;
  sizes?: any;
  onClickAscDescButton?: () => void;
  ascDescText?: string;
  totalTeams?: string;
}
export default (props: IProps) => (
  <Col {...props.sizes}>
    <SC.ControlContainer>
      <InputGroup size="sm">
        {!!props.onClickAscDescButton && (
          <SC.AscDescContainer onClick={props.onClickAscDescButton}>
            {props.ascDescText}
          </SC.AscDescContainer>
        )}
        <InputGroup.Text>{props.title}</InputGroup.Text>
        {props.children}
        {props.totalTeams && <InputGroup.Text>{props.totalTeams}</InputGroup.Text>}
      </InputGroup>
    </SC.ControlContainer>
  </Col>
);