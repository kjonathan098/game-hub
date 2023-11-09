import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeletong from './GameCardSkeletong'
import GameCardContainer from './GameCardContainer'

const GameGrid = () => {
	const { games, error, loading } = useGames()
	const skeleton = [1, 2, 3, 4, 5, 6]

	return (
		<>
			{error && <li>{error}</li>}
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={'10px'}>
				{loading &&
					skeleton.map((s) => {
						return (
							<GameCardContainer>
								<GameCardSkeletong key={s} />
							</GameCardContainer>
						)
					})}
				{games.map((game) => {
					return (
						<GameCardContainer>
							<GameCard key={game.id} game={game} />
						</GameCardContainer>
					)
				})}
			</SimpleGrid>
		</>
	)
}

export default GameGrid
