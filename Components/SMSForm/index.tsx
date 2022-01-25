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
  Text,
  useBoolean,
} from '@chakra-ui/react'
// context
import { insertMessageDispatch, useApp } from '../../context/App'
import { setNewMessageContentDispatch, useNewMessage } from '../../context/newMessage'
// components
import { ModeSwitcher } from './ModeSwitcher'
import { PreviewFields } from './PreviewFields'
import { LiveFields } from './Fields/Live'
// methods
import { sendLiveSMSMessage } from './sendMessage'

export const SMSForm = () => {
  const [live, setLive] = useBoolean(false)
  const { dispatch } = useApp()
  const { dispatch: newMessageDispatch, state } = useNewMessage()
  const { content } = state

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    // handle submit logic here
    if (live) {
      sendLiveSMSMessage()
    } else {
      insertMessageDispatch(dispatch, content)
      setNewMessageContentDispatch(newMessageDispatch, '')
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
        {live && (
          <Text fontSize="sm" fontStyle="italic" mb={1}>
            Note: The target phone will receive this SMS.
          </Text>
        )}
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
            {live ? 'Send SMS' : 'Send SMS in Preview'}
          </Button>
        </LightMode>
      </Box>
    </chakra.form>
  )
}
