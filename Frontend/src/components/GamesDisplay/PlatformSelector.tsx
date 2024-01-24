import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../../hooks/usePlatforms'
import { useContext } from 'react'
import { queryContext } from '../../context/queryProvider'

const PlatformSelector = () => {
	const { data, error, loading } = usePlatforms()
	const { gamesQuery, selectPlatform } = useContext(queryContext)

	if (loading) return <div>Loading...</div>
	if (error) return null

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{gamesQuery.platform ? gamesQuery.platform.name : 'Platform'}
			</MenuButton>
			<MenuList h={'400px'} overflow={'scroll'}>
				{data.map((platform) => {
					return (
						<MenuItem key={platform.id} onClick={() => selectPlatform(platform)}>
							{platform.name}
						</MenuItem>
					)
				})}
			</MenuList>
		</Menu>
	)
}

export default PlatformSelector
