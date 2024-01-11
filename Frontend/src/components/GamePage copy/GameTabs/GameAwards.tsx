import { Box, Button, Center, Image, Spinner, Stack, Tag, Text } from '@chakra-ui/react'
import { IGameDetails } from '../../../interfaces/games.interface'
import useGameAchievements from '../../../hooks/useGameAchievements'
import React from 'react'
import { GameAwardsSkeleton } from '../../../utils/Skeletons'
import BlendedImage from '../../../utils/BlendedImage'

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

	return (
		<Box h={'500px'} position={'relative'}>
			<BlendedImage img={gameDetails.background_image_additional} />

			<Box position={'relative'} dir="column" maxH={'500px'} overflow={'scroll'} minH={'500px'}>
				<Center>
					<Stack>
						{loading && <GameAwardsSkeleton />}
						{!loading &&
							achievements?.results.map((achievement, index) => {
								return (
									<React.Fragment key={index}>
										<Stack direction="row" mb={3} bg={'blackAlpha.600'} p={3}>
											<Image src={achievement.image} width={'100px'} />
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
					</Stack>
				</Center>
			</Box>
			<Button
				isDisabled={!achievements?.previous}
				onClick={() => {
					setUrl(achievements?.previous!)
				}}
			>
				previous
			</Button>
			<Button
				isDisabled={!achievements?.next}
				onClick={() => {
					setUrl(achievements?.next!)
				}}
			>
				Next
			</Button>
		</Box>
	)
}

export default GameAwards

function RadialBg() {
	const radialBg = `radial-gradient(ellipse at center, rgba(16, 16, 16, 0) 0%, rgba(16, 16, 16, 1) 70%)`

	return <Box height="100%" position="absolute" width="100%" top={0} bg={radialBg} />
}
