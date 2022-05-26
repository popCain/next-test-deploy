// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(process.env.NODE_ENV)
  console.log(process.env.GREET)
  console.log(process.env.SECRETS)
  res.status(200).json({ name: 'John Doe' })
}
