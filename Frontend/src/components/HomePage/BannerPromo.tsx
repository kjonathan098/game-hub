import { Box, HStack, Image, Stack, Text, Progress, Fade } from '@chakra-ui/react'
import fifa from '../../assets/HomePageCarouselPromo/fifa24.avif'
import alanWake from '../../assets/HomePageCarouselPromo/alanWake.avif'
import lotr from '../../assets/HomePageCarouselPromo/lotr.avif'
import mirage from '../../assets/HomePageCarouselPromo/mirage.avif'
import deadIsland from '../../assets/HomePageCarouselPromo/deadIsland.avif'
import fifaTittle from '../../assets/HomePageCarouselPromo/fifa_title.png'
import { useEffect, useState } from 'react'
import { bannerMedia } from './BannerPromoMedia'
import './BannerPromo.css'
import WishListButton from '../../utils/WishListButton'

const BannerPromo = () => {
	const [currentGame, setCurrentGame] = useState(1)
	const [progress, setProgress] = useState(0)

	const selectGame = (num: number) => {
		setCurrentGame(num)
		setProgress(0) // reset progress when a game is clicked
	}
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentGame((prev) => (prev % 5) + 1)
			setProgress(0)
		}, 7000)

		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		const progressInterval = setInterval(() => {
			setProgress((prev) => {
				if (prev < 100) {
					return prev + 1
				} else {
					clearInterval(progressInterval)
					return prev
				}
			})
		}, 70) // This will fill the bar in 5 seconds

		return () => clearInterval(progressInterval)
	}, [currentGame])

	return (
		<Stack direction={'row'}>
			<Box w={'75%'}>
				{bannerMedia.map((game, index) => {
					return (
						<Fade in={currentGame === index + 1}>
							<Box as="span" position={'relative'}>
								<Image src={game.background} objectFit={'cover'} rounded={'lg'} key={index} display={currentGame === index + 1 ? 'block' : 'none'} />
								<Stack position={'absolute'} bottom={'100px'} maxW={'500px'} spacing={'5'} p={4}>
									<Image src={game.titleLogo} width={'40%'} />
									<Text fontWeight={'black'}>{game.description}</Text>
									<HStack>{/* <WishListButton /> */}</HStack>
								</Stack>
								<Box as="span" position={'absolute'} bottom={'0px'} width={'100%'} height={'100%'} opacity={'0.6'} bgGradient="linear(to-r, rgba(11, 11, 11, 0) 0%, rgba(11, 11, 11, 0) 50%, #0B0B0B 100%)" />
							</Box>
						</Fade>
					)
				})}
			</Box>
			<Box width={'25%'}>
				<Stack p={4} display={'flex'} justifyContent={'space-between'} height={'100%'}>
					{bannerMedia.map((game, index) => {
						return (
							<HStack key={index} onClick={() => selectGame(index)} position="relative" className="game-item" rounded={'lg'} bg={currentGame === index + 1 ? 'blackAlpha.400' : ''}>
								<Image src={game.background} objectFit={'cover'} h={'100%'} w={'100%'} rounded={'lg'} height={'100px'} width={'80px'} />
								<Text fontSize={'xl'} fontWeight={'bold'}>
									{game.name}
								</Text>
								{currentGame === index + 1 && <Box className="progress-bar" style={{ width: `${progress}%` }}></Box>}
							</HStack>
						)
					})}
				</Stack>
			</Box>
		</Stack>
	)
}

export default BannerPromo
//osition: absolute;
// top: 0;
// width: 80%;
// height: 100%;
// z-index: 0;
// opacity: 0.6;
// background: linear-gradient(270deg, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%, #0B0B0B 100%);
