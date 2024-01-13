import { Box, Button, Center, HStack, Image, Stack, Text } from '@chakra-ui/react'
import salePromo from '../../assets/couponAdd.avif'
import featurePromo from '../../assets/feature.avif'
import rewardsPromo from '../../assets/rewardsAd.avif'
import BannerPromo from './BannerPromo'
import HolidaySpotlight from './HolidaySpotlight'
import TopGames from './TopGames'
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'
import randomGameBanner from '../../assets/random_game_generator.png'
import { useEffect, useState } from 'react'
import RandomGameGenerator from './RandomGameGenerator'
const HomePage = () => {
	return (
		<Stack spacing={'50'}>
			<HStack mt={'30'} justifyContent={'space-around'}>
				{[salePromo, rewardsPromo, featurePromo].map((img, index) => {
					return (
						<Box key={index}>
							<Image key={img} src={img} width={'350px'} rounded={'3xl'} />
						</Box>
					)
				})}
			</HStack>
			<BannerPromo />
			<HolidaySpotlight />
			<TopGames />
		</Stack>
	)
}

export default HomePage
