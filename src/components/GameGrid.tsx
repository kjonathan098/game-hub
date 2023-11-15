import { SimpleGrid } from '@chakra-ui/react'
import useGames, { Platform } from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeletong from './GameCardSkeletong'
import GameCardContainer from './GameCardContainer'
import { Genre } from '../hooks/useGenre'
import { GamesQuery } from '../App'
interface Props {
	gamesQuery: GamesQuery
}
const GameGrid = ({ gamesQuery }: Props) => {
	const { data, error, loading } = useGames(gamesQuery)
	const skeleton = [1, 2, 3, 4, 5, 6]

	return (
		<>
			{error && <li>{error}</li>}
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={'10px'}>
				{loading &&
					skeleton.map((s) => {
						return (
							<GameCardContainer key={s}>
								<GameCardSkeletong key={s} />
							</GameCardContainer>
						)
					})}
				{data.map((game) => {
					return (
						<GameCardContainer key={game.id}>
							<GameCard key={game.id} game={game} />
						</GameCardContainer>
					)
				})}
			</SimpleGrid>
		</>
	)
}

export default GameGrid
