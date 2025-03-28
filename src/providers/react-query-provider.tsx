"use client"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime : 200
    }
  }
})
export function ReactQueryProvider({ children }: { children: ReactNode }) {

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}