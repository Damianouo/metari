import {
	AccountBox,
	Article,
	Diversity1,
	Group,
	Home,
	ModeNight,
	Settings,
	Store,
} from '@mui/icons-material';
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Switch,
} from '@mui/material';
import React from 'react';

function Sidebar() {
	return (
		<Box p={2} sx={{ display: { xs: 'none', sm: 'block' }, flex: '1 1 14%' }}>
			<Box position='fixed'>
				<List>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText primary='Homepage' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#page'>
							<ListItemIcon>
								<Article />
							</ListItemIcon>
							<ListItemText primary='Page' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#group'>
							<ListItemIcon>
								<Group />
							</ListItemIcon>
							<ListItemText primary='Group' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#store'>
							<ListItemIcon>
								<Store />
							</ListItemIcon>
							<ListItemText primary='Store' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#friend'>
							<ListItemIcon>
								<Diversity1 />
							</ListItemIcon>
							<ListItemText primary='Friend' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#settings'>
							<ListItemIcon>
								<Settings />
							</ListItemIcon>
							<ListItemText primary='Settings' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#profile'>
							<ListItemIcon>
								<AccountBox />
							</ListItemIcon>
							<ListItemText primary='Profile' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#mode'>
							<ListItemIcon>
								<ModeNight />
							</ListItemIcon>
							<Switch />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
}

export default Sidebar;
