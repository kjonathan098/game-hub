import { Box, Center, Grid, GridItem, HStack, Image, Show, Stack, Text } from '@chakra-ui/react'
import NavBar from './components/Header/NavBar'
import QueryProvider from './context/queryProvider'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import GamePage from './components/GamePage copy/GamePage'
import SideBar from './components/SideBar/SideBar'
import AuthProvider from './context/authProvider'
import GamesDisplay from './components/GamesDisplay/GamesDisplay'
import HomePage from './components/HomePage/HomePage'
import { register } from 'swiper/element/bundle'
import { CiHeart } from 'react-icons/ci'
import { FaLinkedin } from 'react-icons/fa'
import Footer from './components/Footer/Footer'

register()

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<QueryProvider>
					<Center>
						<Grid templateAreas={{ base: 'main', lg: ` "aside main"` }} templateColumns={{ base: '1fr', lg: '200px 1fr' }}>
							<Show above="lg">
								<GridItem area="aside" position={'sticky'} top={0} h={'100vh'} overflow={'scroll'}>
									<SideBar />
								</GridItem>
							</Show>

							<GridItem area="main" pl={{ base: '0', lg: '5' }} w={{ base: '100vw', lg: '86vw' }}>
								<NavBar />
								<Routes>
									<Route path="/" element={<HomePage />} />
									<Route path="/games" element={<GamesDisplay />} />
									<Route path="/game/:id" element={<GamePage />} />
								</Routes>
							</GridItem>
						</Grid>
					</Center>

					<Footer />
				</QueryProvider>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
