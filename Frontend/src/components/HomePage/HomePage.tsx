import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react'
import salePromo from '../../assets/couponAdd.avif'
import featurePromo from '../../assets/feature.avif'
import rewardsPromo from '../../assets/rewardsAd.avif'
import BannerPromo from './BannerPromo'
import HolidaySpotlight from './HolidaySpotlight'
import TopGames from './TopGames'
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'
import randomImage from '../../assets/randomGameGenerator.png'

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
