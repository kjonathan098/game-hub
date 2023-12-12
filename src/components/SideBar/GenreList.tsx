import { useContext, useEffect } from 'react'
import useGenre from '../../hooks/useGenre'
import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import cropImage from '../../services/img-crop'
import { queryContext } from '../../context/queryProvider'

const GenreList = () => {
	const { gamesQuery, searchGenre } = useContext(queryContext)
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
									searchGenre(genre)
								}}
								fontWeight={gamesQuery?.genre?.id === genre.id ? 'bold' : 'normal'}
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
