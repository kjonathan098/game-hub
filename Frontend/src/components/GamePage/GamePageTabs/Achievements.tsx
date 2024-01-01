import { useEffect } from 'react'
import useTabsFetch from '../../../hooks/useTabsFetch'
import useData from '../../../hooks/useDataFetch'
import { IAchievement, IGameDetails } from '../../../interfaces/games.interface'
import { Box, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'

interface Props {
	game: IGameDetails
}

const Achievements = ({ game }: Props) => {
	const { data, error, loading } = useTabsFetch<IAchievement>(game, 'achievements')

	if (loading) return <>Loadnig</>
	return (
		<Box h={'300px'} overflowY={'scroll'}>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacing={10} padding={'10px'}>
				{data?.map((item, index) => {
					return (
						<Stack direction="row" key={index}>
							<Image src={item.image} width={'200px'} height={'200px'} objectFit={'cover'} />
							<Box>
								<Text fontSize={'xl'} fontWeight={'bold'}>
									{item.name}
								</Text>
								<Text>{item.description}</Text>
							</Box>
						</Stack>
					)
				})}
			</SimpleGrid>
		</Box>
	)
}

export default Achievements
