import { Box, Center, Grid, GridItem, Image, Stack, Tag, Text } from '@chakra-ui/react'
import { topSellers } from './BannerPromoMedia'
import CartButton from '../../utils/CartButton'
import WishListButton from '../../utils/WishListButton'
import YouTube, { YouTubeProps } from 'react-youtube'

type Props = {
	gameSelected: number
}

const TopGamesDetails = ({ gameSelected }: Props) => {
	const opts: YouTubeProps['opts'] = {
		height: '455',
		width: '100%',
		playerVars: {
			autoplay: 1,
			mute: 1,
			loop: 1,
			playlist: topSellers[gameSelected - 1].youtubeId,
		},
	}
	return (
		<Box height={'100%'} width={'100%'} bg={'green.400'} position={'relative'}>
			<YouTube videoId={topSellers[gameSelected - 1].youtubeId} opts={opts} />
		</Box>
	)
}

export default TopGamesDetails

// {/* <Grid templateColumns={{ base: '1fr ', lg: '2fr 1fr' }} gap={2} height={'100%'}>
// <GridItem>
// 	<YouTube videoId="GNC-8lQsvrY" />;{/* <Image src={topSellers[gameSelected - 1].background_image} width={'100%'} objectFit={'cover'} height={'100%'} /> */}
// </GridItem>
// <GridItem justifyContent={'space-between'}>
// 	<Stack spacing={'4'}>
// 		<Image src={topSellers[gameSelected - 1].titleLogo} />
// 		<Text>{topSellers[gameSelected - 1].description}</Text>
// 		<Stack spacing={'4'}>
// 			<Tag colorScheme="teal" width={'fit-content'}>
// 				$30
// 			</Tag>
// 			<WishListButton game={topSellers[1]} />
// 			<CartButton game={topSellers[1]} />
// 		</Stack>
// 	</Stack>
// </GridItem>
// </Grid> */}
