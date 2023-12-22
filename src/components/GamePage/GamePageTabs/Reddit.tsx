import React, { useEffect } from 'react'
import { IGameDetails, IReddit } from '../../../interfaces/games.interface'
import useTabsFetch from '../../../hooks/useTabsFetch'

interface Props {
	game: IGameDetails
}

const Reddit = ({ game }: Props) => {
	const { data, loading, error } = useTabsFetch<IReddit>(game, 'reddit')
	useEffect(() => {
		console.log(data, 'reddit')
	}, [data])
	return <div>{game.name}</div>
}

export default Reddit
