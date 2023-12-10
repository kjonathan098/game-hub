import React, { createContext, useState } from 'react'
import { GamesQuery, Genre, SortOption } from '../interfaces/games.interface'
import { Platform } from '../hooks/useGames'

interface QueryContextValue {
	test: string
	gamesQuery: GamesQuery
	setGamesQuery: React.Dispatch<React.SetStateAction<GamesQuery>>
	searchGenre: (genre: Genre) => void
	nextPage: (pageNum: number) => void
	searchText: (searchText: string) => void
	selectPlatform: (platform: Platform) => void
	sortBy: (sortBy: SortOption) => void
}

export const queryContext = createContext<QueryContextValue>({} as QueryContextValue)

interface IProps {
	children: React.ReactNode
}

const QueryProvider: React.FC<IProps> = ({ children }) => {
	const [test, setTest] = useState('this is context speaking!')
	const [gamesQuery, setGamesQuery] = useState({} as GamesQuery)

	const searchGenre = (genre: Genre) => {
		setGamesQuery({ ...gamesQuery, genre, page: null })
	}

	const nextPage = (pageNum: number) => {
		setGamesQuery({ ...gamesQuery, page: pageNum })
	}

	const searchText = (searchText: string) => {
		setGamesQuery({ ...gamesQuery, searchText })
	}

	const selectPlatform = (platform: Platform) => {
		setGamesQuery({ ...gamesQuery, platform, page: null })
	}

	const sortBy = (sortBy: SortOption) => {
		setGamesQuery({ ...gamesQuery, sortBy, page: null })
	}

	return <queryContext.Provider value={{ test, setGamesQuery, gamesQuery, searchGenre, nextPage, searchText, selectPlatform, sortBy }}>{children}</queryContext.Provider>
}

export default QueryProvider
