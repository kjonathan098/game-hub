import { Card, CardBody, HStack, Heading, Image, VStack } from '@chakra-ui/react'
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
