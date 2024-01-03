import { Box, Center, Grid, GridItem, Image, Stack, Tag, Text } from '@chakra-ui/react'
import { topSellers } from './BannerPromoMedia'
import CartButton from '../../utils/CartButton'
import WishListButton from '../../utils/WishListButton'
import YouTube, { YouTubeProps } from 'react-youtube'
import { useEffect, useState } from 'react'

type Props = {
	gameSelected: number
}

const TopGamesDetails = ({ gameSelected }: Props) => {
	const optObj = {
		height: '455',
		width: '100%',
		playerVars: {
			autoplay: 1,
			mute: 1,
			loop: 1,
			playlist: topSellers[gameSelected - 1].youtubeId!,
		},
	}
	const [videoId, setVideoId] = useState<string>(topSellers[gameSelected - 1].youtubeId!)
	const [opts, setOpts] = useState<YouTubeProps['opts']>(optObj)

	useEffect(() => {
		const newVideoId = topSellers[gameSelected - 1].youtubeId!
		setVideoId(newVideoId)
		setOpts({
			...optObj,
			playersVar: { ...optObj.playerVars, playlist: newVideoId },
		})
	}, [gameSelected])

	return (
		<Box height={'100%'} width={'100%'} bg={'green.400'} position={'relative'}>
			<YouTube key={videoId} videoId={videoId} opts={opts} />
		</Box>
	)
}

export default TopGamesDetails
