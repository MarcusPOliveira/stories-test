// import React, { useEffect, useRef, useState } from 'react'
// import Image from 'next/image'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// import { BaseModal } from '../base_modal'
// import 'swiper/css'
// import { UserStories } from '.'

// export interface Story {
//   id: string
//   title: string
//   url: string
//   duration: number
// }

// interface StorySliderProps {
//   isOpen: boolean
//   setIsOpen: (isOpen: boolean) => void
//   usersStories: UserStories[]
// }

// const StorySlider = ({ isOpen, setIsOpen, usersStories }: StorySliderProps) => {
//   const swiperRef = useRef<HTMLDivElement>(null)
//   const [currentUserIndex, setCurrentUserIndex] = useState(0) // Controla o usuário atual
//   const [currentStoryIndex, setCurrentStoryIndex] = useState(0) // Controla o índice do story atual

//   useEffect(() => {
//     if (isOpen && swiperRef.current) {
//       // Atualiza o Swiper quando o modal é aberto
//       swiperRef.current.update()
//     }
//   }, [isOpen])

//   return (
//     <div className={`${isOpen ? 'absolute inset-0 z-[100]' : ''}`}>
//       <BaseModal isOpen={isOpen} setIsOpen={setIsOpen} hasClose>
//         <div className="w-full h-full">
//           <Swiper
//             modules={[Navigation, Pagination, Scrollbar, A11y]}
//             slidesPerView={1}
//             navigation
//             scrollbar={{ draggable: true }}
//             onSwiper={(swiper) => {
//               swiperRef.current = swiper
//             }}
//             onSlideChange={(swiper) => {
//               if (swiperRef.current) {
//                 const activeIndex = swiperRef.current.activeIndex
//                 console.log('activeIndex', activeIndex)
//                 const activeSlide = swiperRef.current.slides[activeIndex]
//                 console.log('activeSlide', activeSlide)
//                 const userId = activeSlide.getAttribute('data-user-id')
//                 console.log('userId', userId)
//                 const userIndex = usersStories.findIndex(
//                   (user) => user.id === userId
//                 )
//                 console.log('userIndex', userIndex)

//                 setCurrentUserIndex(userIndex)
//                 console.log('currentUserIndex', currentUserIndex)
//                 setCurrentStoryIndex(activeIndex)
//                 console.log('currentStoryIndex', currentStoryIndex)
//               }
//             }}
//           >
//             {usersStories.map((user: UserStories) => (
//               <React.Fragment key={user.id}>
//                 {user.stories.map((story: Story) => (
//                   <SwiperSlide key={story.id} data-user-id={user.id}>
//                     <div className="fixed z-50 top-4 left-4 text-red-500">
//                       {user.username}
//                     </div>
//                     <div
//                       className="relative w-screen h-screen"
//                       // onClick={() => {
//                       //   if (swiperRef.current) {
//                       //     swiperRef.current.slideNext()
//                       //   }
//                       // }}
//                       onClick={() => {
//                         const isLastStory =
//                           currentStoryIndex === user.stories.length - 1
//                         const isLastUser =
//                           currentUserIndex === usersStories.length - 1

//                         if (isLastStory && !isLastUser) {
//                           swiperRef.current?.slideNext() // Passa para o próximo usuário
//                           setCurrentUserIndex((prevIndex) => prevIndex + 1)
//                           setCurrentStoryIndex(0) // Reseta o índice do story para o próximo usuário
//                         } else if (!isLastStory) {
//                           swiperRef.current?.slideNext() // Passa para o próximo story do mesmo usuário
//                           setCurrentStoryIndex((prevIndex) => prevIndex + 1)
//                         }
//                       }}
//                     >
//                       <Image
//                         alt="Stories"
//                         src={story.image}
//                         fill
//                         objectFit="cover"
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </React.Fragment>
//             ))}
//             {/* {usersStories.map((user: UserStories) => (
//               <React.Fragment key={user.id}>
//                 {user.stories.map((story: Story) => (
//                   <SwiperSlide key={story.id}>
//                     <div className="relative w-screen h-screen">
//                       <Image
//                         alt="Stories"
//                         src={story.image}
//                         layout="fill"
//                         objectFit="cover"
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </React.Fragment>
//             ))} */}
//           </Swiper>
//         </div>
//       </BaseModal>
//     </div>
//   )
// }

// export default StorySlider
