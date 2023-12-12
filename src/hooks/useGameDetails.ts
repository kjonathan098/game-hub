import { useEffect, useState } from 'react'
import { CanceledError } from 'axios'
import apiClient from '../services/api-client'
import { IGameDetails } from '../interfaces/games.interface'

const useGameDetails = (id: string) => {
	const [data, setData] = useState<IGameDetails | null>()
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		console.log({ id })

		const controller = new AbortController()
		setLoading(true)
		apiClient
			.get<IGameDetails>(`/games/${id}`)
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
