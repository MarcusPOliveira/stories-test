'use client'
import Image from 'next/image'
import { FiPlus } from 'react-icons/fi'

interface CircleWrapperProps {
  id: string
  username: string
  profileImage?: string
  openStory: () => void
  isAddingStory?: boolean
  isVisualized?: boolean
}

const CircleWrapper = ({
  id,
  username,
  profileImage,
  openStory,
  isAddingStory = false,
  isVisualized = false,
}: CircleWrapperProps) => {
  return (
    <div className="flex flex-col items-center" onClick={openStory}>
      <div
        key={id}
        className={`w-20 h-20 rounded-full p-[1px] border-2 ${
          isVisualized ? 'border-gray-600' : 'border-green-400'
        } flex items-center justify-center`}
      >
        {isAddingStory ? (
          <FiPlus size={50} className="text-green-400" />
        ) : (
          <Image
            src={profileImage ? profileImage : ''}
            width={100}
            height={100}
            className="rounded-full object-cover"
            alt={`Foto de ${username}`}
          />
        )}
      </div>
      <p>{username}</p>
    </div>
  )
}

export default CircleWrapper
