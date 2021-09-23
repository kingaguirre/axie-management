import styled from 'styled-components';
import * as CardItemSC from '../CardItem/styled';
import { Container as PanelContainer } from '../Panel/styled';
import { Container as LabelValueContainer } from '../LabelValue/styled';

export const Container = styled.div`
  ${PanelContainer} {
    margin-bottom: 12px;
  }
`;

export const Title = styled.h5`
  font-weight: bold;
  margin: 15px 0;
  display: flex;
  align-items: center;
  > span {
    margin-right: 5px;
    cursor: pointer;
  }
`;

export const MainInfo = styled.h4`
  display: block;
  width: 100%;
`

export const Slp = styled(CardItemSC.Slp)`
  > small {
    margin: 0 0 10px -40px;
    opacity: 0.9;
    font-size: 0.7em;
    display: flex;
    align-items: center;
    font-weight: 600;
    > i {
      margin-left: 5px;
      font-weight: normal;
      font-size: 0.7em;
    }
  }
  ${LabelValueContainer} {
    max-width: min-content;
    > p {
      margin: 0;
    }
  }
`;

export const MainInfoInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 24px;
  > * {
    margin-right: 24px;
  }
`;
