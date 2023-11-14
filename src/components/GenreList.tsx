import { useEffect } from 'react'
import useGenre, { Genre } from '../hooks/useGenre'
import { Button, HStack, Image, List, ListItem, Spinner, Text, VStack } from '@chakra-ui/react'
import cropImage from '../services/img-crop'

interface Props {
	onSelect: (genre: Genre) => void
}

const GenreList = ({ onSelect }: Props) => {
	const { data, error, loading } = useGenre()

	useEffect(() => {}, [])

	if (loading) return <Spinner />
	if (error) return null

	return (
		<List padding={'5px'}>
			{data.map((genre) => {
				return (
					<ListItem marginBottom={'10px'}>
						<HStack key={genre.id} spacing={3}>
							<Image src={cropImage(genre.image_background)} boxSize={'32px'} borderRadius={8} />
							<Button
								variant={'link'}
								onClick={() => {
									onSelect(genre)
								}}
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
