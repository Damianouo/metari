import { Box } from '@mui/material';
import React from 'react';
import Post from './Post';

function Feed() {
	return (
		<Box sx={{ flex: '1 1 56%' }}>
			<Post />
			<Post />
			<Post />
		</Box>
	);
}

export default Feed;
