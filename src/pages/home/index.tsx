import { Button } from '@douyinfe/semi-ui'
import { useEffect } from 'react'

export function HomePage() {
  useEffect(() => {
    console.log('HomePage')
  }, [])
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-text-3 shadow">Home Page</h1>
      <div className="flex-1">
        <Button type="primary">Primary</Button>
      </div>
    </div>
  )
}
