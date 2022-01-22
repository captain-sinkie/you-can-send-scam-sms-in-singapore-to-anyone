// packages
import React from 'react'
// chakra
import { Box, Icon, Text, GridItem, SimpleGrid } from '@chakra-ui/react'
// components
// icons
import { HiOutlineChevronLeft } from 'react-icons/hi'

export const Header = () => {
  return (
    <Box bgColor="gray.50" w="100%">
      <Box h="3px" textAlign="center">
        <Text fontSize="8" fontWeight="bold">
          10:30 PM
        </Text>
      </Box>
      <SimpleGrid p={1} columns={3} h="100%" mt={2}>
        <GridItem>
          <Icon as={HiOutlineChevronLeft} color="gray.800" cursor="pointer" />
        </GridItem>

        <GridItem textAlign="center" fontWeight="bold">
          OCBC
        </GridItem>

        <GridItem />
      </SimpleGrid>
    </Box>
  )
}
