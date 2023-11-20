import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortGames, { SortOption } from './components/SortGames'
import GameHeading from './components/GameHeading'

export interface GamesQuery {
	genre: Genre | null
	platform: Platform | null
	sortBy: SortOption | null
	searchText: string | null
}

function App() {
	const [gamesQuery, setGamesQuery] = useState({} as GamesQuery)

	return (
		<Grid templateAreas={{ base: `"nav " " main"`, lg: `"nav nav" "aside main"` }} templateColumns={{ base: '1fr', lg: '200px 1fr' }}>
			<GridItem area="nav">
				<NavBar
					onSearch={(searchText: string) => {
						setGamesQuery({ ...gamesQuery, searchText })
					}}
				/>
			</GridItem>

			<Show above="lg">
				<GridItem area="aside" padding={5}>
					<GenreList onSelect={(genre: Genre) => setGamesQuery({ ...gamesQuery, genre })} gamesQuery={gamesQuery} />
				</GridItem>
			</Show>

			<GridItem area="main">
				<GameHeading gamesQuery={gamesQuery} />
				<HStack spacing={3} padding={3} marginBottom={5}>
					<PlatformSelector
						onSelect={(platform: Platform) => {
							setGamesQuery({ ...gamesQuery, platform })
						}}
						gamesQuery={gamesQuery}
					/>
					<SortGames
						gamesQuery={gamesQuery}
						onSelect={(sortBy: SortOption) => {
							setGamesQuery({ ...gamesQuery, sortBy })
						}}
					/>
				</HStack>
				<GameGrid gamesQuery={gamesQuery} />
			</GridItem>
		</Grid>
	)
}

export default App
