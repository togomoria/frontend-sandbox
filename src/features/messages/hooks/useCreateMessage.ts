import { post } from 'src/config/axiosConfig'
import useSWRMutation from 'swr/mutation'

import type { FormValues } from 'src/App'

type MessageType = {
  data: string
}

export const useCreateMessage = () => {
  const {
    data,
    trigger: askOpenAI,
    isMutating,
  } = useSWRMutation('/api/messages/', post<FormValues, MessageType>)

  const onSubmit = async (values: FormValues) => {
    await askOpenAI({
      input_text: values.input_text,
    })
  }

  return {
    onSubmit,
    message: data?.data.data || '',
    loading: isMutating,
  }
}
