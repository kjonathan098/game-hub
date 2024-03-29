import { Box, Center, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/Header/NavBar'
import QueryProvider from './context/queryProvider'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import GamePage from './components/GamePage/GamePage'
import SideBar from './components/SideBar/SideBar'
import AuthProvider from './context/authProvider'
import GamesDisplay from './components/GamesDisplay/GamesDisplay'
import HomePage from './components/HomePage/HomePage'
import { register } from 'swiper/element/bundle'

import Footer from './components/Footer/Footer'

register()

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<QueryProvider>
					<Center>
						<Box maxW={'1600px'} w={'100%'} h={'100%'}>
							<Grid templateAreas={{ base: 'main', lg: ` "aside main"` }} templateColumns={{ base: '1fr', lg: '200px 1fr' }} h={'100%'}>
								<Show above="lg">
									<GridItem area="aside" position={'sticky'} top={0} h={'100vh'} overflow={'scroll'} bg={'gray.200'} _dark={{ bg: '#272727' }}>
										<SideBar />
									</GridItem>
								</Show>

								<GridItem area="main" p={2}>
									<NavBar />
									<Routes>
										<Route path="/" element={<HomePage />} />
										<Route path="/games" element={<GamesDisplay />} />
										<Route path="/game/:id" element={<GamePage />} />
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
