// packages
import React from 'react'
// chakra
import { Stack } from '@chakra-ui/react'
// components
import { InputField } from '../InputField'

export const PreviewFields = () => {
  return (
    <Stack spacing={6} pt={6}>
      <InputField label="Sender Name" type="text" />
      {/* <InputField label="Phone" type="number" /> */}
      <InputField label="Message" as="textarea" height="120px" pt={2} />
    </Stack>
  )
}
