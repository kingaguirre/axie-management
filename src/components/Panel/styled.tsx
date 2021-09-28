import styled from 'styled-components';

interface IProps {
  isHighligted?: boolean;
  onClick?: any;
  theme?: any;
}
export const Container = styled.div<IProps>`
  background-color: ${p => p.isHighligted ? p.theme.borderColor : p.theme.panelBg};
  border: 1px solid ${p => p.theme.borderColor};
  border-radius: 3px;
  padding: 12px;
  color: ${p => p.theme.color};
  height: 100%;
  transition: all .3s ease;
  animation: fadeIn 0.6s ease;
  ${p => p.onClick ? `
    cursor: pointer;
    &:hover {
      border-color: #11131b;
      background-color: ${p.theme.borderColor};
      box-shadow: 0px 3px 8px 0px rgba(17, 19, 27, .3);
    }
  ` : ''}
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
