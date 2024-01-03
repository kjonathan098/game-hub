import { Box, HStack, Image, Stack, Text, Progress, Fade, Center, Tag } from '@chakra-ui/react'
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
import CartButton from '../../utils/CartButton'
import { useNavigate } from 'react-router-dom'

const BannerPromo = () => {
	const [currentGame, setCurrentGame] = useState(1)
	const [progress, setProgress] = useState(0)
	const nav = useNavigate()

	const handleReDirect = (id: number) => {
		nav(`/game/${id}`, { state: { id } })
	}

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
		}, 70) // This will fill the bar in 5 seconds

		return () => clearInterval(progressInterval)
	}, [currentGame])

	return (
		<Stack direction={{ base: 'column', lg: 'row' }}>
			<Center w={{ base: '100%', lg: '75%' }} h={'fit-content'}>
				{bannerMedia.map((game, index) => {
					return (
						<Box as="span" position={'relative'} display={currentGame === index + 1 ? 'block' : 'none'} onClick={() => handleReDirect(game.id)} height={{ base: 'fit-content', lg: '500px' }}>
							<Image src={game.background} objectFit={'cover'} rounded={'lg'} key={index} loading="lazy" />
							<Stack position={'absolute'} bottom={{ base: '50px', md: '100px' }} maxW={'500px'} spacing={'5'} p={4}>
								<Image src={game.titleLogo} width={'40%'} />
								<Text fontWeight={'black'} display={{ base: 'none', md: 'block' }}>
									{game.description}
								</Text>
								<Tag colorScheme="teal" w={'fit-content'} display={{ base: 'none', md: 'block' }}>
									$30
								</Tag>
								<HStack zIndex={2} display={{ base: 'none', md: 'block' }}>
									<WishListButton game={game} size={'md'} />
									<CartButton game={game} size={'md'} />
								</HStack>
							</Stack>
							<Box as="span" position={'absolute'} bottom={'0px'} width={'100%'} height={'100%'} opacity={'0.6'} bgGradient="linear(to-r, rgba(11, 11, 11, 0) 0%, rgba(11, 11, 11, 0) 50%, #0B0B0B 100%)" />
						</Box>
					)
				})}
			</Center>
			<Box width={{ base: '100%', lg: '25%' }}>
				<Stack p={4} display={'flex'} justifyContent={{ base: 'space-evenly', lg: 'space-between' }} height={'100%'} direction={{ base: 'row', lg: 'column' }}>
					{bannerMedia.map((game, index) => {
						return (
							<Stack key={index} onClick={() => selectGame(index)} position="relative" className="game-item" rounded={'lg'} bg={currentGame === index + 1 ? 'blackAlpha.400' : ''} _hover={{ cursor: 'pointer', bg: 'blackAlpha.300' }} direction={{ base: 'column', lg: 'row' }}>
								<Image src={game.background} objectFit={'cover'} h={'100%'} w={'100%'} rounded={'lg'} height={'100px'} width={'80px'} />
								<Text fontSize={'md'} display={{ base: 'none', lg: 'block' }}>
									{game.name}
								</Text>
								{currentGame === index + 1 && <Box className="progress-bar" style={{ width: `${progress}%` }}></Box>}
							</Stack>
						)
					})}
				</Stack>
			</Box>
		</Stack>
	)
}

export default BannerPromo
