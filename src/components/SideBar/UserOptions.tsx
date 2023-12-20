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
			<HStack>
				<CiGift style={{ fontSize: '25px' }} />
				<Button
					width={'100%'}
					colorScheme="whatsapp"
					onClick={() => {
						onOpen()
						setOpenDrawer('wishList')
					}}
				>
					Wish List
				</Button>
			</HStack>
			<HStack>
				<FiShoppingCart style={{ fontSize: '25px' }} />
				<Button
					width={'100%'}
					colorScheme="teal"
					onClick={() => {
						onOpen()
						setOpenDrawer('cartList')
					}}
				>
					Cart
				</Button>
			</HStack>
			<HStack>
				<CiUser style={{ fontSize: '25px' }} />
				<Button width={'100%'} colorScheme="cyan" onClick={() => ApiHander.signOut()}>
					Logout
				</Button>
			</HStack>
			<UserGameListDrawer isOpen={isOpen} onClose={onClose} openDrawer={openDrawer} />
		</Stack>
	)
}

export default UserOptions
