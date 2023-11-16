import useDataFetch from './useDataFetch'

export interface Sort {
	id: number
	name: string
	slug: string
}

const useSorting = () => {
	const { data, error, loading } = useDataFetch<Sort>('/ordering')
	return { data, error, loading }
}

export default useSorting
