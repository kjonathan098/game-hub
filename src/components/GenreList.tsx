import { useEffect } from 'react'
import useGenre, { Genre } from '../hooks/useGenre'
import { Button, HStack, Image, List, ListItem, Spinner, Text, VStack } from '@chakra-ui/react'
import cropImage from '../services/img-crop'
import { GamesQuery } from '../App'

interface Props {
	onSelect: (genre: Genre) => void
	gamesQuery: GamesQuery
}

const GenreList = ({ onSelect, gamesQuery }: Props) => {
	const { data, error, loading } = useGenre()

	useEffect(() => {}, [])

	if (loading) return <Spinner />
	if (error) return null

	return (
		<List padding={'5px'}>
			{data.map((genre) => {
				return (
					<ListItem key={genre.id} marginBottom={'10px'}>
						<HStack key={genre.id} spacing={3}>
							<Image src={cropImage(genre.image_background)} boxSize={'32px'} borderRadius={8} objectFit={'cover'} />
							<Button
								variant={'link'}
								onClick={() => {
									onSelect(genre)
								}}
								fontWeight={gamesQuery.genre?.id === genre.id ? 'bold' : 'normal'}
								whiteSpace={'normal'}
								textAlign={'left'}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				)
			})}
		</List>
	)
}

export default GenreList
