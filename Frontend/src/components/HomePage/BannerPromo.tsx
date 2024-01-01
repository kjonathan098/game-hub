import { Box, HStack, Image, Stack, Text, Progress, Fade } from '@chakra-ui/react'
import fifa from '../../assets/HomePageCarouselPromo/fifa24.avif'
import alanWake from '../../assets/HomePageCarouselPromo/alanWake.avif'
import lotr from '../../assets/HomePageCarouselPromo/lotr.avif'
import mirage from '../../assets/HomePageCarouselPromo/mirage.avif'
import deadIsland from '../../assets/HomePageCarouselPromo/deadIsland.avif'
import { useEffect, useState } from 'react'
import './BannerPromo.css'

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
				{[alanWake, fifa, lotr, mirage, deadIsland].map((img, index) => {
					return (
						<Fade in={currentGame === index + 1}>
							<Image src={img} objectFit={'cover'} rounded={'lg'} key={index} display={currentGame === index + 1 ? 'block' : 'none'} />
						</Fade>
					)
				})}
			</Box>
			<Box width={'25%'}>
				<Stack p={4} display={'flex'} justifyContent={'space-between'} height={'100%'}>
					{[alanWake, fifa, lotr, mirage, deadIsland].map((img, index) => {
						return (
							<HStack key={index} onClick={() => selectGame(index)} position="relative" className="game-item" rounded={'lg'} bg={currentGame === index + 1 ? 'blackAlpha.400' : ''}>
								<Image src={img} objectFit={'cover'} h={'100%'} w={'100%'} rounded={'lg'} height={'100px'} width={'80px'} />
								<Text fontSize={'xl'} fontWeight={'bold'}>
									Fifa 24
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
