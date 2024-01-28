import { publicProcedure, router } from '@server/libs/trpc'
import { z } from 'zod'

const urlRouter = router({
  list: publicProcedure.query(() => {
    return [{ name: 'xuerzong' }]
  }),
  update: publicProcedure
    .input(
      z
        .object({
          preUrl: z.string(),
          name: z.string(),
        })
        .nullable()
    )
    .mutation(async ({ input }) => {
      return input
    }),
  create: publicProcedure
    .input(
      z.object({
        preUrl: z.string(),
        name: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return { name: input.name }
    })
})

export default urlRouter