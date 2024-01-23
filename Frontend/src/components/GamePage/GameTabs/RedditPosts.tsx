import { Box, Button, Center, Image, Spinner, Stack, Tag, Text } from '@chakra-ui/react'
import { IGameDetails } from '../../../interfaces/games.interface'
import useGameAchievements from '../../../hooks/useGameAchievements'
import React from 'react'
import avatar from '../../../assets/gamerAvatar.jpeg'
import BlendedImage from '../../../utils/BlendedImage'
import GameTabGeneric from '../../../utils/GameTabGeneric'
import { RedditPostsSkeleton } from '../../../utils/Skeletons'

interface Props {
	gameDetails: IGameDetails
}

export interface Result {
	id: number
	name: string
	text: string
	image: string | null
	url: string
	username: string
	username_url: string
	created: Date
}
const RedditPosts = ({ gameDetails }: Props) => {
	const { achievements, setUrl, loading } = useGameAchievements<Result>(`/games/${gameDetails.id}/reddit`)

	return (
		<GameTabGeneric gameDetails={gameDetails} nextLink={achievements?.next} prevLink={achievements?.previous} setUrl={setUrl}>
			{loading && <RedditPostsSkeleton />}
			{!loading &&
				achievements?.results.map((post, index) => {
					return (
						<React.Fragment key={index}>
							<Stack rounded={'md'} bg={'blackAlpha.700'} maxW={'500px'} p={2} maxH={'300px'}>
								<Stack direction="row">
									<Center>
										<Image src={post.image || avatar} width={'50px'} height={'50px'} rounded={'full'} objectFit={'cover'} objectPosition={'center'} />
										<Text>{post.username}</Text>
									</Center>
								</Stack>
								<Text fontWeight={'extrabold'}>{post.name}</Text>
								<Text fontSize={'sm'} color={'gray.600'} mt={-11}>
									{new Date(post.created).toLocaleDateString()}
								</Text>
								<Text maxW={''} overflow={'scroll'}>
									{post.text}
								</Text>
							</Stack>
						</React.Fragment>
					)
				})}
		</GameTabGeneric>
	)
}

export default RedditPosts

function RadialBg() {
	const radialBg = `radial-gradient(ellipse at center, rgba(16, 16, 16, 0) 0%, rgba(16, 16, 16, 1) 70%)`

	return <Box height="100%" position="absolute" width="100%" top={0} bg={radialBg} />
}
