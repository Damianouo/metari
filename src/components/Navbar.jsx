import React, { useState } from 'react';
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	styled,
} from '@mui/material';
import { Mail, Notifications, Pets } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	padding: '0 10px ',
	borderRadius: theme.shape.borderRadius,
	width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	gap: '20px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '10px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}));

function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Toolbar variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
					LAMA DEV
				</Toolbar>
				<Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
				<Search>
					<InputBase placeholder='search...' />
				</Search>
				<Icons>
					<Badge badgeContent={4} color='error'>
						<Mail />
					</Badge>
					<Badge badgeContent={4} color='error'>
						<Notifications />
					</Badge>
					<Avatar
						sx={{ width: '30px', height: '30px' }}
						src='https://images.pexels.com/photos/4192655/pexels-photo-4192655.jpeg'
						onClick={() => setOpen(true)}
					/>
				</Icons>
				<UserBox>
					<Avatar
						sx={{ width: '30px', height: '30px' }}
						src='https://images.pexels.com/photos/4192655/pexels-photo-4192655.jpeg'
						onClick={() => setOpen(true)}
					/>
					<Typography variant='span'>JJong</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				open={open}
				onClose={() => setOpen(false)}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
}

export default Navbar;
