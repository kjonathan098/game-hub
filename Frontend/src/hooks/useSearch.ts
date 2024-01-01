import { useEffect, useState } from 'react'
import { IGame, IGamesQuery } from '../interfaces/games.interface'
import useDataFetch from './useDataFetch'
import axios, { CanceledError } from 'axios'
import apiClient from '../services/api-client'

const useSearch = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [dataResponse, setDataResponse] = useState<IGame[]>([])
	const [loading, setLoading] = useState(false)

	// Couldnt use useDataFetch bc when !searchQuery.length i would have to add and extra filter to stop the api call and it will become unsustainable
	useEffect(() => {
		if (!searchQuery.length) return setDataResponse([])
		setLoading(true)

		const controller = new AbortController()
		apiClient
			.get('/games', { params: { search: searchQuery } })
			.then((res) => {
				setDataResponse([...res.data.results])
			})
			.catch((e) => {
				if (e instanceof CanceledError) return
				console.log(e.message, 'errror')
			})
			.finally(() => {
				setLoading(false)
			})
	}, [searchQuery])

	return { setSearchQuery, dataResponse, loading }
}

export default useSearch
