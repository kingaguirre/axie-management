import styled from 'styled-components';

export const HeaderContainer = styled.div`
  &&& {
    .navbar.bg-dark {
      background-color: ${p => p.theme.headerBG}!important;
      border-bottom: 1px solid ${p => p.theme.headerBorderColor};
      height: 52px;
      padding: 0;
      a {
        text-decoration: none!important;
      }
      .navbar-brand {
        font-weight: 700;
        font-size: 18px;
      }
      .nav-link {
        font-weight: 500;
        display: flex;
        align-items: center;
        height: 52px;
        > svg {
          margin-right: 8px;
        }
      }
    }
  }
`;

export const CoinGecko = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  img {
    width: 14px;
    margin-left: 2px;
  }
`;