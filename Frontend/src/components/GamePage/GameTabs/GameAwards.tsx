import { Box, Button, Center, HStack, Image, Spinner, Stack, Tag, Text } from '@chakra-ui/react'
import { IGameDetails } from '../../../interfaces/games.interface'
import useGameAchievements from '../../../hooks/useGameAchievements'
import React from 'react'
import { GameAwardsSkeleton } from '../../../utils/Skeletons'
import BlendedImage from '../../../utils/BlendedImage'
import GameTabGeneric from '../../../utils/GameTabGeneric'

interface Props {
	gameDetails: IGameDetails
}

interface Achievement {
	id: number
	name: string
	description: string
	image: string
	percent: string
}

const GameAwards = ({ gameDetails }: Props) => {
	const { achievements, setUrl, loading } = useGameAchievements<Achievement>(`/games/${gameDetails.id}/achievements`)

	const fetchNextResults = () => {
		setUrl(achievements?.next!)
	}

	const fetchPrevResults = () => {
		setUrl(achievements?.previous!)
	}

	return (
		<>
			<GameTabGeneric gameDetails={gameDetails} nextLink={achievements?.next} prevLink={achievements?.previous} setUrl={setUrl}>
				{loading && <GameAwardsSkeleton />}
				{!loading &&
					achievements?.results.map((achievement, index) => {
						return (
							<React.Fragment key={index}>
								<Stack direction="row" mb={3} bg={'blackAlpha.600'} p={3} maxW={'500px'}>
									<Image src={achievement.image} width={'100px'} objectFit={'cover'} objectPosition={'center'} />
									<Stack>
										<Text fontWeight={'bold'}>{achievement.name}</Text>
										<Text>{achievement.description}</Text>
										<Tag w={'fit-content'} colorScheme="yellow">
											% {achievement.percent}
										</Tag>
									</Stack>
								</Stack>
							</React.Fragment>
						)
					})}
			</GameTabGeneric>
		</>
	)
}

export default GameAwards

function RadialBg() {
	const radialBg = `radial-gradient(ellipse at center, rgba(16, 16, 16, 0) 0%, rgba(16, 16, 16, 1) 70%)`

	return <Box height="100%" position="absolute" width="100%" top={0} bg={radialBg} />
}
