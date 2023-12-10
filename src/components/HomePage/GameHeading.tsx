import { Heading } from '@chakra-ui/react'
import { useContext } from 'react'
import { queryContext } from '../../context/queryProvider'

const GameHeading = () => {
	const { gamesQuery } = useContext(queryContext)
	return (
		<Heading as={'h1'} marginLeft={3} marginBottom={5}>
			{gamesQuery?.platform?.name} {gamesQuery?.genre?.name} Games
		</Heading>
	)
}

export default GameHeading
