import { Box, Button, Center, Image, Spinner, Stack, Tag, Text } from '@chakra-ui/react'
import { IGameDetails } from '../../interfaces/games.interface'
import useGameAchievements from '../../hooks/useGameAchievements'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import React from 'react'
import GameAwards from './GameAwards'
import RedditPosts from './RedditPosts'

interface Props {
	gameDetails: IGameDetails
}

const GameTabs = ({ gameDetails }: Props) => {
	// const { achievements, setUrl, loading } = useGameAchievements<Result>(`/games/${gameDetails.id}/reddit`)
	return (
		<Tabs>
			<TabList>
				<Tab>Achievements</Tab>
				<Tab>Reddit Post</Tab>
				<Tab>Three</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<GameAwards gameDetails={gameDetails} />
				</TabPanel>
				<TabPanel>
					<RedditPosts gameDetails={gameDetails} />
				</TabPanel>
				<TabPanel>
					<p>three!</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}

export default GameTabs

function RadialBg() {
	const radialBg = `radial-gradient(ellipse at center, rgba(16, 16, 16, 0) 0%, rgba(16, 16, 16, 1) 70%)`

	return <Box height="100%" position="absolute" width="100%" top={0} bg={radialBg} />
}

// return (
// 	<Box position={'relative'}>
// 		<Box position={'absolute'} top={0} width={'100%'} bg={'green'} w={'100%'} h={'500px'}>
// 			<Box bgImage={` url(${gameDetails.background_image})`} bgPosition="center" bgRepeat="no-repeat" bgSize="cover" zIndex={1} h={'100%'}>
// 				<RadialBg />
// 				<Box height="100%" width="100%" bg={'rgba(16, 16, 16, 1)'} opacity={0.5} />
// 			</Box>
// 		</Box>

// 		<Box position={'relative'} dir="column" minH={'500px'} pt={'10%'}>
// 			<Center>
// 				<Stack spacing={'4'} h={'500px'} overflow={'scroll'}>
// 					{achievements?.results.map((post, index) => {
// 						return (
// 							<React.Fragment key={index}>
// 								<Stack border={'1px'} rounded={'md'} bg={'blackAlpha.500'} w={'500px'} p={2}>
// 									<Stack direction="row">
// 										<Center>
// 											<Image src={post.image!} width={'50px'} height={'50px'} rounded={'full'} objectFit={'cover'} objectPosition={'center'} />
// 											<Text>{post.username}</Text>
// 										</Center>
// 									</Stack>
// 									<Text fontWeight={'extrabold'}>{post.name}</Text>
// 									<Text maxW={''}>{post.text}</Text>
// 								</Stack>
// 							</React.Fragment>
// 						)
// 					})}
// 				</Stack>
// 			</Center>
// 		</Box>
// 	</Box>
// )

// return (
// 	<Box position={'relative'}>
// 		<Box position={'absolute'} top={0} width={'100%'} bg={'green'} w={'100%'} h={'500px'}>
// 			<Box bgImage={` url(${gameDetails.background_image})`} bgPosition="center" bgRepeat="no-repeat" bgSize="cover" zIndex={1} h={'100%'}>
// 				<RadialBg />
// 				<Box height="100%" width="100%" bg={'rgba(16, 16, 16, 1)'} opacity={0.5} />
// 			</Box>
// 		</Box>
// 		<Box position={'relative'} dir="column" maxH={'500px'} overflow={'scroll'} minH={'500px'}>
// 			{loading && <Spinner />}
// 			{!loading &&
// 				achievements?.results.map((achievement, index) => {
// 					return (
// 						<React.Fragment key={index}>
// 							<Stack direction="row" mb={3}>
// 								<Image src={achievement.image} width={'100px'} />
// 								<Stack>
// 									<Text fontWeight={'bold'}>{achievement.name}</Text>
// 									<Text>{achievement.description}</Text>
// 									<Tag w={'fit-content'} colorScheme="yellow">
// 										% {achievement.percent}
// 									</Tag>
// 								</Stack>
// 							</Stack>
// 						</React.Fragment>
// 					)
// 				})}
// 		</Box>
// 		<Button
// 			isDisabled={!achievements?.previous}
// 			onClick={() => {
// 				setUrl(achievements?.previous!)
// 			}}
// 		>
// 			previous
// 		</Button>
// 		<Button
// 			isDisabled={!achievements?.next}
// 			onClick={() => {
// 				setUrl(achievements?.next!)
// 			}}
// 		>
// 			Next
// 		</Button>
// 	</Box>
// )
