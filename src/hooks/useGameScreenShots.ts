import { useEffect, useState } from 'react'
import { IGameScreenshots } from '../interfaces/games.interface'
import useData from './useDataFetch'

interface GalleryValues {
	src: string
	sizes?: string | string[] | undefined
	width: number
	height: number
	alt?: string | undefined
	key?: string | undefined
}

function useGameScreenShots(id: number) {
	const { data, loading, error } = useData<IGameScreenshots>(`/games/${id}/screenshots`)
	const [loadingImages, setLoadingImages] = useState(true)
	const [galleryArray, setGalleryArray] = useState<GalleryValues[]>([])

	useEffect(() => {
		if (!data.length) return

		const gallArr: GalleryValues[] = []
		data.map((item) => {
			const test: GalleryValues = { src: item.image, width: Math.floor(Math.random() * 2) + 1, height: Math.floor(Math.random() * 1) + 1 }
			gallArr.push(test)
		})
		setGalleryArray([...gallArr])

		setLoadingImages(false)
	}, [data])

	return { galleryArray, loading, error, loadingImages }
}
export default useGameScreenShots
