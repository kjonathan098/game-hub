import { IGameDetails, IUser } from '../interfaces/games.interface'
import apiClient from './api-client'

const fetchGameDetails = (id: string): Promise<IGameDetails> => {
	return apiClient
		.get<IGameDetails>(`/games/${id}`)
		.then((res) => res.data)
		.catch((err) => {
			console.error(err)
			throw err
		})
}

export const fetchList = async (userList: string[]) => {
	try {
		const promises = userList.map((gameId) => fetchGameDetails(gameId))
		const gamesDetails = await Promise.all(promises)
		return gamesDetails
	} catch (error) {
		console.error(error)
		return null
		// return an error indicator or throw the error
	}
}

export default fetchList
