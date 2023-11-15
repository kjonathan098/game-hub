import { useEffect } from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface Props {
	onSelect: (platform: Platform) => void
	selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelect, selectedPlatform }: Props) => {
	const { data, error, loading } = usePlatforms()

	useEffect(() => {
		console.log(data)
	}, [data])

	if (loading) return <div>Loading...</div>
	if (error) return null

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform ? selectedPlatform.name : 'Platform'}
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
