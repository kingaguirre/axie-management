import styled from 'styled-components';
import { Label as LabelStyle, Info as InfoStyle } from '../styled';

export const Ronin = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 14px;
  &:hover {
    > span {
      opacity: 1;
    }
    > img {
      border-color: rgba(255, 255, 255, 0.7);
    }
  }
  > span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    opacity: 0.8;
    transition: all .3s ease;
    font-size: 11px;
  }
  > img {
    width: 22px;
    margin-right: 10px;
    transition: all .3s ease;
    border: 1px solid transparent;
    border-radius: 50%;
  }
`;

export const Label = styled(LabelStyle)``;

export const Info = styled(InfoStyle)``;
