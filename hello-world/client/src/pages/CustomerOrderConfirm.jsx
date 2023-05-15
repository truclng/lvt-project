import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material';
import { MenuBar } from '../components/Menu';
import { ConfirmCard } from '../components/ConfirmCard';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import '../styles/Main.css';
import '../styles/CustomerConfirm.css';
import { useNavigate } from 'react-router-dom';

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
const boxMsg = [
	`Your request will be shown to our talented community of makers.

	They will analyse your request, then send their ideas and comments alongside a price quote to you.`,
	`Review and accept the offer you find most suitable.

	You can chat with them and check in as they make your order.`,
	`Pay for your order and receive it at your door step, or pick it up from a local vendor.`
];

export const CustomerOrderConfirm = () => {
	const orderNumber = '#GEN1234'; // retrieve from last screen
	const navigate = useNavigate();

	const createRequest = () => {
		navigate('/customer/order');
	}

	// Check my Request should send a request to backend with the order number
	// and email that we already have

	return (
		<ThemeProvider theme={theme}>
			<MenuBar isCustomer={isCustomer} />
			<div className='text-grp'>
				<Typography variant='h5' sx={{ mb: 2 }}>
					{`Your Request Order Number is ${orderNumber}`}
				</Typography>
				<Typography variant='body1' sx={{ mb: 1 }}>
					We have sent a copy of the request details and confirmation to your email address!
				</Typography>
				<Typography variant='body2'>
					What's next?
				</Typography>
			</div>
			<div className='confirmation-boxes'>
				<ConfirmCard icon={<PeopleIcon />} msg={boxMsg[0]} />
				<ConfirmCard icon={<FavoriteBorderIcon />} msg={boxMsg[1]} />
				<ConfirmCard icon={<LocalShippingIcon />} msg={boxMsg[2]} />
			</div>
			<div className='confirm-btns'>
				<Button variant='contained' color='primary'>Check my Request</Button>
				<Button variant='outlined' color='primary' onClick={createRequest}>Create new Request</Button>
			</div>
		</ThemeProvider>
	);
}