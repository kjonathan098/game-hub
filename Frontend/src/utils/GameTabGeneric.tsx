import { Box, Button, Center, HStack, Stack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import BlendedImage from './BlendedImage'
import { IGameDetails } from '../interfaces/games.interface'

interface Props {
	gameDetails: IGameDetails
	children: ReactNode
	setUrl: React.Dispatch<React.SetStateAction<string>>
	nextLink?: string | null
	prevLink?: string | null
}

const GameTabGeneric = ({ gameDetails, children, nextLink, prevLink, setUrl }: Props) => {
	return (
		<Box position={'relative'} h={'500px'}>
			<BlendedImage img={gameDetails.background_image_additional} />
			<Box position={'relative'} dir="column" maxH={{ base: '400px', lg: '500px' }} overflow={'scroll'} minH={{ base: '300px', lg: '500px' }} mb={2}>
				<Center>
					<Stack spacing={'4'} h={'500px'} overflow={'scroll'} direction={{ base: 'column', lg: 'column' }}>
						{children}
					</Stack>
				</Center>
			</Box>
			{nextLink || prevLink ? (
				<HStack justifyContent={'center'}>
					<Button
						isDisabled={!prevLink}
						onClick={() => {
							if (!prevLink) return
							setUrl(prevLink)
						}}
					>
						Prev
					</Button>
					<Button
						isDisabled={!nextLink}
						onClick={() => {
							if (!nextLink) return
							setUrl(nextLink)
						}}
					>
						Next
					</Button>
				</HStack>
			) : null}
		</Box>
	)
}

export default GameTabGeneric
