import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/Header/NavBar'
import GameGrid from './components/GameCards/GameGrid'
import GenreList from './components/SideBar/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import PlatformSelector from './components/GameCards/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortGames, { SortOption } from './components/GameCards/SortGames'
import GameHeading from './components/GameCards/GameHeading'
import HeroBanner from './components/GameCards/HeroBanner'
import { GamesQuery } from './interfaces/games.interface'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Testing from './components/SideBar/Testing'
import QueryProvider from './context/queryProvider'

function App() {
	const [gamesQuery, setGamesQuery] = useState({} as GamesQuery)
	console.log({ gamesQuery })

	return (
		<Grid templateAreas={{ base: `"nav " " main"`, lg: `"nav nav" "aside main"` }} templateColumns={{ base: '1fr', lg: '200px 1fr' }}>
			<GridItem area="nav">
				<NavBar
					onSearch={(searchText: string) => {
						setGamesQuery({ ...gamesQuery, searchText })
					}}
				/>
			</GridItem>

			{/* <Show above="lg">
				<GridItem area="aside" padding={5}>
					<GenreList onSelect={(genre: Genre) => setGamesQuery({ ...gamesQuery, genre, page: null })} gamesQuery={gamesQuery} />
				</GridItem>
			</Show> */}

			{/* <Router>
				<Routes>
					<Route path="/" element={<Testing />} />
					<Route path="/game/:id" element={<Testing />} />
				</Routes>
			</Router> */}

			<QueryProvider>
				<GridItem area="main">
					<HeroBanner />
					<GameHeading gamesQuery={gamesQuery} />
					<HStack spacing={3} padding={3} marginBottom={5}>
						<PlatformSelector />
						{/* <SortGames
							gamesQuery={gamesQuery}
							onSelect={(sortBy: SortOption) => {
								setGamesQuery({ ...gamesQuery, sortBy, page: null })
							}}
						/> */}
					</HStack>
					<GameGrid />
				</GridItem>
			</QueryProvider>
		</Grid>
	)
}

export default App
