import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useCallback, useContext, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { queryContext } from '../../context/queryProvider'
import SearchResponse from './SearchResponse'
import { debounce } from 'lodash'

interface Props {}

const SearchInput = ({}: Props) => {
	const { rapidData, searchText, rapidLoading } = useContext(queryContext)
	const ref = useRef<HTMLInputElement>(null)
	const debouncedSearch = useCallback(
		debounce((value) => searchText(value), 500),
		[]
	)

	return (
		<Box w={'100%'} position={'relative'} bg={'red'}>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					if (!ref.current?.value) return
					searchText(ref.current?.value!)
				}}
				style={{ width: '100%' }}
			>
				<InputGroup borderRadius={3} variant={'filled'}>
					<InputLeftElement pointerEvents="none" children={<BsSearch />} />
					<Input
						placeholder="Search Game"
						borderRadius={20}
						variant={'filled'}
						ref={ref}
						onChange={() => {
							debouncedSearch(ref.current?.value!)
						}}
					/>
				</InputGroup>
			</form>
			<SearchResponse rapidData={rapidData} rapidLoading={rapidLoading} />
		</Box>
	)
}

export default SearchInput
