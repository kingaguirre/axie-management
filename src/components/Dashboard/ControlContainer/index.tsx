import React, { ReactNode } from 'react';
import { Col, InputGroup } from 'react-bootstrap';
import * as SC from './styled';

interface IProps {
  children: ReactNode;
  title: string;
  sizes?: any;
  onClickAscDescButton?: () => void;
  ascDescText?: string;
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
      </InputGroup>
    </SC.ControlContainer>
  </Col>
);
