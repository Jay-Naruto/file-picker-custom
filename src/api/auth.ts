const SUPABASE_AUTH_URL = "https://sb.stack-ai.com"
const ANON_KEY = process.env.NEXT_PUBLIC_STACKAI_ANON_KEY as string

export async function loginAndGetToken(): Promise<string> {
  const email = process.env.NEXT_PUBLIC_STACKAI_EMAIL as string
  const password = process.env.NEXT_PUBLIC_STACKAI_PASSWORD as string

  const res = await fetch(`${SUPABASE_AUTH_URL}/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Apikey: ANON_KEY,
    },
    body: JSON.stringify({
      email,
      password,
      gotrue_meta_security: {},
    }),
  })

  if (!res.ok) throw new Error('Login failed')

  const data = await res.json()
  return data.access_token as string
}
