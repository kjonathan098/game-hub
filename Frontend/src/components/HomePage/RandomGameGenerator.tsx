import { Box, Button, Center, Image } from '@chakra-ui/react'
import randomGameBanner from '../../assets/random_game_generator.png'
import { useEffect, useState } from 'react'
import useGetSimilarGames from '../../hooks/useGetSimilarGames'

const RandomGameGenerator = () => {
	const [color, setColor] = useState('red')
	const { similarGames, loading, error } = useGetSimilarGames()

	useEffect(() => {
		if (!similarGames.length) return
		console.log(similarGames[Math.floor(Math.random() * similarGames.length)])
	}, [similarGames])

	useEffect(() => {
		const colors = ['red', 'blue', 'green', 'yellow'] // Add more colors if you want
		let i = 0

		const intervalId = setInterval(() => {
			setColor(colors[i])
			i = (i + 1) % colors.length // Loop back to the first color when we've gone through all colors
		}, 1000) // Change color every 1000ms (1 second)

		return () => clearInterval(intervalId) // Clean up the interval on unmount
	}, [])

	return (
		<Box>
			<Center position={'relative'}>
				<Image src={randomGameBanner} rounded={'xl'} />
				<Button position={'absolute'} bottom={3} w={'500px'} fontWeight={'bold'} colorScheme={color} isLoading={loading}>
					Try Your Luck Now!
				</Button>
			</Center>
		</Box>
	)
}

export default RandomGameGenerator
