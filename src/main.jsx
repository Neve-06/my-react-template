import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router'
import router from './router.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      staleTime: 1000 * 60 * 5, //
      cacheTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
      retry: false,
    },
    mutations: {

    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </StrictMode>,
)
