import { Badge, Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import GamePlatforms from './GamePlatforms'
import Score from './Score'
import cropImage from '../services/img-crop'

interface GameCardProps {
	game: Game
}

const GameCard = ({ game }: GameCardProps) => {
	return (
		<Card>
			<Image src={cropImage(game.background_image)} />
			<CardBody>
				<Heading fontSize={'2xlg'}>{game.name}</Heading>
				<HStack justifyContent={'space-between'}>
					<GamePlatforms platforms={game.parent_platforms.map((p) => p.platform)} />
					<Score score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	)
}

export default GameCard
