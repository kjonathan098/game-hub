import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import GamePlatforms from './GamePlatforms'

interface GameCardProps {
	game: Game
}

const GameCard = ({ game }: GameCardProps) => {
	return (
		<Card borderRadius={'10px'} overflow={'hidden'}>
			<Image src={game.background_image} />

			<CardBody>
				<Heading fontSize={'2xlg'}>{game.name}</Heading>
				<GamePlatforms platforms={game.parent_platforms.map((p) => p.platform)} />
			</CardBody>
		</Card>
	)
}

export default GameCard
