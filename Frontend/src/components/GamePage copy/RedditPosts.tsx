import { Box, Button, Center, Image, Spinner, Stack, Tag, Text } from '@chakra-ui/react'
import { IGameDetails } from '../../interfaces/games.interface'
import useGameAchievements from '../../hooks/useGameAchievements'
import React from 'react'

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

	console.log(achievements)

	return (
		<Box position={'relative'}>
			<Box position={'absolute'} top={0} width={'100%'} bg={'green'} w={'100%'} h={'500px'}>
				<Box bgImage={` url(${gameDetails.background_image})`} bgPosition="center" bgRepeat="no-repeat" bgSize="cover" zIndex={1} h={'100%'}>
					<RadialBg />
					<Box height="100%" width="100%" bg={'rgba(16, 16, 16, 1)'} opacity={0.5} />
				</Box>
			</Box>

			<Box position={'relative'} dir="column" minH={'500px'} pt={'10%'}>
				<Center>
					<Stack spacing={'4'} h={'500px'} overflow={'scroll'}>
						{achievements?.results.map((post, index) => {
							return (
								<React.Fragment key={index}>
									<Stack border={'1px'} rounded={'md'} bg={'blackAlpha.500'} w={'500px'} p={2}>
										<Stack direction="row">
											<Center>
												<Image src={post.image!} width={'50px'} height={'50px'} rounded={'full'} objectFit={'cover'} objectPosition={'center'} />
												<Text>{post.username}</Text>
											</Center>
										</Stack>
										<Text fontWeight={'extrabold'}>{post.name}</Text>
										<Text maxW={''}>{post.text}</Text>
									</Stack>
								</React.Fragment>
							)
						})}
					</Stack>
				</Center>
			</Box>
		</Box>
	)
}

export default RedditPosts

function RadialBg() {
	const radialBg = `radial-gradient(ellipse at center, rgba(16, 16, 16, 0) 0%, rgba(16, 16, 16, 1) 70%)`

	return <Box height="100%" position="absolute" width="100%" top={0} bg={radialBg} />
}
