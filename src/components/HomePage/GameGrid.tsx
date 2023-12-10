import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeletong from './GameCardSkeletong'
import GameCardContainer from './GameCardContainer'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useContext, useState } from 'react'
import { GamesQuery } from '../../interfaces/games.interface'
import { queryContext } from '../../context/queryProvider'

interface Props {
	gamesQuery: GamesQuery
	onSelect: (pageNum: number) => void
}
const GameGrid = () => {
	const { data, error, loading, nextPage } = useContext(queryContext)
	const [hasMore, setHasMore] = useState(true)

	const skeleton = [1, 2, 3, 4, 5, 6]

	function fetchNextPage() {
		setTimeout(() => {
			nextPage()
		}, 500)
	}

	return (
		<>
			{error && <li>{error}</li>}
			<InfiniteScroll dataLength={data.length} next={fetchNextPage} hasMore={hasMore} loader={''}>
				<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding={'10px'}>
					{data.map((game) => {
						return (
							<GameCardContainer key={game.id}>
								<GameCard key={game.id} game={game} />
							</GameCardContainer>
						)
					})}
					{loading &&
						skeleton.map((s) => {
							return (
								<GameCardContainer key={s}>
									<GameCardSkeletong key={s} />
								</GameCardContainer>
							)
						})}
				</SimpleGrid>
			</InfiniteScroll>
		</>
	)
}

export default GameGrid
