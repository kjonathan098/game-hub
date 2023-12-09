import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeletong from './GameCardSkeletong'
import GameCardContainer from './GameCardContainer'
import { GamesQuery } from '../../App'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'

interface Props {
	gamesQuery: GamesQuery
	onSelect: (pageNum: number) => void
}
const GameGrid = ({ gamesQuery, onSelect }: Props) => {
	const { data, error, loading } = useGames(gamesQuery)
	const [hasMore, setHasMore] = useState(true)
	const [page, setPage] = useState(1)

	const skeleton = [1, 2, 3, 4, 5, 6]

	function fetchNextPage() {
		setTimeout(() => {
			onSelect(page + 1)
			setPage(page + 1)
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
