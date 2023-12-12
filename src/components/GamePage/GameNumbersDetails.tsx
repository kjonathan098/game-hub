import { HStack, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { IGameDetails } from '../../interfaces/games.interface'

interface Props {
	data: IGameDetails
}

const GameNumbersDetails = ({ data }: Props) => {
	useEffect(() => {
		console.log(data.esrb_rating)
	}, [data])
	return (
		<HStack bg={'red'} p={4} justifyContent={'space-around'}>
			<Stack bg={'green'} display={'flex'} alignItems={'center'} p={2}>
				<Text fontSize={'2xl'} fontWeight={'extrabold'}>
					{' '}
					{data.rating}{' '}
				</Text>
				<Text>Rating</Text>
			</Stack>
			<Stack bg={'green'} display={'flex'} alignItems={'center'} p={2}>
				<Text fontSize={'2xl'} fontWeight={'extrabold'}>
					{' '}
					{data.metacritic}{' '}
				</Text>
				<Text>Meta Critic</Text>
			</Stack>
			<Stack bg={'green'} display={'flex'} alignItems={'center'} p={2}>
				<Text fontSize={'2xl'} fontWeight={'extrabold'}>
					{' '}
					{data.playtime}
				</Text>
				<Text>PlayTime</Text>
			</Stack>
			<Stack bg={'green'} display={'flex'} alignItems={'center'} p={2}>
				<Text fontSize={'2xl'} fontWeight={'extrabold'}>
					{' '}
					{data.achievements_count}
				</Text>
				<Text>Achievements</Text>
			</Stack>
			<Stack bg={'green'} display={'flex'} alignItems={'center'} p={2}>
				<Text fontSize={'2xl'} fontWeight={'extrabold'}>
					{' '}
					{data.esrb_rating?.name}
				</Text>
				<Text>Rating</Text>
			</Stack>
		</HStack>
	)
}

export default GameNumbersDetails
