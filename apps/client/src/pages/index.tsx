import { useEffect } from 'react'
import trpc from '@/libs/trpc'

const Page = () => {
  useEffect(() => {
    trpc.base.list.query().then(console.log)
  }, [])

  return (
    <div>
      <div>loading...</div>
    </div>
  )
}

export default Page
