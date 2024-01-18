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
import BannerPromoCarousel from './BannerPromoCarousel'

const BannerPromo = () => {
	const [currentGame, setCurrentGame] = useState(1)
	const [progress, setProgress] = useState(0)
	const nav = useNavigate()

	const handleReDirect = (id: number) => {
		nav(`/game/${id}`, { state: { id } })
	}

	return (
		<Stack direction={{ base: 'column', lg: 'row' }} h={'fit-content'}>
			<Center w={{ base: '100%', lg: '75%' }}>
				{bannerMedia.map((game, index) => {
					return (
						<Box key={index} as="span" position={'relative'} display={currentGame === index + 1 ? 'block' : 'none'} onClick={() => handleReDirect(game.id)} height={{ base: 'fit-content' }} _hover={{ cursor: 'pointer' }} bg={'green'}>
							<Image src={game.background} objectFit={'cover'} rounded={'lg'} key={index} loading="lazy" />

							<Stack position={'absolute'} bottom={{ base: '50px', md: '100px' }} maxW={'500px'} spacing={'5'} p={4}>
								<Image src={game.titleLogo} width={'40%'} />
								<Text fontWeight={'black'} color={'white'} display={{ base: 'none', md: 'block' }}>
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
			<BannerPromoCarousel currentGame={currentGame} setCurrentGame={setCurrentGame} />
		</Stack>
	)
}

export default BannerPromo
