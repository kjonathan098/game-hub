import useDataFetch from './useDataFetch'

export interface Platform {
	id: number
	name: string
	slug: string
}

const usePlatforms = () => {
	const { data, error, loading } = useDataFetch<Platform>('/platforms/lists/parents')
	return { data, error, loading }
}

export default usePlatforms
