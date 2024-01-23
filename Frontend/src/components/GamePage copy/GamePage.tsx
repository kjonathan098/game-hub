import { useParams } from 'react-router-dom'
import { Box, Center, Grid, GridItem, HStack, Image, Skeleton, Stack, Tag, Text } from '@chakra-ui/react'
import useGameDetails from '../../hooks/useGameDetails'
import { useContext, useEffect } from 'react'
import GameSummary from './GameSummary'
import { queryContext } from '../../context/queryProvider'
import { IGameDetails, IGamesQuery } from '../../interfaces/games.interface'
import GameMainImage from './GameImages/GameImagesIndex'
import GamePageAside from './GamePageAside/GamePageAside'
import GameReviews from './Reviews/Reviews.index'
import SimilarGames from '../../utils/SimilarGames'
import GameRatingsPercentages from './GameRatingsPercentages/GameRatingsPercentages'
import { GamePageSkeleton } from '../../utils/Skeletons'
import { GiGameConsole } from 'react-icons/gi'
import GameAwards from './GameTabs/RedditPosts'
import GameTabs from './GameTabs/GameTabs'
import useGameAchievements from '../../hooks/useGameAchievements'

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

	if (error)
		return (
			<Center h={'50%'} flexDirection={'column'}>
				<Text fontSize={'30px'} fontWeight={'extrabold'}>
					UH OH Something got disconnected!
				</Text>
				<GiGameConsole fontSize={'300px'} />
				<Text fontSize={'30px'} fontWeight={'extrabold'}>
					Please refresh the page
				</Text>
			</Center>
		)

	if (loading || !gameDetails) return <GamePageSkeleton />

	return (
		<>
			<Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={2}>
				<GridItem>
					<Stack spacing={4}>
						<GameMainImage gameDetails={gameDetails} />
						<GameSummary gameDetails={gameDetails} />
					</Stack>
				</GridItem>

				<GridItem p={2}>
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
