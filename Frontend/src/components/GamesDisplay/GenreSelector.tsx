import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { useContext } from 'react'
import { queryContext } from '../../context/queryProvider'
import useGenre from '../../hooks/useGenre'

const GenreSelector = () => {
	const { gamesQuery, selectPlatform } = useContext(queryContext)
	const { data, error, loading } = useGenre()

	if (loading) return <div>Loading...</div>
	if (error) return null

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{gamesQuery.genre ? gamesQuery.genre.name : 'Genres'}
			</MenuButton>
			<MenuList h={'400px'} overflow={'scroll'}>
				{data.map((genre) => {
					return (
						<MenuItem key={genre.id} onClick={() => selectPlatform(genre)}>
							{genre.name}
						</MenuItem>
					)
				})}
			</MenuList>
		</Menu>
	)
}

export default GenreSelector
