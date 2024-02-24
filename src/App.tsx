import React from 'react'

import { Box, Button, TextareaAutosize } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'

import { useCreateMessage } from './features/messages/hooks/useCreateMessage'

const schema = z.object({
  input_text: z.string(),
})

export type FormValues = z.infer<typeof schema>

export const App: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>()
  const { onSubmit, message } = useCreateMessage()

  return (
    <Box>
      <form>
        <Controller
          name="input_text"
          control={control}
          render={({ field }) => (
            <TextareaAutosize
              {...field}
              minRows={5}
              style={{
                width: '100%',
              }}
              name="input_text"
            />
          )}
        />
        <Box width="100%" display="flex">
          <Button
            variant="contained"
            style={{
              marginLeft: 'auto',
            }}
            onClick={handleSubmit(onSubmit)}
          >
            送信
          </Button>
        </Box>
      </form>
      {message && <p>{message}</p>}
    </Box>
  )
}
