import { useEffect, useState } from 'react'
import { AxiosRequestConfig, CanceledError } from 'axios'
import apiClient from '../services/api-client'
import { Game } from './useGames'

export interface GameDetails extends Game {
	description: string
	background_image_additional: string
	website: string
	rating: string
	rating_top: number
	play_time: number
}

const useGameDetails = (id: number) => {
	const [data, setData] = useState<GameDetails>({} as GameDetails)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const controller = new AbortController()
		setLoading(true)
		apiClient
			.get<GameDetails>(`/games/${id}`)
			.then((res) => {
				setData({ ...res.data })
			})
			.catch((err) => {
				if (err instanceof CanceledError) return
				setError(err.message)
			})
			.finally(() => {
				setLoading(false)
			})
		return () => controller.abort()
	}, [])

	return { data, error, loading }
}

export default useGameDetails
