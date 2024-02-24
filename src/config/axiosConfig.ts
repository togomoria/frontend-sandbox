import axios from 'axios'

import type { Arguments } from 'swr'

type Args = {
  arg: Arguments
}

export const axiosBase = axios.create({
  baseURL: 'http://127.0.0.1:8000',
})

export const get = (path: string) => axiosBase.get(path)

export const post = async (url: string, { arg }: Args) => {
  await axiosBase.post(url, arg)
}
