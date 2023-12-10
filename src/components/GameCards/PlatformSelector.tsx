import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../../hooks/usePlatforms'
import { Platform } from '../../hooks/useGames'
import { GamesQuery } from '../../interfaces/games.interface'

interface Props {
	onSelect: (platform: Platform) => void
	gamesQuery: GamesQuery
}

const PlatformSelector = ({ onSelect, gamesQuery }: Props) => {
	const { data, error, loading } = usePlatforms()

	if (loading) return <div>Loading...</div>
	if (error) return null

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{gamesQuery.platform ? gamesQuery.platform.name : 'Platform'}
			</MenuButton>
			<MenuList>
				{data.map((platform) => {
					return (
						<MenuItem key={platform.id} onClick={() => onSelect(platform)}>
							{platform.name}
						</MenuItem>
					)
				})}
			</MenuList>
		</Menu>
	)
}

export default PlatformSelector
