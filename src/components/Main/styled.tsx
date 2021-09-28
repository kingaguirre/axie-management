import styled from 'styled-components';

export const Container = styled.div``;

export const InnerContainer = styled.div`
  animation: fadeIn 0.6s ease;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
