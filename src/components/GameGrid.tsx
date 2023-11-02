import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
interface Game {
	id: number
	name: string
}

interface FetchGamesResponse {
	count: number
	results: Game[]
}
const GameGrid = () => {
	const [games, setGames] = useState<Game[]>([])
	const [error, setError] = useState('')

	useEffect(() => {
		apiClient
			.get<FetchGamesResponse>('/gamesx')
			.then((response) => {
				setGames(response.data.results)
				console.log(response.data)
			})
			.catch((error) => {
				setError(error.message)
			})
	}, [])

	return (
		<>
			{error && <li>{error}</li>}
			<ul>
				{games.map((game) => {
					return <li key={game.id}>{game.name}</li>
				})}
			</ul>
		</>
	)
}

export default GameGrid
