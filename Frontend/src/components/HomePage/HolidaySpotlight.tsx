import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Box, Center, HStack, Image, Stack, Tag, Text } from '@chakra-ui/react'
import { holidaySpecialMedia } from './BannerPromoMedia'
import WishListButton from '../../utils/WishListButton'
import { useNavigate } from 'react-router-dom'
import CartButton from '../../utils/CartButton'

const HolidaySpotlight = () => {
	const nav = useNavigate()

	const handleGameReDirect = (id: number) => {
		nav(`/game/${id}`, { state: { id } })
	}

	return (
		<Stack>
			<Box w={'1080px'} boxSizing={'border-box'} overflow={'hidden'}>
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

				<swiper-container slides-per-view="4" slides-per-group="4" space-between="20px" navigation-next-el=".swiper-button-next" navigation-prev-el=".swiper-button-prev">
					{holidaySpecialMedia.map((game) => {
						return (
							<React.Fragment key={game.id}>
								<swiper-slide>
									<Stack width={'230px'}>
										<Image
											src={game.background_image}
											height={'300px'}
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
