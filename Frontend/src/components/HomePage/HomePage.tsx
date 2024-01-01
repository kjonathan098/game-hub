import { Box, HStack, Image, Stack } from '@chakra-ui/react'
import salePromo from '../../assets/couponAdd.avif'
import featurePromo from '../../assets/feature.avif'
import rewardsPromo from '../../assets/rewardsAd.avif'
import BannerPromo from './BannerPromo'

const HomePage = () => {
	return (
		<Stack spacing={'50'}>
			<HStack mt={'30'} justifyContent={'space-around'}>
				{[salePromo, rewardsPromo, featurePromo].map((img) => {
					return (
						<Box>
							<Image key={img} src={img} width={'350px'} rounded={'3xl'} />
						</Box>
					)
				})}
			</HStack>
			<BannerPromo />
		</Stack>
	)
}

export default HomePage
