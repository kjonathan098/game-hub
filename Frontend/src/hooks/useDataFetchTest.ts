import { AxiosRequestConfig, CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

const useDataFetchTest = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
	const [data, setData] = useState<T | null>(null)
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(
		() => {
			const controller = new AbortController()
			setError('')
			setLoading(true)

			apiClient
				.get<T>(endpoint, { signal: controller.signal, ...requestConfig })
				.then((res) => {
					setData(res.data)
				})
				.catch((err) => {
					if (err instanceof CanceledError) return
					setError(err.message)
				})
				.finally(() => setLoading(false))

			return () => controller.abort()
		},
		deps ? [...deps] : []
	)

	return { data, error, loading }
}

export default useDataFetchTest
