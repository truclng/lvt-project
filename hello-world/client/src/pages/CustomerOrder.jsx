import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { MenuBar } from '../components/Menu';
import { createTheme, MenuItem, ThemeProvider } from '@mui/material';
import '../styles/CustomerOrder.css';
import '../styles/Main.css';
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

const states = [
	{
		value: 'NSW',
		label: 'New South Wales'
	},
	{
		value: 'VIC',
		label: 'Victoria'
	},
	{
		value: 'ACT',
		label: 'Australian Capital Territory'
	},
	{
		value: 'QLD',
		label: 'Queensland'
	},
	{
		value: 'TAS',
		label: 'Tasmania'
	},
	{
		value: 'WA',
		label: 'Western Australia'
	},
	{
		value: 'NT',
		label: 'Northern Territory'
	},
	{
		value: 'SA',
		label: 'Southern Australia'
	},
];

const clothesType = [
	{
		value: 'Dress',
		label: 'Dress'
	},
	{
		value: 'Pants',
		label: 'Pants'
	},
	{
		value: 'Shirt',
		label: 'Shirt'
	},
	{
		value: 'Outerwear',
		label: 'Outerwear'
	},
	{
		value: 'Swimwear',
		label: 'Swimwear'
	},
	{
		value: 'Accessories',
		label: 'Accessories'
	}
];

const isValidEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export const CustomerOrder = () => {
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [number, setNumber] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [address, setAddress] = React.useState('');
	const [suburb, setSuburb] = React.useState('');
	const [postcode, setPostcode] = React.useState('');
	const [state, setState] = React.useState('');
	const [request, setRequest] = React.useState('');
	const [clothType, setType] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [budget, setBudget] = React.useState('');

	const submitOrder = () => {
		// Check for valid email address
		if (!isValidEmail(email)) {
			alert('Invalid email address used for order!');
		}

		// Send API request to store customer request
		console.log(`Customer ${firstName} ${lastName} has contact details ${number} and ${email}`);
		console.log(`Their address is ${address}, ${suburb} ${postcode} ${state}`);
		console.log(`Their request is ${request} for a ${clothType} with budget $AUD ${budget}`);
		console.log(description);
	}

	const navigate = useNavigate();
	const returnHome = () => {
		navigate('/customer');
	}

	return (
		<ThemeProvider theme={theme}>
			<MenuBar isCustomer={isCustomer}></MenuBar>
			<Typography variant='h4' color='secondary' sx={{ ml: '2vw', mt: '3vh' }}>
				Begin your journey as a fashionista today!
			</Typography>
			<div className='customer-form'>
				<table className='table-style'>
					<tbody>
						<tr className='row-style'>
							<Typography sx={{ mr: 2 }}>First Name</Typography>
							<td>
								<TextField
									required
									variant='outlined'
									type='text'
									size='small'
									placeholder='John'
									value={firstName}
									onChange={(event) => setFirstName(event.target.value)}
								/>
							</td>
						</tr>
						<tr className='row-style'>
							<Typography sx={{ mr: 2 }}>Last Name</Typography>
							<td>
								<TextField
									required
									variant='outlined'
									type='text'
									size='small'
									placeholder='Smith'
									value={lastName}
									onChange={(event) => setLastName(event.target.value)}
								/>
							</td>
						</tr>
						<tr className='row-style'>
							<Typography sx={{ mr: 2 }}>Phone Number</Typography>
							<td>
								<TextField
									required
									variant='outlined'
									type='number'
									size='small'
									placeholder='0412345678'
									value={number}
									onChange={(event) => setNumber(event.target.value)}
								/>
							</td>
						</tr>
						<tr className='row-style'>
							<Typography sx={{ mr: 2 }}>Email Address</Typography>
							<td>
								<TextField
									required
									variant='outlined'
									type='text'
									size='small'
									placeholder='johnsmith@gmail.com'
									value={email}
									onChange={(event) => setEmail(event.target.value)}
								/>
							</td>
						</tr>
						<tr className='row-style'>
							<Typography sx={{ mr: 2 }}>Street Address</Typography>
							<td>
								<TextField
									required
									variant='outlined'
									type='text'
									size='small'
									placeholder='1 Street Name'
									value={address}
									onChange={(event) => setAddress(event.target.value)}
								/>
							</td>
						</tr>
						<tr className='row-style'>
							<Typography sx={{ mr: 2 }}>Suburb</Typography>
							<td>
								<TextField
									required
									variant='outlined'
									type='text'
									size='small'
									placeholder='Suburb Name'
									value={suburb}
									onChange={(event) => setSuburb(event.target.value)}
								/>
							</td>
						</tr>
						<tr className='row-style'>
							<Typography sx={{ mr: 2 }}>Postcode</Typography>
							<td>
								<TextField
									required
									variant='outlined'
									type='number'
									size='small'
									placeholder='1234'
									value={postcode}
									onChange={(event) => setPostcode(event.target.value)}
								/>
							</td>
						</tr>
						<tr className='row-style'>
							<Typography sx={{ mr: 2 }}>State</Typography>
							<td>
								<TextField
									required
									select
									size='small'
									variant='outlined'
									defaultValue='NSW'
									value={state}
									onChange={(event) => setState(event.target.value)}
								>
									{states.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</td>
						</tr>
					</tbody>
				</table>
				<table>
					<tbody>
						<tr className='row-style'>
							<Typography sx={{ mr: 2 }}>Request Name</Typography>
							<td>
								<TextField
									required
									variant='outlined'
									type='text'
									size='small'
									sx={{ width: '15vw' }}
									value={request}
									onChange={(event) => setRequest(event.target.value)}
								/>
							</td>
						</tr>
						<tr className='row-style'>
							<Typography sx={{ mr: 2 }}>Description</Typography>
							<td>
								<TextField
									required
									multiline
									variant='outlined'
									type='text'
									size='small'
									maxRows={5}
									sx={{ width: '15vw' }}
									value={description}
									onChange={(event) => setDescription(event.target.value)}
								/>
							</td>
						</tr>
						<tr className='row-style'>
							<Typography sx={{ mr: 2 }}>Clothing Type</Typography>
							<td>
								<TextField
									required
									select
									size='small'
									variant='outlined'
									defaultValue='Shirt'
									value={clothType}
									onChange={(event) => setType(event.target.value)}
								>
									{clothesType.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</td>
						</tr>
						<tr className='row-style'>
							<Typography sx={{ mr: 2 }}>Budget</Typography>
							<td>
								<TextField
									variant='outlined'
									type='number'
									size='small'
									sx={{ width: '15vw' }}
									InputProps={{
										startAdornment: <InputAdornment position='start'>$</InputAdornment>
									}}
									value={budget}
									onChange={(event) => setBudget(event.target.value)}
								/>
							</td>
						</tr>
						<tr className='row-style'>
							<Typography sx={{ mr: 2 }}>Reference Images</Typography>
							<td>
								<Input
									type='file'
									multiple
									accept='image/*'
									sx={{ width: '15vw' }}
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='customer-buttons'>
				<Button variant='contained' color='primary' onClick={submitOrder}>Create Order</Button>
				<Button variant='outlined' color='secondary' onClick={returnHome}>Return</Button>
			</div>
		</ThemeProvider>
	);
}