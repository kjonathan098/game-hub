import { Box, Center, Grid, GridItem, Image, Stack, Tag, Text } from '@chakra-ui/react'
import { topSellers } from './BannerPromoMedia'
import CartButton from '../../utils/CartButton'
import WishListButton from '../../utils/WishListButton'
import YouTube, { YouTubeProps } from 'react-youtube'
import { useEffect, useState } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

type Props = {
	gameSelected: number
}
const TopGamesDetails = ({ gameSelected }: Props) => {
	const height = useBreakpointValue({ base: '200', md: '440', lg: '455' })
	const [videoId, setVideoId] = useState<string>(topSellers[gameSelected - 1].youtubeId!)
	const [opts, setOpts] = useState<YouTubeProps['opts']>({
		height: height,
		width: '100%',
		playerVars: {
			autoplay: 1,
			mute: 1,
			loop: 1,
			playlist: topSellers[gameSelected - 1].youtubeId!,
		},
	})

	useEffect(() => {
		const newVideoId = topSellers[gameSelected - 1].youtubeId!
		setVideoId(newVideoId)
		setOpts((prevOpts: YouTubeProps['opts']) => ({
			...prevOpts,
			playerVars: { ...prevOpts.playerVars, playlist: newVideoId },
		}))
	}, [gameSelected])

	useEffect(() => {
		setOpts((prevOpts: YouTubeProps['opts']) => ({
			...prevOpts,
			height: height,
		}))
	}, [height])

	return (
		<Box height={'100%'} width={'100%'} position={'relative'}>
			<YouTube key={`${videoId}-${height}`} videoId={videoId} opts={opts} />
		</Box>
	)
}

export default TopGamesDetails
