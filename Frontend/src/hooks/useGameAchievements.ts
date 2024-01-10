import { useEffect, useState } from 'react'
import useDataFetch from './useDataFetch'
import useDataFetchTest from './useDataFetchTest'

type AchievementsResponse<T> = {
	count: number
	next: string | null
	previous: string | null
	results: T[]
}

const useGameAchievements = <T>(firstFetch: string, nextUrl?: string) => {
	const [url, setUrl] = useState<string>(nextUrl || firstFetch)
	console.log(url)

	const { data: achievements, error, loading } = useDataFetchTest<AchievementsResponse<T>>(url, {}, [url])

	// console.log(achievements)

	return { achievements, loading, error, setUrl }
}

export default useGameAchievements
