import fifaBkg from '../../assets/HomePageCarouselPromo/fifa24.avif'
import alanWake from '../../assets/HomePageCarouselPromo/alanWake.avif'
import lotr from '../../assets/HomePageCarouselPromo/lotr.avif'
import assasins from '../../assets/HomePageCarouselPromo/mirage.avif'
import deadIsland from '../../assets/HomePageCarouselPromo/deadIsland.avif'
import fifaTittle from '../../assets/HomePageCarouselPromo/fifa_title.png'
import alanWakeTitle from '../../assets/HomePageCarouselPromo/ala_wake_title.png'
import deadIslanTittle from '../../assets/HomePageCarouselPromo/dead_island_title.png'
import lotrTittle from '../../assets/HomePageCarouselPromo/lotr_title.png'
import assasinTittle from '../../assets/HomePageCarouselPromo/assasin_creed_title.png'
import harryPotter from '../../assets/HomePageHolidaySpecial/hogwarts_legacy.avif'
import cyberPunk from '../../assets/HomePageHolidaySpecial/cyber_punk.avif'
import gtaV from '../../assets/HomePageHolidaySpecial/gta_v.avif'
import kingdomHears from '../../assets/HomePageHolidaySpecial/kingdom_hearts.avif'
import lordsFallen from '../../assets/HomePageHolidaySpecial/lords_fallen.avif'
import starwars from '../../assets/HomePageHolidaySpecial/starwars.avif'
import { IGame } from '../../interfaces/games.interface'

