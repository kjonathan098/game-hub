import { Box, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import test from '../../assets/HomePageHolidaySpecial/robocop.avif'
import { bannerMedia, holidaySpecialMedia } from './BannerPromoMedia'
import React from 'react'

const TopGames = () => {
	return (
		<Box w={'1200px'}>
			<swiper-container slides-per-view="3" space-between="20px">
				<swiper-slide>
					<Text mb={'10px'}>Top Sellers</Text>
					<Stack borderRight={'1px'} spacing={'2'}>
						{holidaySpecialMedia.map((game) => {
							return (
								<HStack key={game.id} _hover={{ background: 'gray.700' }} rounded={'lg'}>
									<Image src={game.background} alt="game image" w={'55px'} objectFit={'cover'} />
									<Text>{game.name}</Text>
								</HStack>
							)
						})}
					</Stack>
				</swiper-slide>
				<swiper-slide>1</swiper-slide>
				<swiper-slide>1</swiper-slide>
			</swiper-container>
		</Box>
	)
}

export default TopGames
