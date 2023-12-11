import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Center, Stack, Text } from '@chakra-ui/react'
import { Game } from '../../hooks/useGames'
import { queryContext } from '../../context/queryProvider'
import useGameDetails from '../../hooks/useGameDetails'

const GamePage = () => {
	const location = useLocation()
	const { data, loading, error } = useGameDetails(location.state.id)

	useEffect(() => {
		console.log(data, 'data from use game Details')
		return
	}, [data])

	useEffect(() => {}, [data])

	if (loading) return <>Loading...</>
	return (
		<Box p={2} display={'flex'} justifyContent={'center'}>
			<Stack>
				<Center position="relative" bg={'red'}>
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
						}}
					></Box>
					<Stack width="1000px" height="500px" rounded={'lg'} border={'1px'} style={{ backgroundImage: `url(${data?.background_image})`, backgroundSize: 'cover' }} display={'flex'} p={5}>
						<Text fontSize="6xl" fontWeight={5}>
							{data?.name}
						</Text>
						<Text>{data?.metacritic}</Text>
					</Stack>
					{/* <Image src={gameData?.background_image} alt="gamme banner photo" width="auto" height="90%" rounded={'lg'} border={'1px'} /> */}
				</Center>
			</Stack>
		</Box>
	)
}

export default GamePage
