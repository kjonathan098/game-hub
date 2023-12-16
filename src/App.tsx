import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/Header/NavBar'
import { useState } from 'react'
import { IGamesQuery } from './interfaces/games.interface'
import QueryProvider from './context/queryProvider'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import GamePage from './components/GamePage/GamePage'
import SideBar from './components/SideBar/SideBar'

function App() {
	const [gamesQuery, setGamesQuery] = useState({} as IGamesQuery)

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
					<GridItem area="aside" padding={5} bg="green">
						<SideBar />
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
