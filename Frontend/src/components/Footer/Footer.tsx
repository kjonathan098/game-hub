import { Box, Center, Stack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer>
			<Box bg={'whiteAlpha.800'} _dark={{ bg: 'blackAlpha.900' }} pt={3}>
				<Center>
					<Stack>
						<HStack>
							<Text> Made with</Text>
							<CiHeart />
							<Text>by Jonathan Kelman</Text>
						</HStack>
						<a href="https://www.linkedin.com/in/jonathan-kelman-204ba7103/" target="_blank">
							<Center>
								<FaLinkedin fontSize={'30px'} />
							</Center>
						</a>
					</Stack>
				</Center>
			</Box>
		</footer>
	)
}

export default Footer
