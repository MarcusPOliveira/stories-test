'use client'
import Button from '@/components/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'

const AddStory = () => {
  const [imageSrc, setImageSrc] = useState('')
  const [showCaptureButtons, setShowCaptureButtons] = useState(false)

  const router = useRouter()

  const handleOpenGallery = () => {}

  // const handleOpenCamera = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true })

  //     const videoElement = document.createElement('video')
  //     videoElement.srcObject = stream
  //     videoElement.play()

  //     const captureImage = () => {
  //       const canvas = document.createElement('canvas')
  //       canvas.width = videoElement.videoWidth
  //       canvas.height = videoElement.videoHeight
  //       canvas
  //         ?.getContext('2d')
  //         ?.drawImage(videoElement, 0, 0, canvas.width, canvas.height)

  //       const imageUrl = canvas.toDataURL('image/png')
  //       setImageSrc(imageUrl)

  //       videoElement.pause()
  //       stream.getTracks().forEach((track) => track.stop())
  //     }

  //     const captureButton = document.createElement('button')
  //     captureButton.textContent = 'Capturar'
  //     captureButton.addEventListener('click', captureImage)

  //     const cameraPreview = document?.querySelector('.camera-preview')
  //     if (cameraPreview) {
  //       cameraPreview.innerHTML = ''
  //       cameraPreview?.appendChild(videoElement)
  //       cameraPreview?.appendChild(captureButton)
  //     }
  //   } catch (error) {
  //     console.error('Error accessing the camera:', error)
  //   }
  // }

  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })

      const videoElement = document.createElement('video')
      videoElement.srcObject = stream
      videoElement.play()

      const captureImage = () => {
        const canvas = document.createElement('canvas')
        canvas.width = videoElement.videoWidth
        canvas.height = videoElement.videoHeight
        canvas
          ?.getContext('2d')
          ?.drawImage(videoElement, 0, 0, canvas.width, canvas.height)

        const imageUrl = canvas.toDataURL('image/png')
        setImageSrc(imageUrl)
        // setShowCaptureButtons(false)

        videoElement.pause()
        stream.getTracks().forEach((track) => track.stop())
      }

      const cameraPreview = document?.querySelector('.camera-preview')
      setShowCaptureButtons(true)
      if (cameraPreview) {
        cameraPreview.innerHTML = ''
        cameraPreview?.appendChild(videoElement)
        if (showCaptureButtons) {
          const captureButton = document.createElement('button')
          captureButton.textContent = 'Capturar'
          captureButton.addEventListener('click', captureImage)
          cameraPreview?.appendChild(captureButton)
        }
      }
    } catch (error) {
      console.error('Error accessing the camera:', error)
    }
  }

  return (
    <div>
      <div className="h-[50px] flex items-center justify-center">
        <button onClick={() => router.back()}>
          <FiChevronLeft size={24} />
        </button>
        <p>Adicionar story</p>
      </div>

      <div className="w-full h-[500px]  camera-preview">
        {imageSrc && <img src={imageSrc} alt="Captured" />}
      </div>

      <div className="w-full flex items-center justify-between px-10 py-4">
        <Button onClick={handleOpenGallery}>Escolher da Galeria</Button>
        <Button onClick={handleOpenCamera}>Câmera</Button>
      </div>
    </div>
  )
}

export default AddStory
