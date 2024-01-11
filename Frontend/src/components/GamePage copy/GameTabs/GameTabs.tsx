import { Box, Button, Center, Image, Spinner, Stack, TabIndicator, Tag, Text } from '@chakra-ui/react'
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
				<Tab _selected={{ color: 'whatsapp.100' }}>Achievements</Tab>
				<Tab _selected={{ color: 'whatsapp.100', borderBottom: '1px ,whatsapp.100' }}>Reddit Post</Tab>
				<TabIndicator mt="10" height="2px" bg="whatsapp.100" borderRadius="1px" />
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
