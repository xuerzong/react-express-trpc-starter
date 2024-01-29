import { createTRPCProxyClient, httpLink } from '@trpc/client'
import { AppRouter } from '@server/routers'

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpLink({
      url: 'http://localhost:8888/trpc',
    }),
  ],
})

export default trpc
