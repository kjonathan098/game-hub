import React, { createContext, useState } from 'react'
import { IGamesQuery, IGenre, ISortOption, IGame, IPlatform } from '../interfaces/games.interface'
import useGames from '../hooks/useGames'

interface QueryContextValue {
	gamesQuery: IGamesQuery
	data: IGame[] | null
	error: string
	loading: boolean
	setGamesQuery: React.Dispatch<React.SetStateAction<IGamesQuery>>
	searchGenre: (genre: IGenre) => void
	nextPage: () => void
	selectPlatform: (platform: IPlatform) => void
	sortBy: (sortBy: ISortOption) => void
	getSimilarGames: (endPoint: string) => void
}

export const queryContext = createContext<QueryContextValue>({} as QueryContextValue)

interface IProps {
	children: React.ReactNode
}

const QueryProvider: React.FC<IProps> = ({ children }) => {
	const [gamesQuery, setGamesQuery] = useState({} as IGamesQuery)
	const [page, setPage] = useState(1)

	const { data, error, loading } = useGames(gamesQuery)

	const searchGenre = (genre: IGenre) => {
		setGamesQuery({ ...gamesQuery, genre, page: null })
	}

	const nextPage = () => {
		setGamesQuery({ ...gamesQuery, page: page + 1 })
		setPage(page + 1)
	}

	const selectPlatform = (platform: IPlatform) => {
		setGamesQuery({ ...gamesQuery, platform, page: null })
	}

	const sortBy = (sortBy: ISortOption) => {
		setGamesQuery({ ...gamesQuery, sortBy, page: null })
	}

	const getSimilarGames = (endPoint: string) => {
		setGamesQuery({ ...gamesQuery, endPoint, page: null })
	}

	return <queryContext.Provider value={{ data, error, loading, gamesQuery, setGamesQuery, searchGenre, nextPage, selectPlatform, sortBy, getSimilarGames }}>{children}</queryContext.Provider>
}

export default QueryProvider
