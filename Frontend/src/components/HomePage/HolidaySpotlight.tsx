import { Tag, Text } from '@chakra-ui/react'
import { holidaySpecialMedia } from './BannerPromoMedia'
import GamesSwiper from '../../utils/GamesSwiper'

const HolidaySpotlight = () => {
	return (
		<GamesSwiper title={'Holiday Specials'} games={holidaySpecialMedia}>
			<Tag colorScheme={'blue'}>-40%</Tag>
			<Text textDecoration="line-through" color={'gray.600'}>
				$75
			</Text>
			<Text colorScheme={'teal'}>$30</Text>
		</GamesSwiper>
	)
}

export default HolidaySpotlight
