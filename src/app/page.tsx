'use client'
// import Stories from '@/components/stories'
import StoriesWithZuck from '@/components/stories_with_zuck/page'

export default function Home() {
  return (
    <main className="min-h-screen  pt-4">
      <div className="h-full bg-white">
        {/* <Stories /> */}
        <StoriesWithZuck />
      </div>
    </main>
  )
}
