import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { GamesQuery } from '../../App'

export interface SortOption {
	value: string
	label: string
}

interface Props {
	onSelect: (sortBy: SortOption) => void
	gamesQuery: GamesQuery
}

const SortGames = ({ onSelect, gamesQuery }: Props) => {
	const sortOptions: SortOption[] = [
		{ value: '', label: 'Relevance' },
		{ value: '-rating', label: 'Average Rating' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-date', label: 'Date Added' },
		{ value: '-release', label: 'Release Date' },
		{ value: 'name', label: 'Name' },
	]
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Sort By : {gamesQuery.sortBy?.label || 'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOptions.map((option, index) => {
					return (
						<MenuItem
							key={index}
							value={option.value}
							onClick={() => {
								onSelect(option)
							}}
						>
							{option.label}
						</MenuItem>
					)
				})}
			</MenuList>
		</Menu>
	)
}

export default SortGames
