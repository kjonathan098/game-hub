import { Center, Grid, GridItem, Text } from '@chakra-ui/react'
import { IGameDetails } from '../../interfaces/games.interface'
import { CiHeart } from 'react-icons/ci'

interface Props {
	data: IGameDetails
}

const GameNumbersDetails = ({ data }: Props) => {
	const gridBg = 'linear-gradient(90deg, rgba(113,29,253,1) 0%, rgba(218,29,253,1) 56%, rgba(252,69,126,1) 88%)'

	return (
		<Grid h={{ base: '300px', md: '200px' }} templateRows={{ base: 'repeat(5, 1fr)', md: 'repeat(2, 1fr)' }} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
			<GridItem colSpan={{ base: 1, md: 2 }} display={'flex'} overflow={'hidden'} alignItems={'center'} gap={5} justifyContent={'center'} bg={gridBg}>
				<Text fontSize={{ base: '3xl', md: '7xl' }} fontWeight={'extrabold'}>
					{data.name}
				</Text>
				{/* <Text fontSize={{ base: '3xl', md: '7xl' }} fontWeight={'extrabold'} fontStyle={'italic'}>
					RATING
				</Text> */}
			</GridItem>

			<GridItem colSpan={1} display={'flex'} overflow={'hidden'} alignItems={'center'} gap={5} justifyContent={'center'} bg={gridBg}>
				<Text fontSize={{ base: '3xl', md: '9xl' }} fontWeight={'extrabold'}>
					{data.playtime}
				</Text>
				<Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight={'extrabold'} fontStyle={'italic'}>
					PLAYTIME
				</Text>
			</GridItem>

			<GridItem colSpan={1} bg={gridBg} display={'flex'} overflow={'hidden'} alignItems={'center'} gap={5} justifyContent={'center'}>
				<Text fontSize={'4xl'} fontWeight={'extrabold'}>
					{data.achievements_count}
				</Text>
				<Text fontSize={'2xl'} fontWeight={'extrabold'} fontStyle={'italic'}>
					ACHIEVEMENTS
				</Text>
			</GridItem>

			<GridItem colSpan={1} bg={gridBg} display={'flex'} overflow={'hidden'} alignItems={'center'} gap={5} justifyContent={'center'}>
				<Text fontSize={'4xl'} fontWeight={'extrabold'}>
					{data.esrb_rating?.name}{' '}
				</Text>
			</GridItem>

			<GridItem colSpan={1} bg="tomato" display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={2}>
				<Center border={'2px'} p={1} borderRadius={3} gap={3}>
					<Text>Add to cart</Text>
					<CiHeart className={{ fontSize: '50px' }} />
				</Center>
				<Center border={'2px'} p={1} borderRadius={3} gap={3}>
					<Text>Add to wish list</Text>
					<CiHeart className={{ fontSize: '50px' }} />
				</Center>
			</GridItem>
		</Grid>
	)
}

export default GameNumbersDetails

{
	/* <Stack bg={'green'} display={'flex'} alignItems={'center'} p={2}>
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
			</Stack> */
}
