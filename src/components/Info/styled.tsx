import styled from 'styled-components';

export const Container = styled.div`
  > .container > .row > * {
    margin-bottom: 24px;
  }
`;

export const Title = styled.h5`
  font-weight: bold;
  margin: 15px 0 0;
  display: flex;
  align-items: center;
  > span {
    margin-right: 5px;
    cursor: pointer;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  > * {
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
`;

export const Label = styled.div`
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: bold;
  opacity: 0.8;
  text-align: center;
`;
