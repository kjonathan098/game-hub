import useData from './useDataFetch'
import { IGame } from '../interfaces/games.interface'
import { genreList } from '../data/genres'

export default function useGetSimilarGames() {
	const { data: similarGames, loading, error } = useData<IGame>(`/games?genres=${genreList[Math.floor(Math.random() * 20)]?.id}`)

	return { similarGames, loading, error }
}
