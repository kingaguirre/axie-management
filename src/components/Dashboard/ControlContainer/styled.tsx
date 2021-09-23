import styled from 'styled-components';
import { InputGroup } from 'react-bootstrap';

export const ControlContainer = styled.div`
  margin: 6px 0;
  .input-group.input-group-sm {
    .input-group-text {
      background-color: ${p => p.theme.panelBg};
      border: 1px solid ${p => p.theme.borderColor};
      color: ${p => p.theme.color};
      font-size: 10px!important;
      font-weight: 700;
      text-transform: uppercase;
      white-space: nowrap;
      margin: 0;
      line-height: 1;
      min-width: 65px;
    }
  }
  .form-control {
    background-color: ${p => p.theme.panelBg};
    border: 1px solid ${p => p.theme.borderColor};
    border-radius: 3px;
    color: ${p => p.theme.color};
    padding-left: 12px;
    
  }
  select.form-control {
    background-repeat: no-repeat;
    background-position: center right 12px;
    background-size: 12px;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgb(235,237,238)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  }
`;

export const AscDescContainer = styled(InputGroup.Text)`
  cursor: pointer;
  min-width: 40px!important;
  justify-content: center;
`;