import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Box, Center, HStack, Image, Stack, Tag, Text, useBreakpointValue } from '@chakra-ui/react'
import { holidaySpecialMedia } from './BannerPromoMedia'
import WishListButton from '../../utils/WishListButton'
import { useNavigate } from 'react-router-dom'
import CartButton from '../../utils/CartButton'
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
