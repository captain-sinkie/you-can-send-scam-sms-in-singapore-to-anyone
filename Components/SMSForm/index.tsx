// packages
import React from 'react'
// chakra
import {
  chakra,
  Box,
  Button,
  Heading,
  HStack,
  Spacer,
  LightMode,
  useBoolean,
} from '@chakra-ui/react'
// components
import { ModeSwitcher } from './ModeSwitcher'
import { PreviewFields } from './PreviewFields'
import { LiveFields } from './LiveFields'
import { sendLiveSMSMessage, sendPreviewSMSMessage } from './sendMessage'

export const SMSForm = () => {
  const [live, setLive] = useBoolean(false)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    // handle submit logic here
    if (live) {
      sendLiveSMSMessage()
    } else {
      sendPreviewSMSMessage()
    }
  }

  return (
    <chakra.form as="form" onSubmit={handleSubmit}>
      <HStack>
        <Heading as="h1" fontSize="3xl">
          Send a SMS
        </Heading>

        <Spacer />

        <ModeSwitcher live={live} setLive={setLive} />
      </HStack>

      {live ? <LiveFields /> : <PreviewFields />}

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
