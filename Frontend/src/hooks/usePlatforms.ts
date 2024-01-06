import { IPlatform } from '../interfaces/games.interface'
import useDataFetch from './useDataFetch'

export interface Platform {
	id: number
	name: string
	slug: string
}

const usePlatforms = () => {
	const { data, error, loading } = useDataFetch<IPlatform>('/platforms/lists/parents')
	return { data, error, loading }
}

export default usePlatforms
