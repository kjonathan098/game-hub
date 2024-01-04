import { Box, HStack, Image, Stack, Text, VStack, Center } from '@chakra-ui/react'
import { BannerMedia, bannerMedia, topSellers } from './BannerPromoMedia'
import { useState } from 'react'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import TopGamesDetails from './TopGamesDetails'

const TopGames = () => {
	const [gameSelected, setGameSelected] = useState(1)

	const swiperSlide = (array: BannerMedia[], categoryName: string, startingIndex: number) => {
		return (
			<swiper-slide>
				<Text mb={{ md: '10px' }}>{categoryName}</Text>
				<Stack spacing={'2'} pr={{ md: '10px' }} direction={{ base: 'row', md: 'column' }} justifyContent={'space-around'} bg={'red.400'}>
					{array.map((game, index) => {
						return (
							<HStack
								key={game.id}
								bg={gameSelected === index + 1 + startingIndex ? 'gray.700' : ''}
								_hover={{ background: 'gray.700', cursor: 'pointer' }}
								rounded={'lg'}
								onClick={() => {
									setGameSelected(index + 1 + startingIndex)
								}}
							>
								<Image src={game.background} alt="game image" w={'55px'} h={'75px'} objectFit={'cover'} />
								<Text display={{ base: 'none', md: 'block' }}>{game.name}</Text>
							</HStack>
						)
					})}
				</Stack>{' '}
			</swiper-slide>
		)
	}

	return (
		<Stack width={{ base: '320px', lg: '1220px' }} bg={'green.800'} spacing={{ base: 2, md: 0 }}>
			<HStack>
				<Center className="swiper-button-prev" bg={'green.300'} rounded={'full'} h={'20px'} w={'20px'}>
					<IoIosArrowBack fontSize={'15px'} />
				</Center>
				<Center rounded={'full'} bg={'green.300'} className="swiper-button-next-top-sellers" h={'20px'} w={'20px'}>
					<IoIosArrowForward fontSize={'15px'} />
				</Center>
			</HStack>
			<Stack direction={{ base: 'column', md: 'row' }} w={'100%'}>
				<Box w={{ base: '100%', md: '25%' }} bg={'green.500'}>
					<swiper-container slides-per-view="1" space-between="20px" navigation-next-el=".swiper-button-next-top-sellers" navigation-prev-el=".swiper-button-prev">
						{swiperSlide(topSellers.slice(0, 5), 'Top Sellers', 0)}
						{swiperSlide(topSellers.slice(5, 10), 'Top Wishlisted', 5)}
					</swiper-container>
				</Box>
				<Box w={{ base: '100%', md: '75%' }}>
					<TopGamesDetails gameSelected={gameSelected} />
				</Box>
			</Stack>
		</Stack>
	)
}

export default TopGames
