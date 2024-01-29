import React, { useEffect, useRef, useState } from 'react'
import Stories from 'react-insta-stories'
import { FiLoader } from 'react-icons/fi'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { UserStories } from '.'

import { BaseModal } from '../base_modal'
import 'swiper/css'

export interface Story {
  id: string
  title: string
  url: string
  createdOn: string
  isViewed: boolean
  duration: number
  header: {
    heading: string
    profileImage: string
  }
}

interface StorySliderProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  usersStories: UserStories[]
  selectedStoryId: string | null
}

const StorySliderTest = ({
  isOpen,
  setIsOpen,
  usersStories,
  selectedStoryId,
}: StorySliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [swiperMounted, setSwiperMounted] = useState(false)

  const swiperRef = useRef<SwiperClass | null>(null)

  // Transita de stories de um usuário para um próximo usuário
  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex)
    console.log('currentSlide', currentSlide)
    console.log('swiper', swiper.activeIndex)
  }

  // Quando tem apenas 1 story
  // const handleStoryEnd = () => {
  //   if (currentSlide === usersStories.length - 1) {
  //     setIsOpen(false)
  //     setCurrentSlide(0)
  //   }
  // }

  // Quando tem mais de 1 story
  const handleAllStoriesEnd = () => {
    if (currentSlide < usersStories.length - 1) {
      setCurrentSlide(currentSlide + 1) // Avança para o próximo slide

      if (swiperRef.current) {
        swiperRef.current.slideTo(currentSlide + 1) // Atualizar o índice do Swiper
        swiperRef.current.destroy(false, false)
      }
    } else {
      setIsOpen(false)
      setCurrentSlide(0)
    }
  }

  useEffect(() => {
    if (swiperRef.current && selectedStoryId !== undefined) {
      setCurrentSlide(Number(selectedStoryId))
      swiperRef.current.slideTo(Number(selectedStoryId))
    }
  }, [selectedStoryId, swiperRef])

  useEffect(() => {
    if (isOpen && swiperRef.current && !swiperMounted) {
      setSwiperMounted(true)
    }
  }, [isOpen, swiperRef, swiperMounted])

  // useEffect(() => {
  //   if (swiperMounted && swiperRef.current) {
  //     swiperRef.current.update() // Atualiza o Swiper quando o modal é aberto
  //   }
  // }, [swiperMounted, swiperRef])

  useEffect(() => {
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(false, false)
      }
    }
  }, [])

  console.log('selectedStoryId', selectedStoryId)
  console.log('swiperMounted', swiperMounted)
  console.log('user.stories', usersStories)
  console.log('currentSlide', currentSlide)
  console.log(`swiperRef.current ${currentSlide}`, swiperRef.current)

  return (
    <div className={`${isOpen ? 'absolute inset-0 z-[100]' : ''}`}>
      <BaseModal isOpen={isOpen} setIsOpen={setIsOpen} hasClose>
        <div className="w-full h-full">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            initialSlide={currentSlide}
            touchStartPreventDefault={false} // Permite que o usuário clique no slider para pular o Stories
            scrollbar={{ draggable: true }}
            onSlideChangeTransitionEnd={(swiper) => {
              handleSlideChange(swiper)
              // if (currentSlide === usersStories.length - 1) {
              //   swiper.loopDestroy() // Destrua o loop no último slide
              // }
            }}
            loop={true}
          >
            {usersStories.map((user: UserStories, index: number) => {
              return (
                <SwiperSlide key={user.id}>
                  <div className="relative w-screen h-screen bg-black">
                    {index === currentSlide && (
                      <Stories
                        key={user.id}
                        stories={user.stories}
                        defaultInterval={5000}
                        width={'100%'}
                        height={'100%'}
                        loader={<FiLoader className="animate-spin" />}
                        currentIndex={Number(selectedStoryId)}
                        onPrevious={() => {
                          if (swiperRef.current) {
                            swiperRef.current.slidePrev()
                            console.log('chamando onPrevious')
                          }
                        }}
                        onAllStoriesEnd={() => {
                          handleAllStoriesEnd()
                          // Verifica se currentSlide e user.stories são válidos antes de acessar a propriedade
                          if (
                            usersStories[currentSlide] &&
                            usersStories[currentSlide].stories
                          ) {
                            usersStories[currentSlide].stories.map((story) => {
                              story.isViewed = true
                            })
                          }
                        }}
                      />
                    )}
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </BaseModal>
    </div>
  )
}

export default StorySliderTest
