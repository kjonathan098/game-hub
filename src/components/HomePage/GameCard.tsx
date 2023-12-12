import { Card, CardBody, HStack, Heading, Image, VStack } from '@chakra-ui/react'
import { IGame } from '../../interfaces/games.interface'
import GamePlatforms from './GamePlatforms'
import Score from './Score'
import cropImage from '../../services/img-crop'
import { useNavigate } from 'react-router-dom'

interface GameCardProps {
	game: IGame
}

const GameCard = ({ game }: GameCardProps) => {
	const navigate = useNavigate()

	const navigateGamePage = () => {
		navigate(`/game/${game.id}`, { state: { id: game.id } })
	}

	return (
		<Card onClick={navigateGamePage}>
			<Image src={cropImage(game.background_image)} />
			<CardBody>
				<VStack alignItems={'start'} spacing={3}>
					<HStack justifyContent={'space-between'}>
						<GamePlatforms platforms={game.parent_platforms.map((p) => p.platform)} />
						<Score score={game.metacritic} />
					</HStack>
					<Heading fontSize={'2xlg'}>{game.name}</Heading>
				</VStack>
			</CardBody>
		</Card>
	)
}

export default GameCard
