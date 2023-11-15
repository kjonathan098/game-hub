import useDataFetch from './useDataFetch'
import { Genre } from './useGenre'

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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
	const params = { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }

	const { data, error, loading } = useDataFetch<Game>('/games', params, [selectedGenre?.id, selectedPlatform?.id])

	return { data, error, loading }
}

export default useGames
