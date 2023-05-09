import '../styles/Main.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
	palette: {
		primary: {
			main: '#FFFBFB'
		},
		secondary: {
			main: '#545454'
		}
	},
  typography: {
    fontFamily: 'Inter'
  }
});

export const MainPage = () => {
	const navigate = useNavigate();
  const makeOrder = () => {
    navigate('/customer');
  }
	
	return (
    <ThemeProvider theme={theme}>
      <div className='app-main'>
      <img src='https://meyd.it/img/core-img/white_logo.png' alt='meyd.it logo' />
        <div className='main-buttons'>
          <Button variant='contained' color='primary' onClick={makeOrder}>Customer</Button>
          <Button variant='contained' color='secondary'>Maker</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
