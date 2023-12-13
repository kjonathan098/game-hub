import React from 'react'
import { IGameDetails } from '../../interfaces/games.interface'
import useGameDetails from '../../hooks/useGameDetails'
import useGameScreenShots from '../../hooks/useGameScreenShots'
import { Image } from '@chakra-ui/react'

interface Props {
	gameDetails: IGameDetails
}

const GameImages = ({ gameDetails }: Props) => {
	const { data, error, loading } = useGameScreenShots(gameDetails.id)

	if (error) return <>error....</>
	if (loading || !data.length) return <>Loading...</>

	return <Image src={data[0].image} alt="game" />
}

export default GameImages
