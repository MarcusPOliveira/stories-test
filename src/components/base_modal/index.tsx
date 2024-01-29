'use client'

import Image from 'next/image'
import { FiX } from 'react-icons/fi'

interface BaseModalProps {
  title?: string
  hasClose?: boolean
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const BaseModal = ({
  children,
  isOpen,
  setIsOpen,
  title,
  hasClose = false,
}: BaseModalProps) => {
  return (
    isOpen && (
      <div
        className="absolute inset-0 z-[1] cursor-pointer bg-black/70"
        onClick={(e) => setIsOpen(false)}
      >
        <div
          className={`flex h-full w-full items-center justify-center lg:px-0`}
        >
          <div
            className={`relative h-screen z-10 mx-auto my-0 flex w-full flex-col items-center rounded-2xl bg-white lg:h-[50%] lg:w-[50%]`}
            onClick={(e) => e.stopPropagation()}
          >
            {hasClose && (
              <div className="absolute z-20 right-5 top-4 cursor-pointer">
                <FiX size={28} onClick={() => setIsOpen(false)} />
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    )
  )
}
