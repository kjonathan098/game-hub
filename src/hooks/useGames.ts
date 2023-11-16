import { GamesQuery } from '../App'
import useDataFetch from './useDataFetch'

export interface Platform {
	id: number
	name: string
	slug: string
}
export interface Game {
	id: number
	name: string
	background_image: string
	parent_platforms: { platform: Platform }[]
	metacritic: number
}

const useGames = (gamesQuery: GamesQuery) => {
	const params = { params: { genres: gamesQuery.genre?.id, platforms: gamesQuery.platform?.id, ordering: gamesQuery.sortBy?.value } }

	const { data, error, loading } = useDataFetch<Game>('/games', params, [gamesQuery])

	return { data, error, loading }
}

export default useGames
