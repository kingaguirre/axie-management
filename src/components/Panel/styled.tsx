import styled from 'styled-components';

interface IProps {
  isHighligted?: boolean;
  theme?: any;
}
export const Container = styled.div<IProps>`
  background-color: ${p => p.isHighligted ? p.theme.borderColor : p.theme.panelBg};
  border: 1px solid ${p => p.theme.borderColor};
  border-radius: 3px;
  padding: 12px;
  text-align: center;
  color: ${p => p.theme.color};
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
