// packages
import React from 'react'
// chakra
import { chakra, Box, Button, Stack, LightMode } from '@chakra-ui/react'
// components
import { InputField } from '../InputField'

export const SMSForm = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    // handle submit logic here
    alert('submitted')
  }

  return (
    <chakra.form as="form" pt={8} pb={3} onSubmit={handleSubmit}>
      <Stack spacing={6}>
        <InputField label="Sender Name" type="text" />
        <InputField label="Phone" type="number" />
        <InputField label="Message" as="textarea" height="120px" pt={2} />
      </Stack>

      <Box mt={8}>
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
