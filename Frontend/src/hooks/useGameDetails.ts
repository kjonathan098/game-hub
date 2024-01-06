import { useEffect, useState } from 'react'
import { CanceledError } from 'axios'
import apiClient from '../services/api-client'
import { IGameDetails } from '../interfaces/games.interface'
import useData from './useDataFetch'

const useGameDetails = (id: string) => {
	const [data, setData] = useState<IGameDetails | null>(null)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	// Couldnt use useDataFetch bc this endpoint  doestn return a results[] like with other endpoints
	useEffect(() => {
		const controller = new AbortController()
		setLoading(true)
		apiClient
			.get<IGameDetails>(`/games/${id}`)
			.then((res) => {
				setData({ ...res.data, price: 30 })
			})
			.catch((err) => {
				if (err instanceof CanceledError) return
				setError(err.message)
			})
			.finally(() => {
				setLoading(false)
			})
		return () => controller.abort()
	}, [id])

	return { data, error, loading }
}

export default useGameDetails
