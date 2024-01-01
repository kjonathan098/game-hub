import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/Header/NavBar'
import QueryProvider from './context/queryProvider'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import GamePage from './components/GamePage/GamePage'
import SideBar from './components/SideBar/SideBar'
import AuthProvider from './context/authProvider'
import GamesDisplay from './components/GamesDisplay/GamesDisplay'
import HomePage from './components/HomePage/HomePage'

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<QueryProvider>
					<Grid templateAreas={{ base: `"nav " " main"`, lg: `"nav nav" "aside main"` }} templateColumns={{ base: '1fr', lg: '200px 1fr' }}>
						<GridItem area="nav">
							<NavBar />
						</GridItem>

						<Show above="lg">
							<GridItem area="aside" position={'sticky'} top={0} h={'100vh'} overflow={'scroll'}>
								<SideBar />
							</GridItem>
						</Show>

						<GridItem area="main">
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route path="/games" element={<GamesDisplay />} />
								<Route path="/game/:id" element={<GamePage />} />
							</Routes>
						</GridItem>
					</Grid>
				</QueryProvider>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
