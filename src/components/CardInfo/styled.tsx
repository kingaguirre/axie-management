import styled from 'styled-components';

interface IProps {
  isHighligted?: boolean
}
export const Container = styled.div<IProps>`
  background-color: ${p => p.isHighligted ? 'rgba(235, 237, 238, 0.2)' : 'rgb(54, 57, 63)'};
  border: 1px solid rgba(235, 237, 238, 0.125);
  border-radius: 3px;
  padding: 12px;
  text-align: center;
  color: rgb(235, 237, 238);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Value = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const SubValue = styled.div`
  font-size: 10px;
  font-weight: 500;
`;
