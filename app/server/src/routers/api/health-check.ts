import { Router } from 'express'
import { HttpStatus } from '@ninepielabs/constants'

const router = Router()

router.get('/', (_, res) => {
  res.status(HttpStatus.OK).send('ok')
})

export default router