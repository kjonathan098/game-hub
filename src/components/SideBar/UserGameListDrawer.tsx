import { Drawer, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button } from '@chakra-ui/react'
import { useRef } from 'react'

import DrawerGeneric from '../../utils/DrawerGeneric'

interface Props {
	isOpen: boolean
	onClose: () => void
	openDrawer: string | null
}

const UserGameListDrawer = ({ isOpen, onClose, openDrawer }: Props) => {
	const btnRef = useRef<HTMLButtonElement>(null)

	return (
		<>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size={'md'}>
				<DrawerOverlay />
				<DrawerContent width={'50%'}>
					<DrawerCloseButton size={'xl'} />
					<DrawerHeader>Wish List</DrawerHeader>
					<DrawerGeneric openDrawer={openDrawer} />
					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme="blue">Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default UserGameListDrawer
