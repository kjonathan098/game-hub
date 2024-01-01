import { IPlatform } from '../../interfaces/games.interface'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface GamePlatformsProps {
	platforms: IPlatform[]
}

const GamePlatforms = ({ platforms }: GamePlatformsProps) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		mac: FaApple,
		ios: MdPhoneIphone,
		linux: FaLinux,
		android: FaAndroid,
		nintendo: SiNintendo,
		web: BsGlobe,
	}

	return (
		<HStack marginY={1}>
			{platforms.map((platform) => {
				return <Icon as={iconMap[platform.slug]} key={platform.id} color={'blue.500'} />
			})}
		</HStack>
	)
}

export default GamePlatforms
