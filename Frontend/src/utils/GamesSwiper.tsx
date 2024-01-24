import React, { useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Box, Center, HStack, Image, Stack, Tag, Text, useBreakpointValue } from '@chakra-ui/react'
import WishListButton from './/WishListButton'
import { useNavigate } from 'react-router-dom'
import CartButton from './CartButton'
import { IGame } from '../interfaces/games.interface'

interface Props {
	title: string
	games: IGame[]
	children?: React.ReactNode
	loading?: boolean
}

const GamesSwiper = ({ title, games, children }: Props) => {
	const slideViews = useBreakpointValue({ base: 1.2, md: 3.5, lg: 4.5 })
	const nav = useNavigate()
	const swiperElRef = useRef(null)

	const handleGameReDirect = (id: number) => {
		nav(`/game/${id}`, { state: { id } })
	}

	return (
		<Stack mt={3} maxW={'1200px'} w={{ base: '100vw', lg: '100%' }}>
			<Box px={{ base: 2 }}>
				<HStack justifyContent={'space-between'} mb={'4'}>
					<Text fontSize={'lg'} fontStyle={'inherit'}>
						{title}
					</Text>
					<HStack>
						<Center className="swiper-button-prev" bg={'green.300'} rounded={'full'} h={'25px'} w={'25px'}>
							<IoIosArrowBack />
						</Center>
						<Center rounded={'full'} bg={'green.300'} className="swiper-button-next" w={'25px'} height={'25px'}>
							<IoIosArrowForward />
						</Center>
					</HStack>
				</HStack>

				<swiper-container ref={swiperElRef} slides-per-view={slideViews} navigation-next-el=".swiper-button-next" navigation-prev-el=".swiper-button-prev">
					{games.map((game, index) => {
						return (
							<React.Fragment key={index}>
								<swiper-slide>
									<Stack width={{ base: '90%', lg: '230px' }}>
										<Image
											src={game.background_image}
											height={{ base: '230px', lg: '300px' }}
											objectFit={'cover'}
											rounded={'md'}
											opacity={'.8'}
											_hover={{ bg: 'white.500', opacity: '1', cursor: 'pointer' }}
											onClick={() => {
												handleGameReDirect(game.id)
											}}
										/>
										<Text fontWeight={'bold'} whiteSpace={'nowrap'} overflow={'hidden'} textOverflow="ellipsis" alignSelf={'center'}>
											{game.name}
										</Text>
										<HStack spacing={'5'} justifyContent={'center'}>
											{children}
											{!children && <Tag colorScheme={'teal'}>$30</Tag>}
										</HStack>
										<CartButton game={game} />
										<WishListButton game={game} />
									</Stack>
								</swiper-slide>
							</React.Fragment>
						)
					})}
				</swiper-container>
			</Box>
			{/* </Box>  */}
		</Stack>
	)
}

export default GamesSwiper
