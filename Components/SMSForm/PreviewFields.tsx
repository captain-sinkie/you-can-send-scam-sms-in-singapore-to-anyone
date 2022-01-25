// packages
import React from 'react'
// chakra
import { Stack } from '@chakra-ui/react'
// context
import {
  setNewMessageContentDispatch,
  setNewMessageSenderIdDispatch,
  useNewMessage,
} from '../../context/newMessage'
// components
import { InputField } from '../InputField'

export const PreviewFields = () => {
  const { state, dispatch } = useNewMessage()

  const updateContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessageContentDispatch(dispatch, e.target.value)
  }

  const updateSenderId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessageSenderIdDispatch(dispatch, e.target.value)
  }

  return (
    <Stack spacing={6} pt={6}>
      <InputField
        label="Sender Name"
        type="text"
        value={state.senderId}
        onChange={updateSenderId}
      />
      {/* <InputField label="Phone" type="number" /> */}
      <InputField
        label="Message"
        as="textarea"
        height="120px"
        pt={2}
        value={state.content}
        onChange={updateContent}
      />
    </Stack>
  )
}
