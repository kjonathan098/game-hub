import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
	onSearch: (searchText: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
	const ref = useRef<HTMLInputElement>(null)
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				if (ref.current) {
					onSearch(ref.current.value)
				}
			}}
		>
			<InputGroup borderRadius={3} variant={'filled'}>
				<InputLeftElement pointerEvents="none" children={<BsSearch />} />
				<Input placeholder="Search Game" borderRadius={20} variant={'filled'} ref={ref} />
			</InputGroup>
		</form>
	)
}

export default SearchInput
