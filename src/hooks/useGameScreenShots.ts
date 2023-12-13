import { IGameScreenshots } from '../interfaces/games.interface'
import useData from './useDataFetch'

function useGameScreenShots(id: number) {
	const { data, loading, error } = useData<IGameScreenshots>(`/games/${id}/screenshots`)

	return { data, loading, error }
}
export default useGameScreenShots
