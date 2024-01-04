import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Box, Center, HStack, Image, Stack, Tag, Text, useBreakpointValue } from '@chakra-ui/react'
import { holidaySpecialMedia } from './BannerPromoMedia'
import WishListButton from '../../utils/WishListButton'
import { useNavigate } from 'react-router-dom'
import CartButton from '../../utils/CartButton'

const HolidaySpotlight = () => {
	const slideViews = useBreakpointValue({ base: 1.5, md: 3.5, lg: 4.5 })
	const [slidesPerView, setlidesPerView] = useState(slideViews)
	const nav = useNavigate()

	const handleGameReDirect = (id: number) => {
		nav(`/game/${id}`, { state: { id } })
	}

	useEffect(() => {
		setlidesPerView(slideViews)
	}, [slideViews])

	return (
		<Stack>
			<Box w={{ base: '100vw', lg: '1200px' }} pl={{ base: 2 }}>
				<HStack justifyContent={'space-between'} mb={'4'}>
					<Text fontSize={'lg'} fontStyle={'inherit'}>
						Holiday Sale Spotlight
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

				<swiper-container slides-per-view={slideViews} navigation-next-el=".swiper-button-next" navigation-prev-el=".swiper-button-prev">
					{holidaySpecialMedia.map((game) => {
						return (
							<React.Fragment key={game.id}>
								<swiper-slide>
									<Stack width={{ base: '173px', lg: '230px' }}>
										<Image
											src={game.background_image}
											height={{ base: '230px', lg: '300px' }}
											width={{ base: '173px', lg: 'auto' }}
											objectFit={'cover'}
											rounded={'md'}
											opacity={'.8'}
											_hover={{ bg: 'white.500', opacity: '1', cursor: 'pointer' }}
											onClick={() => {
												handleGameReDirect(game.id)
											}}
										/>
										<Text fontWeight={'bold'}>{game.name}</Text>
										<HStack spacing={'5'}>
											<Tag colorScheme={'blue'}>-40%</Tag>
											<Text textDecoration="line-through" color={'gray.600'}>
												$75
											</Text>
											<Text colorScheme={'teal'}>$30</Text>
										</HStack>
										<CartButton game={game} />
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

export default HolidaySpotlight
