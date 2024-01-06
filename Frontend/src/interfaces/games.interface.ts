export interface IGamesQuery {
	genre: IGenre | null
	platform: IPlatform | null
	sortBy: ISortOption | null
	searchText: string | null
	page: number | null
	id: number | null
	endPoint?: string
}

export interface IGenre {
	id: number
	name: string
	image_background: string
}

export interface IPlatform {
	id: number
	name: string
	slug: string
}

export interface ISortOption {
	value: string
	label: string
}
export interface IGame {
	id: number
	name: string
	background_image: string
	parent_platforms: { platform: IPlatform }[]
	metacritic: number
	price?: number
}

export interface IGameDetails extends IGame {
	description: string
	background_image_additional: string
	website: string
	rating: string
	rating_top: number
	playtime: number
	achievements_count: number
	esrb_rating: { name: string }
	stores: { id: number; store: { name: string; domain: string; image_background: string } }[]
	tags: { name: string }[]
}

export interface IGameScreenshots {
	count: number
	image: string
}

export interface IUser {
	docId?: string
	displayName: string
	uid: string
	photoURL: string
	wishList: string[]
	cartList: string[]
}

export interface IAchievement {
	id: number
	name: string
	description: string
	image: string
	percent: string
}

export interface IReddit {
	id: number
	name: string
	text: string
	image: string
	username: string
	created: string
}

export type SearchQuery = {
	name: string
	id: number
}

export type IgameReviews = {
	// count: number
	// // next: string
	results: IGameReviewResults
}

export type IGameReviewResults = {
	id: number
	text: string
	rating: number
	user: {
		id: number
		username: string
		avatar: string | null
		full_name: string
	}
}

export type TUserField = 'wishList' | 'cartList'
