import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { FaGamepad } from 'react-icons/fa'
import { RiGameFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

interface Props {
	onClose?: () => void
}

const Nav = ({ onClose }: Props) => {
	const nav = useNavigate()
	return (
		<Stack>
			<Button
				onClick={() => {
					nav('/')
					if (onClose) onClose()
				}}
				rightIcon={<FaGamepad />}
			>
				Home
			</Button>
			<Button
				onClick={() => {
					nav('/games')
					if (onClose) onClose()
				}}
				rightIcon={<RiGameFill />}
			>
				Browse All Games
			</Button>
		</Stack>
	)
}

export default Nav
