import { Badge } from '@chakra-ui/react'

interface Props {
	score: number
}

const Score = ({ score }: Props) => {
	let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'
	return (
		<Badge fontSize={'xs'} colorScheme={color} paddingX={1.5} borderRadius={'4px'}>
			{score}
		</Badge>
	)
}

export default Score
