import { IGame, IGamesQuery } from '../interfaces/games.interface'
import useDataFetch from './useDataFetch'

const useGames = (gamesQuery: IGamesQuery) => {
	const params = { params: { genres: gamesQuery.genre?.id, platforms: gamesQuery.platform?.id, ordering: gamesQuery.sortBy?.value, search: gamesQuery.searchText, page: gamesQuery.page } }
	const endPoint = gamesQuery.endPoint ? gamesQuery.endPoint : '/games'

	const { data, error, loading } = useDataFetch<IGame>(endPoint, params, [gamesQuery])

	if (data.length) {
		data.forEach((game) => {
			game.price = 30
		})
	}

	return { data, error, loading }
}

export default useGames
