import React from 'react';
import { Box, Stack } from '@mui/material';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
	return (
		<Box>
			<Navbar />
			<Stack direction='row' spacing={2} justifyContent='space-between' paddingRight={2}>
				<Sidebar />
				<Feed />
				<Rightbar />
			</Stack>
		</Box>
	);
}

export default App;
