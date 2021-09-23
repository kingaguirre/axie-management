import { ThemeProvider } from 'styled-components';
import * as SC from './styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';

const theme = {
  bodyBg: '#242735',
  headerBG: '#11131b',
  headerBorderColor: '#3a3f50',
  panelBg: '#282b39',
  borderColor: '#3a3f50',
  color: 'rgb(235,237,238)',
};

export default () => (
  <ThemeProvider theme={theme}>
    <SC.AppContainer>
      <SC.GlobalStyle/>
      <Main/>
    </SC.AppContainer>
  </ThemeProvider>
);
