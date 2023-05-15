import * as React from 'react';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import '../styles/Main.css';

const theme = createTheme({
	palette: {
		primary: {
			main: '#555555'
		}
	},
	typography: {
		fontFamily: 'Inter'
	}
});

export const ConfirmCard = ({ icon, msg }) => {
	return (
		<ThemeProvider theme={theme}>
			<Card variant='outlined' sx={{ width: '28vw' }}>
				<CardContent>
					<IconButton
						sx={{ fontSize: '50px' }}
						color='primary'
					>
						{icon}
					</IconButton>
					<Typography variant='body2' color='primary'>
						{msg}
					</Typography>
				</CardContent>
			</Card>
		</ThemeProvider>
	);
}
