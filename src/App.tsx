import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/Header/NavBar'
import GenreList from './components/SideBar/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import { GamesQuery } from './interfaces/games.interface'

import QueryProvider from './context/queryProvider'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import GamePage from './components/GamePage/GamePage'

function App() {
	const [gamesQuery, setGamesQuery] = useState({} as GamesQuery)
	console.log({ gamesQuery })

	return (
		<BrowserRouter>
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
						<GenreList onSelect={(genre: Genre) => setGamesQuery({ ...gamesQuery, genre, page: null })} gamesQuery={gamesQuery} />
					</GridItem>
				</Show>

				<QueryProvider>
					<GridItem area="main">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/game/:id" element={<GamePage />} />
						</Routes>
					</GridItem>
				</QueryProvider>
			</Grid>
		</BrowserRouter>
	)
}

export default App
