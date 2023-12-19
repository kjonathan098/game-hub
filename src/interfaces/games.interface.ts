export interface IGamesQuery {
	genre: IGenre | null
	platform: IPlatform | null
	sortBy: ISortOption | null
	searchText: string | null
	page: number | null
	id: number | null
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

export type TUserField = 'wishList' | 'cartList'
