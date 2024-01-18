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
import gta6 from './assets/gta6.jpeg'
import { useTimer } from 'react-timer-hook'

register()

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<QueryProvider>
					<Center>
						<Box maxW={'1100px'} w={'100%'} h={'100%'}>
							<Grid templateAreas={{ base: 'main', lg: ` "aside main"` }} templateColumns={{ base: '1fr', lg: '200px 1fr' }} h={'100%'}>
								<Show above="lg">
									<GridItem area="aside" position={'sticky'} top={0} h={'100vh'} overflow={'scroll'} bg={'gray.200'} _dark={{ bg: '#272727' }}>
										<SideBar />
									</GridItem>
								</Show>

								<GridItem area="main" pl={{ base: '0', lg: '5' }}>
									<NavBar />
									<Routes>
										<Route path="/" element={<HomePage />} />
										{/* <Route path="/games" element={<GamesDisplay />} />
										<Route path="/game/:id" element={<GamePage />} /> */}
									</Routes>
								</GridItem>
							</Grid>
						</Box>
					</Center>

					<Footer />
				</QueryProvider>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
