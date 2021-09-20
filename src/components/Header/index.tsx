import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import slp_img from '../../assets/slp.png';
import { AppContext } from '../../App';
import * as SC from './styled';

export default () => {
  return (
    <SC.HeaderContainer>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Link to="/">
          <Navbar.Brand>Axie | kingSs</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          {/* <Nav className="me-auto">
            <Link to="/">
              <Nav.Link>
                <svg
                  style={{fill: 'white'}}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 9a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5a1 1 0 011-1h5zm-9 3a1 1 0 011 1v2a1 1 0 01-1 1H1a1 1 0 01-1-1v-2a1 1 0 011-1h5zM6 0a1 1 0 011 1v8a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h5zm9 0a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V1a1 1 0 011-1h5z" fill-rule="evenodd"/>
                </svg>
                Dashboard
              </Nav.Link>
            </Link>
          </Nav> */}
          <Nav className="justify-content-end" style={{width: '100%'}}>
            <Nav.Link disabled>
              <AppContext.Consumer>
                {({slpPrice}: any) => (
                  <SC.CoinGecko>
                    ₱ {slpPrice}
                    <img src={slp_img} alt="SLP icon"/>
                  </SC.CoinGecko>
                )}
              </AppContext.Consumer>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </SC.HeaderContainer>
  )
}