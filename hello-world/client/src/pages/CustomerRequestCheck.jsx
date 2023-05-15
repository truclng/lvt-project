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
		},
		statusBid: {
			main: '#F49C5D'
		},
		statusMain: {
			main: '#44A148'
		}
	},
	typography: {
		fontFamily: 'Inter'
	}
});

const isCustomer = true;

// Backend API to retrieve all bids related to request

export const CustomerRequestCheck = () => {
	const requestNumber = '#JPEG123'; // should be requested from backend 
	const requestStatus = 'Bidding'; // should be requested from backend

	return (
		<ThemeProvider theme={theme}>
				<MenuBar isCustomer={isCustomer} />
				<Typography variant='h4' sx={{ m: '2vw' }}>
					{`Request Order ${requestNumber}`}
				</Typography>
				{requestStatus === 'Bidding'
				? <Button variant='outlined' color='statusBid'>Bidding</Button>
				: <Button variant='outlined' color='statusMain'>Processed</Button>}
				<div className='req-bids'>

				</div>
		</ThemeProvider>
	);
}