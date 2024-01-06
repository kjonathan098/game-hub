import React, { useContext, useEffect } from 'react'
import useGames from '../hooks/useGames'
import useData from '../hooks/useDataFetch'
import { queryContext } from '../context/queryProvider'
import { IGame, IGenre } from '../interfaces/games.interface'
import { Tag } from '@chakra-ui/react'
import GamesSwiper from './GamesSwiper'

// ISSUE I was pulling genre from game tags but 1 - theyre not the same 2- some games dont have tags
const SimilarGames = ({ genre }: { genre?: string | undefined }) => {
	// const { data: similarGames, loading } = useData<IGame>(`/games?genre=${genre}`)
	const { data: similarGames, loading } = useData<IGame>(`/games?genre=4`)

	console.log(genre)

	if (loading) return <>Loading...</>
	return <GamesSwiper title={'People Also Viewed'} games={similarGames} />
}

export default SimilarGames