interface BannerMedia extends IGame {
	titleLogo: string
	background: string
	description?: string
}
export const holidaySpecialMedia: BannerMedia[] = [
	{
		name: 'Hogwarts Legacy',
		titleLogo: alanWakeTitle,
		background: harryPotter,
		background_image: 'https://media.rawg.io/media/games/044/044b2ee023930ca138deda151f40c18c.jpg',
		id: 906547,
		price: 30,
		metacritic: 4.49,
		parent_platforms: [
			{
				platform: {
					id: 1,
					name: 'PC',
					slug: 'pc',
				},
			},
			{
				platform: {
					id: 2,
					name: 'PlayStation',
					slug: 'playstation',
				},
			},
			{
				platform: {
					id: 3,
					name: 'Xbox',
					slug: 'xbox',
				},
			},
			{
				platform: {
					id: 7,
					name: 'Nintendo',
					slug: 'nintendo',
				},
			},
		],
	},
	{
		name: 'Cyberpunk 2077',
		titleLogo: fifaTittle,
		background: cyberPunk,
		id: 41494,
		description: 'EA SPORTS FC™ 24 welcomes you to The World’s Game: the most true-to-football experience ever.',
		background_image: 'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
		price: 30,
		metacritic: 3.3,
		parent_platforms: [
			{
				platform: {
					id: 1,
					name: 'PC',
					slug: 'pc',
				},
			},
			{
				platform: {
					id: 2,
					name: 'PlayStation',
					slug: 'playstation',
				},
			},
			{
				platform: {
					id: 3,
					name: 'Xbox',
					slug: 'xbox',
				},
			},
		],
	},
	{
		name: 'Grand Theft Auto V',
		titleLogo: lotrTittle,
		background: gtaV,
		id: 3498,
		description: 'Adventure alone or band together on a quest to reclaim the ancient Kingdom of Moria.',
		background_image: 'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
		price: 30,
		metacritic: 0,
		parent_platforms: [
			{
				platform: {
					id: 1,
					name: 'PC',
					slug: 'pc',
				},
			},
			{
				platform: {
					id: 2,
					name: 'PlayStation',
					slug: 'playstation',
				},
			},
			{
				platform: {
					id: 3,
					name: 'Xbox',
					slug: 'xbox',
				},
			},
		],
	},
	{
		name: 'Lords of the Fallen',
		titleLogo: assasinTittle,
		background: lordsFallen,
		id: 840776,
		description: 'Experience the story of Basim, a cunning thief seeking answers and justice as he navigates the streets of ninth-century Baghdad.',
		background_image: 'https://media.rawg.io/media/games/12c/12c2fd04262732cb5e2e6ff378e1cc2d.jpg',
		price: 30,
		metacritic: 3.37,
		parent_platforms: [
			{
				platform: {
					id: 1,
					name: 'PC',
					slug: 'pc',
				},
			},
			{
				platform: {
					id: 2,
					name: 'PlayStation',
					slug: 'playstation',
				},
			},
			{
				platform: {
					id: 3,
					name: 'Xbox',
					slug: 'xbox',
				},
			},
		],
	},
	{
		name: 'Star Wars Jedi: Survivor',
		titleLogo: deadIslanTittle,
		background: starwars,
		id: 793647,
		description: 'Uncover the truth behind the outbreak and discover who or what you are.',
		background_image: 'https://media.rawg.io/media/games/3e4/3e43e29ae126ef951842393f5ff7f33a.jpg',
		price: 30,
		metacritic: 3.37,
		parent_platforms: [
			{
				platform: {
					id: 1,
					name: 'PC',
					slug: 'pc',
				},
			},
			{
				platform: {
					id: 2,
					name: 'PlayStation',
					slug: 'playstation',
				},
			},
			{
				platform: {
					id: 3,
					name: 'Xbox',
					slug: 'xbox',
				},
			},
		],
	},
]
export const bannerMedia: BannerMedia[] = [
	{
		name: 'Alan Wake 2',
		titleLogo: alanWakeTitle,
		background: alanWake,
		background_image: 'https://media.rawg.io/media/games/5b9/5b963d7633cd640fa2dbc4069d1c6377.jpg',
		id: 580972,
		description: 'Buy Alan Wake 2 and get Alan Wake Remastered, our gift to you. Offer ends January 10, 2024, see page for details.',
		price: 30,
		metacritic: 4.49,
		parent_platforms: [
			{
				platform: {
					id: 1,
					name: 'PC',
					slug: 'pc',
				},
			},
			{
				platform: {
					id: 2,
					name: 'PlayStation',
					slug: 'playstation',
				},
			},
			{
				platform: {
					id: 3,
					name: 'Xbox',
					slug: 'xbox',
				},
			},
		],
	},
	{
		name: 'fifa 24',
		titleLogo: fifaTittle,
		background: fifaBkg,
		id: 963218,
		description: 'EA SPORTS FC™ 24 welcomes you to The World’s Game: the most true-to-football experience ever.',
		background_image: 'https://media.rawg.io/media/games/104/10404407d458d90f4559a1f587c2650a.jpg',
		price: 30,
		metacritic: 3.3,
		parent_platforms: [
			{
				platform: {
					id: 1,
					name: 'PC',
					slug: 'pc',
				},
			},
			{
				platform: {
					id: 2,
					name: 'PlayStation',
					slug: 'playstation',
				},
			},
			{
				platform: {
					id: 3,
					name: 'Xbox',
					slug: 'xbox',
				},
			},
			{
				platform: {
					id: 7,
					name: 'Nintendo',
					slug: 'nintendo',
				},
			},
		],
	},
	{
		name: 'Lotr',
		titleLogo: lotrTittle,
		background: lotr,
		id: 865101,
		description: 'Adventure alone or band together on a quest to reclaim the ancient Kingdom of Moria.',
		background_image: 'https://media.rawg.io/media/screenshots/f0d/f0dd69caad912e5fcc0c29fa953b412e.jpg',
		price: 30,
		metacritic: 0,
		parent_platforms: [
			{
				platform: {
					id: 1,
					name: 'PC',
					slug: 'pc',
				},
			},
		],
	},
	{
		name: 'Assasins Creed',
		titleLogo: assasinTittle,
		background: assasins,
		id: 845261,
		description: 'Experience the story of Basim, a cunning thief seeking answers and justice as he navigates the streets of ninth-century Baghdad.',
		background_image: 'https://media.rawg.io/media/games/fbd/fbd0128013b7965904be571e75fb30c0.jpg',
		price: 30,
		metacritic: 3.37,
		parent_platforms: [
			{
				platform: {
					id: 1,
					name: 'PC',
					slug: 'pc',
				},
			},
			{
				platform: {
					id: 2,
					name: 'PlayStation',
					slug: 'playstation',
				},
			},
			{
				platform: {
					id: 3,
					name: 'Xbox',
					slug: 'xbox',
				},
			},
			{
				platform: {
					id: 4,
					name: 'iOS',
					slug: 'ios',
				},
			},
		],
	},
	{
		name: 'Dead Island',
		titleLogo: deadIslanTittle,
		background: deadIsland,
		id: 42857,
		description: 'Uncover the truth behind the outbreak and discover who or what you are.',
		background_image: 'https://media.rawg.io/media/games/9cd/9cd22ae5aebd922f96f2bc50efab83df.jpg',
		price: 30,
		metacritic: 3.37,
		parent_platforms: [
			{
				platform: {
					id: 1,
					name: 'PC',
					slug: 'pc',
				},
			},
			{
				platform: {
					id: 2,
					name: 'PlayStation',
					slug: 'playstation',
				},
			},
			{
				platform: {
					id: 3,
					name: 'Xbox',
					slug: 'xbox',
				},
			},
		],
	},
]
