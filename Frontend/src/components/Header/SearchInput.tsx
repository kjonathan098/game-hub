import { Box, Input, InputGroup, InputLeftElement, Spinner } from '@chakra-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import SearchResponse from './SearchResponse'
import { debounce } from 'lodash'
import useSearch from '../../hooks/useSearch'

interface Props {}

const SearchInput = ({}: Props) => {
	const { setSearchQuery, dataResponse, loading } = useSearch()
	const [inputValue, setInputValue] = useState('')
	const [showResults, setShowResults] = useState(false)

	const ref = useRef<HTMLInputElement>(null)

	const debouncedSearch = useCallback(
		debounce((value) => setSearchQuery(value), 500),
		[]
	)

	useEffect(() => {
		if (!dataResponse.length) return setShowResults(false)
		setShowResults(true)
	}, [dataResponse])

	return (
		<Box w={'100%'} position={'relative'}>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					if (!ref.current?.value) return
				}}
				style={{ width: '100%' }}
			>
				<InputGroup borderRadius={3} variant={'filled'}>
					<InputLeftElement pointerEvents="none" children={loading ? <Spinner /> : <BsSearch />} />
					<Input
						placeholder="Search Game"
						borderRadius={20}
						variant={'filled'}
						ref={ref}
						value={inputValue}
						onChange={() => {
							setInputValue(ref?.current?.value || '')
							debouncedSearch(ref.current?.value!)
						}}
					/>
				</InputGroup>
			</form>
			<SearchResponse dataResponse={dataResponse} showResults={showResults} setShowResults={setShowResults} setInputValue={setInputValue} />
		</Box>
	)
}

export default SearchInput
