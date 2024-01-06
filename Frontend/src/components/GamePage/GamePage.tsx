import { useParams } from 'react-router-dom'
import { Box, Center, Image, Skeleton, Stack } from '@chakra-ui/react'
import useGameDetails from '../../hooks/useGameDetails'
import { useContext, useEffect } from 'react'
import GameNumbersDetails from './GameNumbersDetails'
import GameSummary from './GameSummary'
import GameBuyingOptions from './GameBuyingOptions'
import GameTags from './GameTags'
import GamePageTabs from './GamePageTabs/GamePageTabs'
import { queryContext } from '../../context/queryProvider'
import { IGamesQuery } from '../../interfaces/games.interface'
import { GameImages } from './GameImages'

const GamePage = () => {
	const { id } = useParams()
	const { data, loading, error } = useGameDetails(id!)
	const { setGamesQuery } = useContext(queryContext)

	useEffect(() => {
		return () => {
			setGamesQuery({} as IGamesQuery)
		}
	}, [])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [id, data])

	if (error) return <>error...</>
	if (loading || !data) return <Skeleton isLoaded={!loading} width={'100%'} h={'100vh'} />

	return (
		<Box p={2} display={'flex'} justifyContent={'center'}>
			<Stack w={'100%'}>
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

					<Image src={data?.background_image} alt="gamme banner photo" width="auto" height="90%" rounded={'lg'} border={'1px'} loading="lazy" />
				</Center>

				<GameNumbersDetails data={data!} />
				<Stack direction={{ base: 'column', lg: 'row' }} display={'flex'} mt={4}>
					<Box width={{ base: '1fr', md: '45%' }}>
						<GameSummary data={data!} />
					</Box>
					<Stack h={'fit-content'} justifyContent={'center'} flex={1} gap={9}>
						<Box display={'flex'} overflow={'hidden'} height={'fit-content'}>
							<GameImages gameDetails={data!} />
						</Box>
						{data.website.length && <GameBuyingOptions data={data!} />}
						<GameTags data={data!} />
					</Stack>
				</Stack>

				<GamePageTabs game={data} />
			</Stack>
		</Box>
	)
}

export default GamePage
