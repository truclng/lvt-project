import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material';
import '../styles/Main.css';

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

// Need to fix styling

export const RequestBidCard = (props) => {
	return (
		<ThemeProvider theme={theme}>
			<Card sx={{ minWidth: '65vw', display: 'flex' }}>
				<CardContent>
					<div>
						<Typography>{props.makerName}</Typography>
						<Typography>$ {props.bidPrice}</Typography>
					</div>
					<div>
						<Typography>Comment</Typography>
						<Typography>{props.description}</Typography>
					</div>
				</CardContent>
				<CardActions>
					<div>
						<Button color='primary' variant='contained' disabled={props.isBidding}>Accept</Button>
						<Button color='secondary' variant='contained' disabled={props.isBidding}>Reject</Button>
					</div>
				</CardActions>
			</Card>
		</ThemeProvider>
	);
}
