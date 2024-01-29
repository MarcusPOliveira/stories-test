'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { useRouter } from 'next/navigation'

import { USER_STORIES_MOCK } from '@/mocks'

import CircleWrapper from './circle_wrapper'
import StorySliderTest, { Story } from './story_slider_test'
import 'swiper/css'

export interface UserStories {
  id: string
  username: string
  profileImage: string
  stories: Story[]
}

const Stories = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [usersStories, setUsersStories] = useState<UserStories[]>([])
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null)

  const router = useRouter()

  const handleOpenAddStory = () => {
    router.push('/add_story')
  }

  const openStory = (id: string) => {
    setIsOpen(true)
    setSelectedStoryId(id)
  }

  const getStoriesList = () => {
    const usersStories = USER_STORIES_MOCK.map((user: UserStories) => ({
      id: user.id,
      username: user.username,
      profileImage: user.profileImage,
      stories: user.stories.map((story: Story) => ({
        id: story.id,
        title: story.title,
        url: story.url,
        duration: story.duration,
        createdOn: story.createdOn,
        isViewed: story.isViewed,

        header: {
          heading: story.header.heading,
          profileImage: story.header.profileImage,
        },
      })),
    }))

    setUsersStories(usersStories)
  }

  // console.log('usersStories', usersStories)

  useEffect(() => {
    getStoriesList()
  }, [])

  return (
    // <div className="flex flex-row w-auto">
    <div>
      {/* <CircleWrapper
        isAddingStory
        id={`add_story`}
        username={`Adicionar`}
        openStory={handleOpenAddStory}
        key={`add_story`}
      /> */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        scrollbar={{ draggable: true }}
        breakpoints={{
          340: {
            slidesPerView: 4.2,
          },
          992: {
            slidesPerView: 7.2,
          },
          1200: {
            slidesPerView: 10.2,
          },
        }}
        className="mb-5 !px-4 flex-row"
      >
        <CircleWrapper
          isAddingStory
          id={`add_story`}
          username={`Adicionar`}
          openStory={handleOpenAddStory}
          key={`add_story`}
        />
        {usersStories.map((user_story, index) => (
          <SwiperSlide key={user_story.id}>
            <CircleWrapper
              id={user_story.id}
              username={user_story.username}
              profileImage={user_story.profileImage}
              openStory={() => openStory(index.toString())}
              isVisualized={user_story.stories.some((story) => story.isViewed)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <StorySliderTest
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        usersStories={usersStories}
        selectedStoryId={selectedStoryId}
      />
    </div>
  )
}

export default Stories
