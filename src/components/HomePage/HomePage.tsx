import HeroBanner from './HeroBanner'
import GameHeading from './GameHeading'
import { HStack } from '@chakra-ui/react'
import PlatformSelector from './PlatformSelector'
import SortGames from './SortGames'
import GameGrid from './GameGrid'

const HomePage = () => {
	return (
		<>
			<HeroBanner />
			<GameHeading />
			<HStack spacing={3} padding={3} marginBottom={5}>
				<PlatformSelector />
				<SortGames />
			</HStack>
			<GameGrid />
		</>
	)
}

export default HomePage
