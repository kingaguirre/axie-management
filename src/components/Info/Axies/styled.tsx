import styled from 'styled-components';
import { Title as TitleStyle } from '../styled';

export const AxiesContainer = styled.div`
  > .row {
    &:not(:first-child) {
      > * {
        margin-bottom: 24px;
      }
    }
  }
`;

export const Title = styled(TitleStyle)`
  margin-bottom: 12px;
`;

export const Axies = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const AxieIdName = styled.div`
  > span {
    font-size: 16px;
    color: white;
    font-weight: 600;
    line-height: 1;
    margin-top: 5px;
    display: flex;
    align-items: center;
    > svg {
      margin-right: 5px;
    }
  }
`;

export const Id = styled.div`
  color: white;
  padding: 4px 2px 3px;
  border-radius: 4px;
  background-color: grey;
  line-height: 1;
  text-align: center;
  font-size: 11px;
  width: 70px;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  img {
    width: 200px;
    min-height: 150px;
  }
`;

export const StatContainer = styled.div`
  p {
    color: #a1a6b6;
    margin-bottom: 4px;
    text-transform: uppercase;
    font-weight: 600;
  }
  > div {
    display: flex;
    align-items: cetner;
    justify-content: flex-start;
    > span {
      margin-left: 8px;
      font-size: 20px;
      font-weight: 600;
      color: white;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const RightInfo = styled.div`
  > * {
    margin-bottom: 12px;
  }
`;
