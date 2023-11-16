import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
	return (
		<InputGroup borderRadius={3} variant={'filled'}>
			<InputLeftElement pointerEvents="none" children={<BsSearch />} />
			<Input placeholder="Search Game" borderRadius={20} variant={'filled'} />
		</InputGroup>
	)
}

export default SearchInput
