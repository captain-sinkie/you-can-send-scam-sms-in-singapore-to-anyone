// packages
import React from 'react'
// chakra
import { chakra, Box, Button, Heading, HStack, Stack, Spacer, LightMode } from '@chakra-ui/react'
// components
import { InputField } from '../InputField'
import { ModeSwitcher } from './ModeSwitcher'

export const SMSForm = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    // handle submit logic here
    alert('submitted')
  }

  return (
    <chakra.form as="form" onSubmit={handleSubmit}>
      <HStack>
        <Heading as="h1" fontSize="3xl">
          Send a SMS
        </Heading>

        <Spacer />

        <ModeSwitcher />
      </HStack>
      <Stack spacing={6} pt={6}>
        <InputField label="Sender Name" type="text" />
        {/* <InputField label="Phone" type="number" /> */}
        <InputField label="Message" as="textarea" height="120px" pt={2} />
      </Stack>

      <Box mt={4}>
        <LightMode>
          <Button
            mb={{ base: '4', md: '0' }}
            w="full"
            type="submit"
            colorScheme="blue"
            size="lg"
            fontSize="md"
            fontWeight="bold"
          >
            Send SMS
          </Button>
        </LightMode>
      </Box>
    </chakra.form>
  )
}
