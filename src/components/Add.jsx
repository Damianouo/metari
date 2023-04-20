import styled from '@emotion/styled';
import {
	Add as AddIcon,
	DateRange,
	EmojiEmotions,
	Image,
	PersonAdd,
	VideoCameraBack,
} from '@mui/icons-material';
import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Fab,
	Modal,
	Stack,
	TextField,
	Tooltip,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

const StyledModal = styled(Modal)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

const UserBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	marginBottom: '20px',
});

function Add() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Tooltip
				onClick={() => setOpen(true)}
				title='add'
				sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }}
			>
				<Fab color='primary' aria-label='add'>
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box
					width={450}
					height={360}
					bgcolor='background.default'
					color='text.primary'
					p={3}
					borderRadius={5}
				>
					<Typography variant='h6' component='h2' color='grey' textAlign='center' mb={2}>
						Create Post
					</Typography>
					<UserBox>
						<Avatar
							alt='Rafaella Mendes Diniz'
							src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
							sx={{ width: 36, height: 36 }}
						/>
						<Typography variant='h6' component='h2' textAlign='center'>
							Rafaella Mendes Diniz
						</Typography>
					</UserBox>
					<TextField
						sx={{ width: '100%' }}
						multiline
						rows={4}
						placeholder="What's on your mind? "
						variant='standard'
					/>
					<Stack direction='row ' gap={1} mt={2} mb={3}>
						<EmojiEmotions color='primary' />
						<Image color='secondary' />
						<VideoCameraBack color='success' />
						<PersonAdd color='error' />
					</Stack>
					<ButtonGroup fullWidth variant='contained' aria-label='outlined primary button group'>
						<Button>Post</Button>
						<Button sx={{ width: '100px' }}>
							<DateRange />
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
}

export default Add;
