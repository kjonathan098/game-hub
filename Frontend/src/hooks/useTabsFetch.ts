import { IGameDetails } from '../interfaces/games.interface'
import useData from './useDataFetch'

const useTabsFetch = <T>(game: IGameDetails, route: string) => {
	const { data, error, loading } = useData<T>(`games/${game.id}/${route}`)

	return { data, error, loading }
}

export default useTabsFetch
