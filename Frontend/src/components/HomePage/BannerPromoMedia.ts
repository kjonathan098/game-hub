import { IGame } from '../../interfaces/games.interface'
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
import lordsFallen from '../../assets/HomePageHolidaySpecial/lords_fallen.avif'
import starWars from '../../assets/HomePageHolidaySpecial/starwars.avif'
import deadSpace from '../../assets/HomePageHolidaySpecial/deadspace.avif'
import madden from '../../assets/HomePageHolidaySpecial/madden24.avif'
import mortalKombat from '../../assets/HomePageHolidaySpecial/mortal_kombat.avif'
import ratchetClank from '../../assets/HomePageHolidaySpecial/ratchet_clank.avif'
import roboCop from '../../assets/HomePageHolidaySpecial/robocop.avif'
import spiderman from '../../assets/HomePageHolidaySpecial/spiderman.avif'
import spidermanMorales from '../../assets/HomePageHolidaySpecial/spiderman_morales.avif'
import witchFire from '../../assets/HomePageHolidaySpecial/witchfire.avif'
import lastOfUs from '../../assets/HomePageHolidaySpecial/the_last_of_us.avif'
import fortNight from '../../assets/TopSeller/Fortnight.avif'
import rocketLeague from '../../assets/TopSeller/rocketLeague.avif'
import saintRow from '../../assets/TopSeller/saintsRow.avif'
import valorant from '../../assets/TopSeller/valorant.avif'
import fortNightLogo from '../../assets/TopSeller/logos/fortnight.webp'
import rocketLogo from '../../assets/TopSeller/logos/rocketLeagueLogo.png'
import saintRowLogo from '../../assets/TopSeller/logos/saintRowlogo.avif'
import valorantLogo from '../../assets/TopSeller/logos/valorantLogo.avif'
import spidermanMoralesLogo from '../../assets/TopSeller/logos/marvelLogo.webp'

export interface BannerMedia extends IGame {
	titleLogo: string
	background: string
	description?: string
	ratings?: { id: number; title: string; count: number; percent: number }[]
	youtubeId?: string
}

