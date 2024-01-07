import React, { useContext, useEffect } from 'react'
import useGames from '../hooks/useGames'
import useData from '../hooks/useDataFetch'
import { queryContext } from '../context/queryProvider'
import { IGame, IGenre } from '../interfaces/games.interface'
import { Box, HStack, Skeleton, Stack, Tag } from '@chakra-ui/react'
import GamesSwiper from './GamesSwiper'
import { genreList } from '../data/genres'
import { GamesSwiperSkeleton } from './Skeletons'

// ISSUE I was pulling genre from game tags but 1 - theyre not the same 2- some games dont have tags
const SimilarGames = () => {
	const { data: similarGames, loading } = useData<IGame>(`/games?genres=${genreList[Math.floor(Math.random() * 20)]?.id}`)

	if (loading) return <GamesSwiperSkeleton />

	return <GamesSwiper title={'People Also Viewed'} games={similarGames} />
}

export default SimilarGames
