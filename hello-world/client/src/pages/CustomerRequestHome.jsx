import * as React from 'react';
import { MenuBar } from '../components/Menu';
import '../styles/Main.css';
import '../styles/CustomerRequest.css';
import { createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
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

export const CustomerRequestHome = () => {
	const navigate = useNavigate();
	const returnHome = () => {
		navigate('/customer');
	}

	const [request, setRequest] = React.useState('');
	const [email, setEmail] = React.useState('');

	const submitCheck = () => {
		console.log(request, email);

		// API request to load and check request

		// Alert if invalid

		// Otherwise navigate to check display page
	}

	return (
		<ThemeProvider theme={theme}>
			<MenuBar isCustomer={isCustomer} />
			<Typography variant='h4' sx={{ m: '2vw' }}>
				Check Your Request Status
			</Typography>
			<div className='request-form'>
				<form onSubmit={(event) => {
					event.preventDefault();
				}}>
					<table>
						<tbody>
							<tr className='row-style'>
								<Typography sx={{ mr: 2 }}>Request Number</Typography>
								<td>
									<TextField
										required
										type='text'
										size='small'
										variant='outlined'
										placeholder='Your unique request ID'
										sx={{ width: '25vw'}}
										value={request}
										onChange={(event) => setRequest(event.target.value)}
									/>
								</td>
							</tr>
							<tr className='row-style'>
								<Typography sx={{ mr: 2 }}>Email</Typography>
								<td>
									<TextField
										required 
										type='text'
										size='small'
										variant='outlined'
										placeholder='The email used to place your request'
										sx={{ width: '25vw'}}
										value={email}
										onChange={(event) => setEmail(event.target.value)}
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>
			<div className='req-btns'>
				<Button variant='contained' color='primary' onClick={submitCheck}>Check Request</Button>
				<Button variant='outlined' color='secondary' onClick={returnHome}>Return</Button>
			</div>
		</ThemeProvider>
	);
}