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
	const now = new Date()

	const expiryDate = new Date(2024, 0, 13, 12, 0, 0) // Target date and time
	const differenceInSeconds = (expiryDate.getTime() - now.getTime()) / 1000 // Difference in seconds

	const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
		expiryTimestamp: new Date(now.getTime() + differenceInSeconds * 1000),
		onExpire: () => console.warn('Timer expired'),
	})

	return (
		<AuthProvider>
			<BrowserRouter>
				<QueryProvider>
					<Center>
						<Box maxW={'1600px'} w={'100%'}>
							<Grid templateAreas={{ base: 'main', lg: ` "aside main"` }} templateColumns={{ base: '1fr', lg: '200px 1fr' }}>
								<Show above="lg">
									<GridItem area="aside" position={'sticky'} top={0} h={'100vh'} overflow={'scroll'} bg={'gray.200'} _dark={{ bg: '#272727' }}>
										<SideBar />
									</GridItem>
								</Show>

								<GridItem area="main" pl={{ base: '0', lg: '5' }}>
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

{
	/* <Box bg={'green'}>
<HStack bg={'red'}>
	<Box w={'50%'} position={'relative'}>
		<Image src={gta6} objectFit={'cover'} objectPosition={'center'} />
		<HStack position={'absolute'} top={0} bg={'green'}>
			<Center position={'relative'} h={'80px'} w={'50px'} p={0} bg={'purple'}>
				<Text fontSize={'5xl'}>{days}</Text>
				<Box border={'1px'} borderColor={'white'} width={'100%'} h={'1px'} bg={'red'} position={'absolute'} opacity={0.4} />
			</Center>
			<Center position={'relative'} h={'40px'} w={'55px'} p={0} bg={'purple'}>
				<Text fontSize={'5xl'}>{days}</Text>
				<Box border={'1px'} borderColor={'white'} width={'100%'} h={'1px'} bg={'red'} position={'absolute'} opacity={0.4} />
			</Center>
			<Center position={'relative'} px={'10px'} py={'12px'} bg={'purple'}>
				<Text fontSize={'2xl'}>{seconds}</Text>
				<Box border={'1px'} borderColor={'white'} width={'100%'} h={'1px'} bg={'red'} position={'absolute'} opacity={0.4} />
			</Center>
		</HStack>
	</Box>
	<Box>2</Box>
</HStack>
</Box> */
}
