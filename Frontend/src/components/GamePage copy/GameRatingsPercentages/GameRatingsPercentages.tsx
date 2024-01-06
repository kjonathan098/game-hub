import React from 'react'
import { IGameRatings } from '../../../interfaces/games.interface'
import { Box, Center, HStack, Image, Stack, Tag, Text } from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'

interface Props {
	ratings: IGameRatings[]
}

const GameRatingsPercentages = ({ ratings }: Props) => {
	const sortedRatings = sortRatings(ratings)
	return (
		<Box mb={'4'} w={'100%'} bg={'green.500'}>
			<Stack w={'100%'} spacing={0} direction={'row'} h={'50px'}>
				{sortedRatings?.map((rating, index) => {
					return (
						<React.Fragment key={index}>
							<Box w={`${rating.percent}%`} h={'100%'} bg={rating.color} borderLeftRadius={index === 0 ? 'full' : ''} borderRightRadius={index === 3 ? 'full' : ''} position={'relative'}>
								<Center h={'100%'} overflow={'hidden'}>
									{/* <Text zIndex={2}>{rating.title.toUpperCase()}</Text> */}
									<Text fontSize={'30px'} zIndex={'1'}>
										{rating.emoji}
									</Text>
								</Center>
							</Box>
						</React.Fragment>
					)
				})}
			</Stack>
			<HStack spacing={4}>
				<Center w={'100%'}>
					{sortedRatings.map((rating) => {
						return (
							<HStack mr={3}>
								<Box bg={rating.color} w={'15px'} h={'15px'} border={'1px'} rounded={'full'} />
								<Text>{rating.title}</Text>
							</HStack>
						)
					})}
				</Center>
			</HStack>
		</Box>
	)
}

export default GameRatingsPercentages

function sortRatings(ratings: IGameRatings[]) {
	const order = ['exceptional', 'recommended', 'meh', 'skip']
	const sortedRatings = ratings.sort((a, b) => order.indexOf(a.title) - order.indexOf(b.title))

	const sortedRatingsWithColor = sortedRatings.map((rating) => {
		let color
		let emoji
		switch (rating.title) {
			case 'exceptional':
				color = '#60a058'
				emoji = '🤩'
				break
			case 'recommended':
				color = '#085856'
				emoji = '😊'
				break
			case 'meh':
				color = '#3c103b'
				emoji = '😑'

				break
			case 'skip':
				color = '#111810'
				emoji = '🤮'
				break
			default:
				color = 'gray'
		}
		return { ...rating, color, emoji }
	})
	console.log(sortedRatingsWithColor)
	return sortedRatingsWithColor
}