export const topSellers: BannerMedia[] = [
	{
		name: 'Fortnite Battle Royale',
		titleLogo: fortNightLogo,
		background: fortNight,
		id: 47137,
		description: `Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games`,
		background_image: 'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
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
			{
				platform: {
					id: 8,
					name: 'Android',
					slug: 'android',
				},
			},
			{
				platform: {
					id: 5,
					name: 'Apple Macintosh',
					slug: 'mac',
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
		youtubeId: 'GNC-8lQsvrY',
	},
	{
		name: 'Rocket League',
		titleLogo: rocketLogo,
		background: rocketLeague,
		id: 3272,
		description: 'Uncover the truth behind the outbreak and discover who or what you are.',
		background_image: 'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
		price: 30,
		metacritic: 3.37,
		ratings: [
			{
				id: 4,
				title: 'recommended',
				count: 1515,
				percent: 54.75,
			},
			{
				id: 5,
				title: 'exceptional',
				count: 690,
				percent: 24.94,
			},
			{
				id: 3,
				title: 'meh',
				count: 419,
				percent: 15.14,
			},
			{
				id: 1,
				title: 'skip',
				count: 143,
				percent: 5.17,
			},
		],
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
					id: 5,
					name: 'Apple Macintosh',
					slug: 'mac',
				},
			},
			{
				platform: {
					id: 6,
					name: 'Linux',
					slug: 'linux',
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
		youtubeId: 'HX1u73kJVyE',
	},
	{
		name: 'Saints Row: The Third',
		titleLogo: saintRowLogo,
		background: saintRow,
		id: 4386,
		description: `Welcome to Santo Ileso, a vibrant fictional city in the American Southwest. In a world rife with crime, a group of young friends embark on their own criminal venture, as they rise to the top in their bid to become Self Made.`,
		background_image: 'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
		price: 30,
		metacritic: 3.37,
		ratings: [
			{
				id: 4,
				title: 'recommended',
				count: 1103,
				percent: 55.99,
			},
			{
				id: 5,
				title: 'exceptional',
				count: 473,
				percent: 24.01,
			},
			{
				id: 3,
				title: 'meh',
				count: 303,
				percent: 15.38,
			},
			{
				id: 1,
				title: 'skip',
				count: 91,
				percent: 4.62,
			},
		],
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
					id: 6,
					name: 'Linux',
					slug: 'linux',
				},
			},
		],
		youtubeId: 'LUH8VHDikyg',
	},
	{
		name: 'Valorant',
		titleLogo: valorantLogo,
		background: valorant,
		id: 415171,
		description: `VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.`,
		background_image: 'https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg',
		price: 30,
		metacritic: 3.37,
		ratings: [
			{
				id: 4,
				title: 'recommended',
				count: 204,
				percent: 47.33,
			},
			{
				id: 3,
				title: 'meh',
				count: 126,
				percent: 29.23,
			},
			{
				id: 5,
				title: 'exceptional',
				count: 53,
				percent: 12.3,
			},
			{
				id: 1,
				title: 'skip',
				count: 48,
				percent: 11.14,
			},
		],

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
		],
		youtubeId: 'e_E9W2vsRbQ',
	},
	{
		name: "Marvel's Spider-Man: Miles Morales",
		titleLogo: spidermanMoralesLogo,
		background: spidermanMorales,
		id: 452634,
		description: 'Uncover the truth behind the outbreak and discover who or what you are.',
		background_image: 'https://media.rawg.io/media/games/048/048b46cdc66cbc7e235e1f359c2a77ec.jpg',
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
		],
		youtubeId: 'NTunTURbyUU',
	},
]

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
		background: starWars,
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
	{
		name: 'Dead Space',
		titleLogo: deadIslanTittle,
		background: deadSpace,
		id: 638654,
		description: 'Uncover the truth behind the outbreak and discover who or what you are.',
		background_image: 'https://media.rawg.io/media/games/ea6/ea6a1382b15d749e15fdfbf0aece7689.jpg',
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
		name: 'Madden NFL 24',
		titleLogo: deadIslanTittle,
		background: madden,
		id: 962679,
		description: 'Uncover the truth behind the outbreak and discover who or what you are.',
		background_image: 'https://media.rawg.io/media/games/5ec/5ecee9f44d6736412b15f0b01b0619a9.jpg',
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
		name: 'Mortal Kombat 1',
		titleLogo: deadIslanTittle,
		background: mortalKombat,
		id: 793647,
		description: 'Uncover the truth behind the outbreak and discover who or what you are.',
		background_image: 'https://media.rawg.io/media/games/155/155087d7b9c1225cda0ab9e586b6374d.jpg',
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
					id: 7,
					name: 'Nintendo',
					slug: 'nintendo',
				},
			},
		],
	},
	{
		name: 'Ratchet & Clank: Rift Apart',
		titleLogo: deadIslanTittle,
		background: ratchetClank,
		id: 727315,
		description: 'Uncover the truth behind the outbreak and discover who or what you are.',
		background_image: 'https://media.rawg.io/media/games/ccf/ccfd3fd488a8ed61145a3da96c080131.jpg',
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
		],
	},
	{
		name: 'RoboCop: Rogue City',
		titleLogo: deadIslanTittle,
		background: roboCop,
		id: 631942,
		description: 'Uncover the truth behind the outbreak and discover who or what you are.',
		background_image: 'https://media.rawg.io/media/games/2ae/2ae4150474a27f90595c9092917ab2d3.jpg',
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
		name: "Marvel's Spider-Man",
		titleLogo: deadIslanTittle,
		background: spiderman,
		id: 58134,
		description: 'Uncover the truth behind the outbreak and discover who or what you are.',
		background_image: 'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
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
		],
	},
	{
		name: 'The Last of Us Part I',
		titleLogo: deadIslanTittle,
		background: lastOfUs,
		id: 799265,
		description: 'Uncover the truth behind the outbreak and discover who or what you are.',
		background_image: 'https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg',
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
		],
	},
	{
		name: 'Witchfire',
		titleLogo: deadIslanTittle,
		background: witchFire,
		id: 50739,
		description: 'Uncover the truth behind the outbreak and discover who or what you are.',
		background_image: 'https://media.rawg.io/media/games/bd0/bd0e96314c71b5b0d192f23c8e8ab07e.jpg',
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
		name: 'EA SPORTS FC 24',
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
		name: 'The Lord of the Rings: Return to Moria',
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
