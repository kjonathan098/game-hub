import { Stack, Center, Text, Image, Box, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { bannerMedia } from './BannerPromoMedia'

interface Props {
	currentGame: number
	setCurrentGame: React.Dispatch<React.SetStateAction<number>>
}

const BannerPromoCarousel = ({ currentGame, setCurrentGame }: Props) => {
	const [progress, setProgress] = useState(0)

	const selectGame = (num: number) => {
		setCurrentGame(num + 1)
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
		}, 70) // This will fill the bar in X seconds

		return () => clearInterval(progressInterval)
	}, [currentGame])

	return (
		<Box width={{ base: '100%', lg: '25%' }}>
			<Stack p={4} display={'flex'} justifyContent={{ base: 'space-evenly', lg: 'space-between' }} height={'100%'} direction={{ base: 'row', lg: 'column' }}>
				{bannerMedia.map((game, index) => {
					return (
						<Stack key={index} onClick={() => selectGame(index)} position="relative" className="game-item" rounded={'lg'} bg={currentGame === index + 1 ? 'gray.200' : ''} _hover={{ bg: useColorModeValue('gray.200', 'blackAlpha.300'), cursor: 'pointer' }} direction={{ base: 'column', lg: 'row' }} _dark={{ bg: currentGame === index + 1 ? 'blackAlpha.100' : '' }}>
							<Image src={game.background} objectFit={'cover'} h={'100%'} w={'100%'} rounded={'lg'} height={'100px'} width={'80px'} />
							<Center>
								<Text fontSize={'md'} display={{ base: 'none', lg: 'block' }}>
									{game.name}
								</Text>
							</Center>
							{currentGame === index + 1 && <Box className="progress-bar" style={{ width: `${progress}%` }}></Box>}
						</Stack>
					)
				})}
			</Stack>
		</Box>
	)
}

export default BannerPromoCarousel
