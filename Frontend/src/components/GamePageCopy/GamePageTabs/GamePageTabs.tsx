import { Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import { IGameDetails } from '../../../interfaces/games.interface'
import SimilarGames from './SimilarGames'
import Achievements from './Achievements'
import Reddit from './Reddit'
interface Props {
	game: IGameDetails
}
const GamePageTabs = ({ game }: Props) => {
	return (
		<Tabs variant="enclosed" w={'100%'} size={'lg'}>
			<TabList mb="1em">
				<Tab>Game Series</Tab>
				<Tab>Game Achievements</Tab>
				<Tab>Reddit</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<SimilarGames gameId={game!.id} />
				</TabPanel>
				<TabPanel>
					<Achievements game={game} />
				</TabPanel>
				<TabPanel>
					<Reddit game={game} />
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}

export default GamePageTabs
