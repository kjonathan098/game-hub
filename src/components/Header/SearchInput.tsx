import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useContext, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { queryContext } from '../../context/queryProvider'

interface Props {}

const SearchInput = ({}: Props) => {
	const { searchText } = useContext(queryContext)
	const ref = useRef<HTMLInputElement>(null)
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				console.log('hero')

				if (!ref.current?.value) return
				searchText(ref.current?.value!)
			}}
			style={{ width: '100%' }}
		>
			<InputGroup borderRadius={3} variant={'filled'} position={'relative'}>
				<InputLeftElement pointerEvents="none" children={<BsSearch />} />
				<Input placeholder="Search Game" borderRadius={20} variant={'filled'} ref={ref} onChange={() => {}} />
			</InputGroup>
		</form>
	)
}

export default SearchInput
