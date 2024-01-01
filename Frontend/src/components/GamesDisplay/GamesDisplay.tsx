import HeroBanner from './HeroBanner'
import GameHeading from './GameHeading'
import { Box, HStack, Stack } from '@chakra-ui/react'
import PlatformSelector from './PlatformSelector'
import SortGames from './SortGames'
import GameGrid from './GameGrid'
import GenreSelector from './GenreSelector'

const GamesDisplay = () => {
	return (
		<>
			<HeroBanner />
			<GameHeading />
			<Stack spacing={3} padding={3} marginBottom={5} flexDir={{ base: 'column', md: 'row' }}>
				<Stack display={{ base: 'flex', lg: 'none' }} spacing={3} flexDir={{ base: 'column', md: 'row' }}>
					<GenreSelector />
					<PlatformSelector />
				</Stack>
				<SortGames />
			</Stack>
			<GameGrid />
		</>
	)
}

export default GamesDisplay
