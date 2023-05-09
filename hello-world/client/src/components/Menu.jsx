import { AppBar, Link, createTheme, ThemeProvider } from '@mui/material';
import '../styles/Main.css';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

const theme = createTheme({
	palette: {
		primary: {
			main: '#845FC2'
		}
	},
	typography: {
		fontFamily: 'Inter'
	}
});

export const MenuBar = ( { isCustomer }) => {
	let displayText = 'maker';
	if (isCustomer) {
		displayText = 'customer';
	}

	return (
		<ThemeProvider theme={theme}>
			<AppBar position='static' color='primary'>
				<Toolbar>
					<Link href='/'>
						<img src='https://meyd.it/img/core-img/white_logo.png' alt='meyd.it logo' style={{ maxHeight: '6vh', marginRight: '1vw', marginTop: '1vh' }} />
					</Link>
					<Typography variant='body1' sx={{ flexGrow: 1, color: 'white' }}>
						{displayText}
					</Typography>
					<IconButton
						size='large'
						color='inherit'
						aria-label='menu'
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	)
}