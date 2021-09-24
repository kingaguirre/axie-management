import styled from 'styled-components';
import * as CardItemSC from '../../CardItem/styled';
import { Container as LabelValueContainer } from '../../LabelValue/styled';
import { Label as LabelStyle, Info as InfoStyle } from '../styled';

export const MainInfo = styled.div`
  display: block;
  position: relative;
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
  margin-top: 24px;
`;

export const TimeContainer = styled.div`
  position: absolute;
  top: -8px;
  right: 0;
  opacity: 0.8;
  * {
    font-size: 12px;
    white-space: nowrap;
  }
`;

export const Label = styled(LabelStyle)``;

export const Info = styled(InfoStyle)``;
