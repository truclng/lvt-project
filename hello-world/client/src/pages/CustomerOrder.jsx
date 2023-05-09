import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MenuBar } from '../components/Menu';
import { createTheme, ThemeProvider } from '@mui/material';
import '../styles/CustomerOrder.css';
import '../styles/Main.css';

const theme = createTheme({
	palette: {
		primary: {
			main: '#845FC2'
		},
		secondary: {
			main: '#555555'
		}
	},
	typography: {
		fontFamily: 'Inter'
	}
});

const isCustomer = true;

export const CustomerOrder = () => {
	return (
		<ThemeProvider theme={theme}>
			<MenuBar isCustomer={isCustomer}></MenuBar>
			<Typography variant='h4' color='secondary' sx={{ ml: '2vw', mt: '3vh' }}>
				Begin your journey as a fashionista today!
			</Typography>
			<div className='customer-buttons'>
				<Button variant='contained' color='primary'>Create Order</Button>
				<Button variant='outlined' color='secondary'>Cancel</Button>
			</div>
		</ThemeProvider>
	);
}