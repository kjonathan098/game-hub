import { useParams } from 'react-router-dom'
import { Center, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import useGameDetails from '../../hooks/useGameDetails'
import { useContext, useEffect } from 'react'
import GameSummary from './GameSummary'
import { queryContext } from '../../context/queryProvider'
import { IGamesQuery } from '../../interfaces/games.interface'
import GameMainImage from './GameImages/GameImagesIndex'
import GamePageAside from './GamePageAside/GamePageAside'
import GameReviews from './Reviews/Reviews.index'
import SimilarGames from '../../utils/SimilarGames'
import GameRatingsPercentages from './GameRatingsPercentages/GameRatingsPercentages'
import { GamePageSkeleton } from '../../utils/Skeletons'
import { GiGameConsole } from 'react-icons/gi'
import GameAwards from './GameTabs/RedditPosts'
import GameTabs from './GameTabs/GameTabs'
import NetworkError from '../../utils/NetworkError'

const GamePage = () => {
	const { id } = useParams()
	const { data: gameDetails, loading, error } = useGameDetails(id!)
	const { setGamesQuery } = useContext(queryContext)

	useEffect(() => {
		return () => {
			setGamesQuery({} as IGamesQuery)
		}
	}, [])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [id, gameDetails])

	if (error) return <NetworkError />

	if (loading || !gameDetails) return <GamePageSkeleton />

	return (
		<>
			<Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={2} w={{ base: '100vw', lg: '1200px' }}>
				<GridItem minW={{ base: '100%', lg: '900px' }}>
					<Stack spacing={4}>
						<GameMainImage gameDetails={gameDetails} />
						<GameSummary gameDetails={gameDetails} />
					</Stack>
				</GridItem>

				<GridItem p={2} height={'fit-content'}>
					<GamePageAside gameDetails={gameDetails} />
				</GridItem>
			</Grid>
			<Stack width={{ base: '100vw', lg: '1200px' }} m={{ base: 0, lg: 4 }} spacing={10}>
				<Stack spacing={3}>
					<GameRatingsPercentages ratings={gameDetails.ratings} />
					<GameReviews gameId={gameDetails.id} />
				</Stack>
				<GameTabs gameDetails={gameDetails} />
				<SimilarGames />
			</Stack>
		</>
	)
}

export default GamePage
