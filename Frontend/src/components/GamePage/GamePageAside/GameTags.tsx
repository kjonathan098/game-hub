import { Stack, Tag, TagLabel } from '@chakra-ui/react'
import { IGameDetails } from '../../../interfaces/games.interface'

interface Props {
	gameDetails: IGameDetails
}

const GameTags = ({ gameDetails }: Props) => {
	return (
		<Stack direction="row" wrap={'wrap'} spacing={2}>
			{gameDetails.tags.slice(0, 6).map((tag, index) => {
				return (
					<Tag size={'sm'} key={index} variant="subtle" colorScheme="cyan" width={'fit-content'} p={3}>
						<TagLabel>{tag.name}</TagLabel>
					</Tag>
				)
			})}
		</Stack>
	)
}

export default GameTags
