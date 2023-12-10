import React, { createContext, useEffect, useState } from 'react'
import { GamesQuery, Genre, SortOption } from '../interfaces/games.interface'
import useGames, { Game, Platform } from '../hooks/useGames'

interface QueryContextValue {
	gamesQuery: GamesQuery
	data: Game[]
	error: string
	loading: boolean
	setGamesQuery: React.Dispatch<React.SetStateAction<GamesQuery>>
	searchGenre: (genre: Genre) => void
	nextPage: () => void
	searchText: (searchText: string) => void
	selectPlatform: (platform: Platform) => void
	sortBy: (sortBy: SortOption) => void
}

export const queryContext = createContext<QueryContextValue>({} as QueryContextValue)

interface IProps {
	children: React.ReactNode
}

const QueryProvider: React.FC<IProps> = ({ children }) => {
	const [gamesQuery, setGamesQuery] = useState({} as GamesQuery)
	const [page, setPage] = useState(1)
	const { data, error, loading } = useGames(gamesQuery)

	useEffect(() => {
		console.log(data, 'hekko')
	}, [data])

	const searchGenre = (genre: Genre) => {
		setGamesQuery({ ...gamesQuery, genre, page: null })
	}

	const nextPage = () => {
		setGamesQuery({ ...gamesQuery, page: page + 1 })
		setPage(page + 1)
	}

	const searchText = (searchText: string) => {
		setGamesQuery({ ...gamesQuery, searchText })
	}

	const selectPlatform = (platform: Platform) => {
		setGamesQuery({ ...gamesQuery, platform, page: null })
		console.log('hello')
	}

	const sortBy = (sortBy: SortOption) => {
		setGamesQuery({ ...gamesQuery, sortBy, page: null })
	}

	return <queryContext.Provider value={{ data, error, loading, gamesQuery, setGamesQuery, searchGenre, nextPage, searchText, selectPlatform, sortBy }}>{children}</queryContext.Provider>
}

export default QueryProvider
