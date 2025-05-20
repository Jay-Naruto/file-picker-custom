import type { NextApiRequest, NextApiResponse } from 'next'
import { loginAndGetToken } from '@/api/auth'

const CONNECTION_ID = process.env.NEXT_PUBLIC_STACKAI_CONNECTION_ID as string
const BASE_URL = process.env.NEXT_PUBLIC_STACKAI_BASE_URL as string

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const token = await loginAndGetToken()
      const { parentId } = req.query
      console.log(token)
      
      const url = parentId
        ? `${BASE_URL}/connections/${CONNECTION_ID}/resources/children?resource_id=${parentId}`
        : `${BASE_URL}/connections/${CONNECTION_ID}/resources/children`
  
      const apiRes = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
  
      const text = await apiRes.text()
      console.log('[STACK API RAW RESPONSE]', text)
  
      try {
        const data = JSON.parse(text)
        res.status(apiRes.status).json(data)
      } catch (jsonError) {
        console.error('[JSON PARSE ERROR]', jsonError)
        res.status(apiRes.status).send(text)
      }
    } catch (error: any) {
      console.error('[PROXY ERROR]', error.message, error.stack)
      res.status(500).json({ error: error.message || 'Unknown error' })
    }
  }
  