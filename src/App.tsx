import { Box, Button, TextField, TextareaAutosize } from '@mui/material'
import axios from 'axios'
import React from 'react'

export const App: React.FC = () => {
  const [message, setMessage] = React.useState<string>('')
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    axios.post('http://localhost:3000/api/messages', {
      message,
    })
  }

  return (
    <Box>
      <form>
        <TextareaAutosize
          minRows={5}
          style={{
            width: '100%',
          }}
          onChange={e => setMessage(e.target.value)}
        />
        <Box width="100%" display="flex">
          <Button
            variant="contained"
            style={{
              marginLeft: 'auto',
            }}
          >
            送信
          </Button>
        </Box>
      </form>
    </Box>
  )
}
