import axios from 'axios'

import type { AxiosResponse } from 'axios'

type Args<T> = {
  arg: T
}

export const axiosBase = axios.create({
  baseURL: 'http://127.0.0.1:8000',
})

export const post = async <T, S>(
  url: string,
  { arg }: Args<T>
): Promise<AxiosResponse<S>> => {
  const response = await axiosBase.post(url, arg)
  return response
}
