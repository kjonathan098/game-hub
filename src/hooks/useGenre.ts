import { genreList } from '../data/genres'
export interface Genre {
	id: number
	name: string
	image_background: string
}

const useGenre = () => {
	return { data: genreList, error: null, loading: false }
}

export default useGenre
