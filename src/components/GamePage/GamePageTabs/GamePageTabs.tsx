import { Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import { IGameDetails } from '../../../interfaces/games.interface'
import SimilarGames from '../SimilarGames'
interface Props {
	game: IGameDetails
}
const GamePageTabs = ({ game }: Props) => {
	return (
		<Tabs variant="enclosed" w={'100%'} size={'lg'}>
			<TabList mb="1em">
				<Tab>Game Series</Tab>
				<Tab>Two</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<SimilarGames gameId={game!.id} />
				</TabPanel>
				<TabPanel>
					<p>two!</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}

export default GamePageTabs
