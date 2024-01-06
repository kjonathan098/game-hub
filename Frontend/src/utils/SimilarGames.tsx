import React, { useContext, useEffect } from 'react'
import useGames from '../hooks/useGames'
import useData from '../hooks/useDataFetch'
import { queryContext } from '../context/queryProvider'
import { IGame, IGenre } from '../interfaces/games.interface'
import HolidaySpotlight from './GamesSwiper'
import { Tag } from '@chakra-ui/react'
const SimilarGames = ({ genre }: { genre: string }) => {
	const { data: similarGames, loading } = useData<IGame>(`/games?genre=${genre}`)

	useEffect(() => {}, [similarGames])

	if (loading) return <>Loading...</>
	return <HolidaySpotlight title={'Similar Games'} games={similarGames} />
}

export default SimilarGames
