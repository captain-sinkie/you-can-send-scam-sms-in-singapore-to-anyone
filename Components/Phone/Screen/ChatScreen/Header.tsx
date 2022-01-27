// packages
import React from 'react'
// chakra
import { Box, Icon, Text, GridItem, SimpleGrid } from '@chakra-ui/react'
// context
import { setRouteDispatch, useMobileRouter } from '../../../../context/MobileRouter'
// components
import { CurrentTime } from '../../../CurrentTime'
// icons
import { HiOutlineChevronLeft } from 'react-icons/hi'

export const Header = () => {
  const { state, dispatch } = useMobileRouter()
  const { senderId } = state
  const redirectHome = () => {
    setRouteDispatch(dispatch, { route: 'home' })
  }

  return (
    <Box bgColor="gray.50" w="100%">
      <Box h="3px" textAlign="center">
        <Text fontSize="8" fontWeight="bold">
          <CurrentTime />
        </Text>
      </Box>
      <SimpleGrid p={1} columns={3} h="100%" mt={2}>
        <GridItem>
          <Icon
            as={HiOutlineChevronLeft}
            color="gray.800"
            cursor="pointer"
            onClick={redirectHome}
          />
        </GridItem>

        <GridItem textAlign="center" fontWeight="bold">
          {senderId}
        </GridItem>

        <GridItem />
      </SimpleGrid>
    </Box>
  )
}
