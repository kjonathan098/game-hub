import { useParams } from 'react-router-dom'
import { Box, Center, Grid, GridItem, HStack, Image, Skeleton, Stack, Tag, Text } from '@chakra-ui/react'
import useGameDetails from '../../hooks/useGameDetails'
import { CSSProperties, useContext, useEffect, useState } from 'react'
import GameSummary from './GameSummary'
import GameBuyingOptions from './GamePageAside/GameBuyingOptions'
import GameTags from './GamePageAside/GameTags'
import { queryContext } from '../../context/queryProvider'
import { IGamesQuery, IgameReviews } from '../../interfaces/games.interface'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import GameMainImage from './GameImages/GameImagesIndex'
import WishListButton from '../../utils/WishListButton'
import CartButton from '../../utils/CartButton'
import GamePageAside from './GamePageAside/GamePageAside'
import useData from '../../hooks/useDataFetch'
import GameReviews from './Reviews/Reviews.index'

const GamePage = () => {
	const { id } = useParams()
	const { data: gameDetails, loading, error } = useGameDetails(id!)
	// const { data, loading: loadingReviews } = useData<IgameReviews>('/games/906547/reviews?key=4f125506b6604b8a83e4deeb10165775')
	const { setGamesQuery } = useContext(queryContext)

	useEffect(() => {
		return () => {
			setGamesQuery({} as IGamesQuery)
		}
	}, [])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [id, gameDetails])

	if (error) return <>error...</>
	if (loading || !gameDetails) return <Skeleton isLoaded={!loading} width={'1200px'} h={'100vh'} />

	return (
		<>
			<Grid templateColumns="2fr 1fr" gap={2} w={'1200px'}>
				<GridItem minW={'900px'}>
					<Stack spacing={4}>
						<GameMainImage gameDetails={gameDetails} />
						<GameSummary gameDetails={gameDetails} />
					</Stack>
				</GridItem>

				<GridItem p={2} height={'fit-content'}>
					<GamePageAside gameDetails={gameDetails} />
				</GridItem>
			</Grid>
			<Box width={'100%'}>
				<GameReviews gameId={gameDetails.id} />
			</Box>
		</>
	)
}

export default GamePage

function getFirstThreeSentences(text: string): string {
	const sentences = text.match(/(.*?[.!?])\s/g)
	if (!sentences) {
		return text
	}
	return sentences.slice(0, 3).join(' ').trim()
}
