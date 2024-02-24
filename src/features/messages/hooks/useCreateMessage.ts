import { axiosBase } from 'src/config/axiosConfig'
import useSWRMutation from 'swr/mutation'

import type { AxiosResponse } from 'axios'
import type { FormValues } from 'src/App'

type MessageType = {
  data: string
}

export const useCreateMessage = () => {
  const handler = async (
    url: string,
    { arg }: { arg: FormValues }
  ): Promise<AxiosResponse<MessageType>> => {
    console.log(arg)
    const response = await axiosBase.post(url, arg)
    return response
  }
  const { data, trigger: askOpenAI } = useSWRMutation('/api/messages/', handler)

  const onSubmit = async (values: FormValues) => {
    console.log(values)
    await askOpenAI({
      input_text: values.input_text,
    })
  }

  return {
    onSubmit,
    message: data?.data.data || '',
  }
}
