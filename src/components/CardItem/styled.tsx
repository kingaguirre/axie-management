import styled from 'styled-components';
import { Container as CardInfoContainer, Title } from '../CardInfo/styled';

export const Container = styled(CardInfoContainer)`
  justify-content: flex-start;
  display: block;
  position: relative;
`;

interface IShareIcon {
  isQouta?: boolean;
}
export const ShareIcon = styled.div<IShareIcon>`
  position: absolute;
  top: -1px;
  right: -1px;
  font-size: 0;
  font-weight: 600;
  width: 8px;
  height: 8px;
  background-color: ${p => p.isQouta ? 'var(--bs-teal)' : 'var(--bs-gray-400)'};
  color: ${p => p.isQouta ? 'white' : 'black'};
  border-radius: 0 50% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const Name = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-align: left;
  display: flex;
  align-items: center;
  > img {
    width: 20px;
    margin-right: 8px;
    border: 1px solid var(--bs-gray);
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const UpdatedOn = styled.div`
  font-size: 10px;
  font-weight: 500;
  opacity: 0.8;
`;

export const LabelValue = styled.div`
  font-size: 10px;
  font-weight: 700;
  text-align: right;
  > p {
    margin: 0;
    font-size: 8px;
    font-weight: 400;
    opacity: 0.8;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 5px;
  max-width: min-content;
  > * {
    text-align: center;
    margin-right: 10px;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
`;

export const Slp = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
  font-weight: 700;
  margin-right: 10px;
  > img {
    width: 24px;
    margin-right: 5px;
  }
  ${LabelValue} {
    text-align: left;
    font-size: 24px;
    p {
      font-size: 10px;
      margin-top: -8px;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
