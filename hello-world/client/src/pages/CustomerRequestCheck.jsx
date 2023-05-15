import * as React from 'react';
import { MenuBar } from '../components/Menu';
import '../styles/Main.css';
import { createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const theme = createTheme({
	palette: {
		primary: {
			main: '#845FC2'
		},
		secondary: {
			main: '#A5A3A3'
		}
	},
	typography: {
		fontFamily: 'Inter'
	}
});

const isCustomer = true;

export const CustomerRequestCheck = () => {
	const requestNumber = '#JPEG123'; // should be requested from backend later

	return (
		<ThemeProvider theme={theme}>
				<MenuBar isCustomer={isCustomer} />
				<Typography variant='h4' sx={{ m: '2vw' }}>
					{`Request Order ${requestNumber}`}
				</Typography>
				<Button variant='outlined' color='secondary'>Status</Button>
				<div>
					
				</div>
		</ThemeProvider>
	);
}