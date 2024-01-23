import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeletong from './GameCardSkeletong'
import GameCardContainer from './GameCardContainer'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useContext, useEffect, useState } from 'react'
import { queryContext } from '../../context/queryProvider'

const GameGrid = () => {
	const { data, error, loading, nextPage } = useContext(queryContext)
	const [hasMore, setHasMore] = useState(true)

	function fetchNextPage() {
		setTimeout(() => {
			nextPage()
		}, 500)
	}

	if (!data) return <>error</>
	if (error) return <>{error} please refresh</>

	return (
		<>
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
						Array(8)
							.fill(0)
							.map((s) => {
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
