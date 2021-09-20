import styled from 'styled-components';

export const HeaderContainer = styled.div`
  &&& {
    .navbar.bg-dark {
      background-color: #36393f!important;
      border-bottom: 1px solid rgb(47, 49, 54);
      height: 52px;
      a {
        text-decoration: none!important;
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
