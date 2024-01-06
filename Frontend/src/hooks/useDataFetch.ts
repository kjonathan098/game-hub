import { AxiosRequestConfig, CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface FetchResponse<T> {
	count: number
	results: T[]
}
// T will get replaced by the type youre passing (interface ex {name: string, age: number})
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
	// saying that data should be an array of T ([{name: string, age: number}])
	// export type IgameReviews = {
	// 	count: number
	// 	next: string
	// 	results: IGameReviewResults[]
	// }
	const [data, setData] = useState<T[]>([])
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(
		() => {
			const controller = new AbortController()
			setError('')
			setLoading(true)
			if (!requestConfig?.params.page) {
				setData([])
			}
			apiClient
				// You are also passing T to the FetchResponse interface and saying that FetchResponse will include the folowwing key value pairs
				.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
				.then((res) => {
					const games = requestConfig?.params.page ? [...data, ...res.data.results] : [...res.data.results]

					setData(games)
					setLoading(false)
				})
				.catch((err) => {
					if (err instanceof CanceledError) return
					setError(err.message)
					setLoading(false)
				})

			return () => controller.abort()
		},
		deps ? [...deps] : []
	)

	return { data, error, loading }
}

export default useData
