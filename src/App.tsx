import React from 'react'

import {
  Box,
  Button,
  CircularProgress,
  TextareaAutosize,
  Typography,
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'

import { useCreateMessage } from './features/messages/hooks/useCreateMessage'

const schema = z.object({
  input_text: z.string(),
})

export type FormValues = z.infer<typeof schema>

export const App: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>()
  const { onSubmit, message, loading } = useCreateMessage()

  return (
    <Box
      height="100vh"
      width="50vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      margin="0 auto"
    >
      <Typography variant="h6" gutterBottom marginRight="auto">
        テキスト要約くん
      </Typography>
      <form
        style={{
          width: '100%',
        }}
      >
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
              placeholder="要約するテキストを入力してください"
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
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            送信
          </Button>
        </Box>
      </form>
      <Typography variant="subtitle1" marginRight="auto">
        要約結果
      </Typography>
      {loading ? (
        <Box marginTop="20px">
          <CircularProgress />
        </Box>
      ) : (
        message && (
          <Typography
            variant="caption"
            whiteSpace="pre-wrap"
            marginRight="auto"
          >
            {message}
          </Typography>
        )
      )}
    </Box>
  )
}
