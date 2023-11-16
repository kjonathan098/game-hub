import { Heading } from '@chakra-ui/react'
import { GamesQuery } from '../App'

interface Props {
	gamesQuery: GamesQuery | null
}
const GameHeading = ({ gamesQuery }: Props) => {
	return (
		<Heading as={'h1'} marginLeft={3} marginBottom={5}>
			{gamesQuery?.platform?.name} {gamesQuery?.genre?.name} Games
		</Heading>
	)
}

export default GameHeading
