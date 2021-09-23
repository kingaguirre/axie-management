import styled from 'styled-components';

export const Container = styled.div``;

export const Loader = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:before {
    height: 50px;
    width: 50px;
    border: 6px solid white;
    border-bottom: 6px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    content: '';
    opacity: 0.7;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

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
