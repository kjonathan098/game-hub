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
				<Text mb={'10px'}>{categoryName}</Text>
				<Stack borderRight={'1px'} borderColor={'gray.700'} spacing={'2'} pr={'10px'}>
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
								<Text>{game.name}</Text>
							</HStack>
						)
					})}
				</Stack>{' '}
			</swiper-slide>
		)
	}

	return (
		<Box width={'1220px'}>
			<HStack>
				<Center className="swiper-button-prev" bg={'green.300'} rounded={'full'} h={'20px'} w={'20px'}>
					<IoIosArrowBack fontSize={'15px'} />
				</Center>
				<Center rounded={'full'} bg={'green.300'} className="swiper-button-next-top-sellers" h={'20px'} w={'20px'}>
					<IoIosArrowForward fontSize={'15px'} />
				</Center>
			</HStack>
			<Stack direction="row">
				<Box w={'25%'}>
					<swiper-container slides-per-view="1" space-between="20px" navigation-next-el=".swiper-button-next-top-sellers" navigation-prev-el=".swiper-button-prev">
						{swiperSlide(topSellers.slice(0, 5), 'Top Sellers', 0)}
						{swiperSlide(topSellers.slice(5, 10), 'Top Wishlisted', 5)}
						{/* <swiper-slide>
							<Text mb={'10px'}>Top Sellers</Text>
							<Stack borderRight={'1px'} borderColor={'gray.700'} spacing={'2'} pr={'10px'}>
								{topSellers.slice(0, 5).map((game, index) => {
									return (
										<HStack
											key={game.id}
											bg={gameSelected === index + 1 ? 'gray.700' : ''}
											_hover={{ background: 'gray.700', cursor: 'pointer' }}
											rounded={'lg'}
											onClick={() => {
												setGameSelected(index + 1)
											}}
										>
											<Image src={game.background} alt="game image" w={'55px'} h={'75px'} objectFit={'cover'} />
											<Text>{game.name}</Text>
										</HStack>
									)
								})}
							</Stack>{' '}
						</swiper-slide> */}
						{/* <swiper-slide>
							<Text mb={'10px'}>Top Wishlisted</Text>
							<Stack borderRight={'1px'} borderColor={'gray.700'} spacing={'2'} pr={'10px'}>
								{topSellers.slice(5, 10).map((game, index) => {
									return (
										<HStack
											key={game.id}
											bg={gameSelected === index + 1 + 5 ? 'gray.700' : ''}
											_hover={{ background: 'gray.700', cursor: 'pointer' }}
											rounded={'lg'}
											onClick={() => {
												setGameSelected(index + 1 + 5)
											}}
										>
											<Image src={game.background} alt="game image" w={'55px'} objectFit={'cover'} />
											<Text>{game.name}</Text>
										</HStack>
									)
								})}
							</Stack>{' '}
						</swiper-slide> */}
					</swiper-container>
				</Box>
				<Box w={'75%'}>
					<TopGamesDetails gameSelected={gameSelected} />
				</Box>
			</Stack>
		</Box>
	)
}

export default TopGames
