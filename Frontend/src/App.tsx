import { Box, Center, Grid, GridItem, Image, Show, Text } from '@chakra-ui/react'
import NavBar from './components/Header/NavBar'
import QueryProvider from './context/queryProvider'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import GamePage from './components/GamePage/GamePage'
import SideBar from './components/SideBar/SideBar'
import AuthProvider from './context/authProvider'
import GamesDisplay from './components/GamesDisplay/GamesDisplay'
import HomePage from './components/HomePage/HomePage'
import { register } from 'swiper/element/bundle'
import test from './assets/HomePageCarouselPromo/deadIsland.avif'

register()

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<QueryProvider>
					<Center>
						<Grid templateAreas={{ lg: ` "aside main"` }} templateColumns={{ base: '1fr', lg: '200px 1fr' }}>
							<Show above="lg">
								<GridItem area="aside" position={'sticky'} top={0} h={'100vh'} overflow={'scroll'} shadow={'dark-lg'}>
									<SideBar />
								</GridItem>
							</Show>

							<GridItem area="main" pl={{ base: '', lg: '5' }}>
								<NavBar />
								<Routes>
									<Route path="/" element={<HomePage />} />
									<Route path="/games" element={<GamesDisplay />} />
									<Route path="/game/:id" element={<GamePage />} />
								</Routes>
							</GridItem>
						</Grid>
					</Center>
				</QueryProvider>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
