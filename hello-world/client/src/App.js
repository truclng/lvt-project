import './App.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFBFB'
    },
    secondary: {
      main: '#545454'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='app-main'>
      <img src='https://meyd.it/img/core-img/white_logo.png' alt='meyd.it logo' />
        <div className='main-buttons'>
          <Button variant='contained' color='primary' className='button'>Customer</Button>
          <Button variant='contained' color='secondary' className='button'>Maker</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
