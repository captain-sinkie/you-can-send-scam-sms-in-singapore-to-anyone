// packages
import React from 'react'
// chakra
import { Stack, Divider, Text } from '@chakra-ui/react'
// components
import { SMSServiceProviderSelect } from './SMSServiceProviderSelect'
import { InputField } from '../../../InputField'

export const LiveFields = () => {
  return (
    <Stack spacing={6} pt={6}>
      <InputField label="Sender Name" type="text" />
      <InputField label="Recipient Phone Number" type="text" />
      <InputField label="Message" as="textarea" height="120px" pt={2} />

      <Divider />
      <Text fontWeight="semibold">SMS Provider Details</Text>

      <SMSServiceProviderSelect />
      <InputField label="API Username" type="text" />
      <InputField label="API Secret Key" type="text" />
    </Stack>
  )
}
