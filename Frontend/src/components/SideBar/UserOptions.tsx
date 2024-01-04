import { Button, HStack, Image, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { authContext } from '../../context/authProvider'
import { useContext, useState } from 'react'
import { CiGift, CiUser } from 'react-icons/ci'
import { FiShoppingCart } from 'react-icons/fi'
import { ApiHander } from '../../fireBase/fireBase.config'

import UserGameListDrawer from './UserGameListDrawer'

const UserOptions = () => {
	const { user } = useContext(authContext)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [openDrawer, setOpenDrawer] = useState<'wishList' | 'cartList' | null>(null)

	if (!user) return
	return (
		<Stack>
			<Text fontSize={'xl'} fontWeight={'bold'}>
				Welcome Back!
			</Text>
			<HStack>
				<Image src={user.photoURL} alt={'profile pic'} rounded={'full'} width={'25px'} height={'25px'} />
				<Text width={'100%'} textAlign={'center'}>
					{user.displayName}
				</Text>
			</HStack>
			<Button
				width={'100%'}
				colorScheme="whatsapp"
				onClick={() => {
					onOpen()
					setOpenDrawer('wishList')
				}}
				leftIcon={<CiGift style={{ fontSize: '25px' }} />}
			>
				Wish List
			</Button>
			<Button
				width={'100%'}
				colorScheme="teal"
				onClick={() => {
					onOpen()
					setOpenDrawer('cartList')
				}}
				leftIcon={<FiShoppingCart style={{ fontSize: '25px' }} />}
			>
				Cart
			</Button>
			<Button width={'100%'} colorScheme="cyan" onClick={() => ApiHander.signOut()} leftIcon={<CiUser style={{ fontSize: '25px' }} />}>
				Logout
			</Button>
			<UserGameListDrawer isOpen={isOpen} onClose={onClose} openDrawer={openDrawer} />
		</Stack>
	)
}

export default UserOptions
