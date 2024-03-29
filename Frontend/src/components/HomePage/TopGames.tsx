import { Box, HStack, Image, Stack, Text, Center, Button, useColorModeValue } from '@chakra-ui/react'
import { BannerMedia, topSellers } from './BannerPromoMedia'
import { useState } from 'react'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import TopGamesDetails from './TopGamesDetails'
import { useNavigate } from 'react-router-dom'

const TopGames = () => {
	const [gameSelected, setGameSelected] = useState(1)
	const nav = useNavigate()

	const handleReDirect = (id: number) => {
		nav(`/game/${id}`)
	}

	const swiperSlide = (array: BannerMedia[], categoryName: string, startingIndex: number) => {
		return (
			<swiper-slide>
				<Text mb={{ md: '10px' }}>{categoryName}</Text>
				<Stack spacing={'2'} pr={{ md: '10px' }} direction={{ base: 'row', md: 'column' }} justifyContent={'space-around'}>
					{array.map((game, index) => {
						return (
							<HStack
								key={game.id}
								bg={gameSelected === index + 1 + startingIndex ? 'gray.200' : ''}
								_hover={{ bg: useColorModeValue('gray.200', 'gray.900'), cursor: 'pointer' }}
								rounded={'lg'}
								onClick={() => {
									setGameSelected(index + 1 + startingIndex)
								}}
								_dark={{ bg: gameSelected === index + 1 + startingIndex ? 'gray.800' : '' }}
							>
								<Image src={game.background} alt="game image" w={'55px'} h={'75px'} objectFit={'cover'} opacity={gameSelected === index + 1 + startingIndex ? '1' : '0.5'} />

								<Stack display={{ base: 'none', md: 'flex' }}>
									<Text overflow={'scroll'}>{game.name}</Text>
									{gameSelected === index + 1 + startingIndex && (
										<Stack>
											<Button
												colorScheme="teal"
												onClick={() => {
													handleReDirect(game.id)
												}}
												size={{ base: 'sm' }}
											>
												Visit
											</Button>
										</Stack>
									)}
								</Stack>
							</HStack>
						)
					})}
				</Stack>{' '}
			</swiper-slide>
		)
	}

	return (
		<Stack width={{ base: '100vw', lg: '1220px' }} spacing={{ base: 2, md: 0 }}>
			<Stack direction={{ base: 'column', md: 'row' }} w={'100%'} spacing={3}>
				<Box w={{ base: '100%', md: '25%' }} position={'relative'}>
					<HStack position={'absolute'} top={0} right={0} zIndex={2}>
						<Center className="swiper-button-prev" rounded={'full'} h={'20px'} w={'20px'} bg={'green.300'}>
							<IoIosArrowBack fontSize={'15px'} />
						</Center>
						<Center rounded={'full'} className="swiper-button-next-top-sellers" h={'20px'} w={'20px'} bg={'green.300'}>
							<IoIosArrowForward fontSize={'15px'} />
						</Center>
					</HStack>
					<swiper-container slides-per-view="1" space-between="20px" navigation-next-el=".swiper-button-next-top-sellers" navigation-prev-el=".swiper-button-prev">
						{swiperSlide(topSellers.slice(0, 5), 'Top Sellers', 0)}
						{swiperSlide(topSellers.slice(5, 10), 'Top Wishlisted', 5)}
					</swiper-container>

					<Center mt={2} display={{ base: 'block', md: 'none' }}>
						<Button size={'sm'} width={'100%'} onClick={() => handleReDirect(topSellers[gameSelected - 1].id)}>
							<Text>
								Visit{' '}
								<Box as="span" color={'cyan.200'}>
									{topSellers[gameSelected - 1].name}
								</Box>{' '}
								Page
							</Text>
						</Button>
					</Center>
				</Box>
				<Box w={{ base: '100%', md: '75%' }}>
					<TopGamesDetails gameSelected={gameSelected} />
				</Box>
			</Stack>
		</Stack>
	)
}

export default TopGames
