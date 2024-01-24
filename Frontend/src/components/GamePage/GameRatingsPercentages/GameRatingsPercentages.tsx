import React from 'react'
import { IGameRatings } from '../../../interfaces/games.interface'
import { Box, Center, HStack, Stack, Text } from '@chakra-ui/react'
import { ratingChart, sortRatings } from '../../../services/sort-game-ratings'

interface Props {
	ratings: IGameRatings[]
}

const GameRatingsPercentages = ({ ratings }: Props) => {
	const sortedRatings = sortRatings(ratings)
	return (
		<Stack mb={'4'} w={'100%'}>
			<Stack w={'100%'} spacing={0} direction={'row'} h={'50px'}>
				{sortedRatings?.map((rating, index) => {
					return (
						<React.Fragment key={index}>
							<Box w={`${rating.percent}%`} h={'100%'} bg={rating.color} borderLeftRadius={index === 0 ? 'full' : ''} borderRightRadius={index === 3 ? 'full' : ''} position={'relative'}>
								<Center h={'100%'} overflow={'hidden'}>
									<Text fontSize={{ base: '15px', md: '30px' }} zIndex={'1'}>
										{rating.emoji}
									</Text>
								</Center>
							</Box>
						</React.Fragment>
					)
				})}
			</Stack>
			<HStack spacing={{ base: 2, md: 4 }}>
				<Center w={'100%'}>
					{ratingChart.map((rating, index) => {
						return (
							<HStack mr={{ base: 1, md: 3 }} key={index}>
								<Box bg={rating.color} w={'15px'} h={'15px'} border={'1px'} rounded={'full'} />
								<Text fontSize={{ base: '10px', md: '15px' }}>{rating.name}</Text>
							</HStack>
						)
					})}
				</Center>
			</HStack>
		</Stack>
	)
}

export default GameRatingsPercentages
