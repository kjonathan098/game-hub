import { useParams } from 'react-router-dom'
import { Box, Center, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { MdHexagon } from 'react-icons/md'

import useGameDetails from '../../hooks/useGameDetails'

const GamePage = () => {
	const { id } = useParams()
	const { data, loading, error } = useGameDetails(id!)

	if (loading) return <>Loading...</>
	return (
		<Box p={2} display={'flex'} justifyContent={'center'}>
			<Stack>
				<Center position="relative">
					<Box
						style={{
							position: 'absolute',
							top: 0,
							right: 0,
							bottom: 0,
							left: 0,
							backgroundImage: `url(${data?.background_image})`,
							backgroundSize: 'cover',
							filter: 'blur(100px)',
							zIndex: -1, // Place the overlay behind other content
							width: 'auto',
							height: '93%',
						}}
					></Box>

					<Image src={data?.background_image} alt="gamme banner photo" width="auto" height="90%" rounded={'lg'} border={'1px'} />
				</Center>
				<HStack bg={'red'} p={4}>
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
							{data.play_time}
						</Text>
						<Text>PlayTime</Text>
					</Stack>
				</HStack>
			</Stack>
		</Box>
	)
}

export default GamePage
