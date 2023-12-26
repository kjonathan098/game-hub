import { useEffect, useState } from 'react'
import { IGame, IGamesQuery } from '../interfaces/games.interface'
import useDataFetch from './useDataFetch'
import axios, { CanceledError } from 'axios'
import apiClient from '../services/api-client'

const useSearch = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [dataResponse, setDataResponse] = useState<IGame[]>([])

	useEffect(() => {
		if (!searchQuery.length) return setDataResponse([])
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
			.finally(() => {})
	}, [searchQuery])

	// useEffect(() => {
	// 	setDataResponse(dataResponse + 1)
	// }, [searchQuery])

	return { setSearchQuery, dataResponse }
}

export default useSearch
