import { useEffect } from 'react'

export function HomePage() {
  useEffect(() => {
    console.log('HomePage')
  }, [])
  return (
    <div className="h-full flex flex-col">
      <h1>Home Page</h1>
      <div className="flex-1"></div>
    </div>
  )
}
