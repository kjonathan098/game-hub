import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { Box, Center, HStack, Image, Stack, Tag, Text } from '@chakra-ui/react'
import { holidaySpecialMedia } from './BannerPromoMedia'

const HolidaySpotlight = () => {
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
							<React.Fragment>
								<swiper-slide>
									<Box>
										<Image src={game.background_image} width={'230px'} height={'300px'} objectFit={'cover'} rounded={'md'} opacity={'.8'} _hover={{ bg: 'white.500', opacity: '1', cursor: 'pointer' }} />
										<Text>{game.name}</Text>
										<Tag colorScheme={'blue'}>-30%</Tag>
									</Box>
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
