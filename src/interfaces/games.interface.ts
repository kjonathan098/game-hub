export interface GamesQuery {
	genre: Genre | null
	platform: Platform | null
	sortBy: SortOption | null
	searchText: string | null
	page: number | null
}

export interface Genre {
	id: number
	name: string
	image_background: string
}

export interface Platform {
	id: number
	name: string
	slug: string
}

export interface SortOption {
	value: string
	label: string
}
