import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SpeedInsights } from "@vercel/speed-insights/next"
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <SpeedInsights/>
    </QueryClientProvider>
  )
}
