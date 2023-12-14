import { useParams } from 'react-router-dom'
import { Box, Center, Image, Stack } from '@chakra-ui/react'

import useGameDetails from '../../hooks/useGameDetails'
import { useEffect } from 'react'
import GameNumbersDetails from './GameNumbersDetails'
import GameSummary from './GameSummary'
import GameImages from './GameImages'
import GameBuyingOptions from './GameBuyingOptions'

const GamePage = () => {
	const { id } = useParams()
	const { data, loading, error } = useGameDetails(id!)

	if (error) return <>error...</>
	if (loading || !data) return <>Loading...</>

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
				<GameNumbersDetails data={data} />
				<Box bg={'red'} display={'flex'} mt={4}>
					<Box bg={'green'} flex="0 0 45%">
						<GameSummary data={data} />
					</Box>
					<Box h={'fit-content'} display={'flex'} justifyContent={'center'} bg={'purple'} flex={1}>
						{/* <GameImages gameDetails={data} /> */}
						<GameBuyingOptions data={data} />
					</Box>
				</Box>
			</Stack>
		</Box>
	)
}

export default GamePage
