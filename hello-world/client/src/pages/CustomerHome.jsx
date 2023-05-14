import * as React from 'react';
import { MenuBar } from '../components/Menu';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../styles/Main.css';
import '../styles/CustomerHome.css';
import { Button, createTheme, ThemeProvider } from '@mui/material';
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

const imgDisplay = [
	{
		img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
		title: 'Winter Fashion'
	},
	{
		img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
		title: 'Asian Fashion'
	},
	{
		img: 'https://plus.unsplash.com/premium_photo-1664358305556-148c365e179f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
		title: 'Casual Women Wear'
	},
	{
		img: 'https://images.unsplash.com/photo-1557777586-f6682739fcf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
		title: 'Design drawings'
	},
	{
		img: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
		title: 'Accessories'
	},
	{
		img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
		title: 'Coats store'
	},
	{
		img: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
		title: 'Makeup'
	},
	{
		img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
		title: 'Overseas fashion'
	},
	{
		img: 'https://images.unsplash.com/photo-1605834973436-d8126806bbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHN1c3RhaW5hYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		title: 'Fashion Campaign'
	}
];

export const CustomerHome = () => {
	const navigate = useNavigate();
	const makeRequest = () => {
		navigate('/customer/order');
	}

	return (
		<ThemeProvider theme={theme}>
			<MenuBar isCustomer={isCustomer} />
			<div className='photo-grid'>
				<Box sx={{ width: '60vw', height: '80vh', overflowY: 'scroll' }}>
					<ImageList variant='masonry' cols={2} gap={10}>
						{imgDisplay.map((item) => (
							<ImageListItem key={item.img}>
								<img
									src={`${item.img}?w=248&fit=crop&auto=format`}
									srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
									alt={item.title}
									loading='lazy'
								/>
							</ImageListItem>
						))}
					</ImageList>
				</Box>
			</div>
			<div className='req-buttons'>
				<Button variant='contained' color='primary' onClick={makeRequest}>Make a Request</Button>
				<Button variant='contained' color='secondary'>Check my Request</Button>
			</div>
		</ThemeProvider>
	);
}
