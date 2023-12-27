import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/Header/NavBar'
import { useEffect, useRef, useState } from 'react'
import { IGamesQuery } from './interfaces/games.interface'
import QueryProvider from './context/queryProvider'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import GamePage from './components/GamePage/GamePage'
import SideBar from './components/SideBar/SideBar'
import AuthProvider from './context/authProvider'

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
