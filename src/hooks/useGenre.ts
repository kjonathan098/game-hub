import useDataFetch from './useDataFetch'

export interface Genre {
	id: number
	name: string
	image_background: string
}

const useGenre = () => {
	const { data, error, loading } = useDataFetch<Genre>('/genres')
	return { data, error, loading }
}

export default useGenre
