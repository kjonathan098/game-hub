import { HStack, Image, Skeleton, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import useGames from '../../../hooks/useGames'
import { IGame, IGamesQuery } from '../../../interfaces/games.interface'
import { queryContext } from '../../../context/queryProvider'
import { useNavigate } from 'react-router-dom'
interface IProps {
	gameId: number
}
const SimilarGames = ({ gameId }: IProps) => {
	const { data, getSimilarGames, loading } = useContext(queryContext)

	const navigate = useNavigate()

	const navigateGamePage = (gameId: number) => {
		navigate(`/game/${gameId}`, { state: { id: gameId } })
	}

	useEffect(() => {
		console.log({ data })

		getSimilarGames(`games/${gameId}/game-series`)
	}, [])

	if (loading)
		return (
			<HStack overflow={'scroll'}>
				{[0, 1, 2, 3, 5].map((item) => {
					return <Skeleton width={'200px'} height={'300px'} objectFit={'cover'} key={item} />
				})}
			</HStack>
		)
	if (!data || !data.length) return <>Nothing To show</>
	return (
		<Stack>
			<HStack overflow={'scroll'}>
				{data.map((game, index) => {
					return (
						<Image
							key={index}
							src={game.background_image}
							width={'200px'}
							height={'300px'}
							objectFit={'cover'}
							onClick={() => {
								navigateGamePage(game.id)
							}}
						/>
					)
				})}
			</HStack>
		</Stack>
	)
}

export default SimilarGames
