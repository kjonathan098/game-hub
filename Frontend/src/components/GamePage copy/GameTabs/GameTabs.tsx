import { Box, Button, Center, Image, Spinner, Stack, Tag, Text } from '@chakra-ui/react'
import { IGameDetails } from '../../../interfaces/games.interface'
import useGameAchievements from '../../../hooks/useGameAchievements'
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
			</TabList>

			<TabPanels>
				<TabPanel>
					<GameAwards gameDetails={gameDetails} />
				</TabPanel>
				<TabPanel>
					<RedditPosts gameDetails={gameDetails} />
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}

export default GameTabs
