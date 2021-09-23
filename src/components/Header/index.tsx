
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slp_img from '../../assets/slp.png';
import { AppContext } from '../Main';
import * as SC from './styled';

export default () => {
  return (
    <SC.HeaderContainer>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>Axie | kingSs</Navbar.Brand>
          </Link>
          <Nav className="justify-content-end">
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
        </Container>
      </Navbar>
    </SC.HeaderContainer>
  )
}