import {
	Avatar,
	AvatarGroup,
	Box,
	Divider,
	ImageList,
	ImageListItem,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from '@mui/material';
import React from 'react';

function Rightbar() {
	const itemData = [
		{
			img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
			title: 'Bed',
		},
		{
			img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
			title: 'Books',
		},
		{
			img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
			title: 'Sink',
		},
		{
			img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
			title: 'Kitchen',
		},
		{
			img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
			title: 'Blinds',
		},
		{
			img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
			title: 'Chairs',
		},
		{
			img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
			title: 'Laptop',
		},
		{
			img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
			title: 'Doors',
		},
		{
			img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
			title: 'Coffee',
		},
		{
			img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
			title: 'Storage',
		},
		{
			img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
			title: 'Candle',
		},
		{
			img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
			title: 'Coffee table',
		},
	];
	return (
		<Box p={2} sx={{ display: { xs: 'none', sm: 'block' }, flex: '1 1 28%' }}>
			<Box position='fixed' sx={{ top: 80, overflowY: 'scroll', height: '100%' }}>
				<Typography variant='h6' fontWeight={100} mb={2}>
					Online Friends
				</Typography>

				<AvatarGroup max={6} sx={{ justifyContent: 'flex-end' }}>
					<Avatar
						alt='Rafaella Mendes Diniz'
						src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
					/>
					<Avatar
						alt='Remy Sharp'
						src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
					/>
					<Avatar
						alt='Travis Howard'
						src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
					/>
					<Avatar
						alt='Cindy Baker'
						src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
					/>
					<Avatar
						alt='Agnes Walker'
						src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
					/>
					<Avatar
						alt='Trevor Henderson'
						src='https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80'
					/>
					<Avatar
						alt='Lucas Gouvêa
							'
						src='https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
					/>
					<Avatar
						alt='Ayo Ogunseinde'
						src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
					/>
				</AvatarGroup>

				<Typography variant='h6' fontWeight={100} mb={2} mt={2}>
					Latest Photos
				</Typography>
				<Box sx={{ width: '100%', height: 100, overflowY: 'scroll' }}>
					<ImageList variant='masonry' cols={2} gap={5} rowHeight={100}>
						{itemData.map((item) => (
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

				<Typography variant='h6' fontWeight={100} mb={2} mt={2}>
					Latest Conversation
				</Typography>
				<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							<Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
						</ListItemAvatar>
						<ListItemText
							primary='Brunch this weekend?'
							secondary={
								<>
									<Typography
										sx={{ display: 'inline' }}
										component='span'
										variant='body2'
										color='text.primary'
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</>
							}
						/>
					</ListItem>
					<Divider variant='inset' component='li' />
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							<Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
						</ListItemAvatar>
						<ListItemText
							primary='Summer BBQ'
							secondary={
								<>
									<Typography
										sx={{ display: 'inline' }}
										component='span'
										variant='body2'
										color='text.primary'
									>
										to Scott, Alex, Jennifer
									</Typography>
									{" — Wish I could come, but I'm out of town this…"}
								</>
							}
						/>
					</ListItem>
					<Divider variant='inset' component='li' />
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							<Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
						</ListItemAvatar>
						<ListItemText
							primary='Oui Oui'
							secondary={
								<>
									<Typography
										sx={{ display: 'inline' }}
										component='span'
										variant='body2'
										color='text.primary'
									>
										Sandra Adams
									</Typography>
									{' — Do you have Paris recommendations? Have you ever…'}
								</>
							}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
}

export default Rightbar;
