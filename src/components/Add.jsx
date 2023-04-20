import { Add as AddIcon } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';
import React from 'react';

function Add() {
	return (
		<Tooltip title='add' sx={{ position: 'fixed', bottom: 20 }}>
			<Fab color='primary' aria-label='add'>
				<AddIcon />
			</Fab>
		</Tooltip>
	);
}

export default Add;
