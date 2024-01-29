'use client'
import { useEffect, useRef, useState } from 'react'
//@ts-ignore
import { Zuck } from 'zuck.js'

// import 'zuck.js/css'
import './App.css'
import 'zuck.js/skins/snapgram'
import { Options, TimelineItem, ZuckObject } from 'zuck.js/types'

const timestamp = () => {
  return new Date().getTime() / 1000
}

// const stories = [
//   {
//     id: 'ramon',
//     photo:
//       'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/1.jpg',
//     name: 'Ramon',
//     time: timestamp(),
//     items: [
//       {
//         id: 'ramon-1',
//         type: 'photo',
//         length: 3,
//         src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/1.jpg',
//         preview:
//           'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/1.jpg',
//         link: '',
//         linkText: false,
//         time: timestamp(),
//       },
//       {
//         id: 'ramon-2',
//         type: 'video',
//         length: 0,
//         src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/2.mp4',
//         preview:
//           'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/2.jpg',
//         link: '',
//         linkText: false,
//         time: timestamp(),
//       },
//       {
//         id: 'ramon-3',
//         type: 'photo',
//         length: 3,
//         src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/3.png',
//         preview:
//           'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/3.png',
//         link: 'https://ramon.codes',
//         linkText: 'Visit my Portfolio',
//         time: timestamp(),
//       },
//     ],
//   },
//   {
//     id: 'gorillaz',
//     photo:
//       'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/2.jpg',
//     name: 'Gorillaz',
//     time: timestamp(),
//     items: [
//       {
//         id: 'gorillaz-1',
//         type: 'video',
//         length: 0,
//         src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/4.mp4',
//         preview:
//           'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/4.jpg',
//         link: '',
//         linkText: false,
//         time: timestamp(),
//       },
//       {
//         id: 'gorillaz-2',
//         type: 'photo',
//         length: 3,
//         src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/5.jpg',
//         preview:
//           'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/5.jpg',
//         link: '',
//         linkText: false,
//         time: timestamp(),
//       },
//     ],
//   },
//   {
//     id: 'ladygaga',
//     photo:
//       'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/3.jpg',
//     name: 'Lady Gaga',
//     time: timestamp(),
//     items: [
//       {
//         id: 'ladygaga-1',
//         type: 'photo',
//         length: 5,
//         src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/6.jpg',
//         preview:
//           'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/6.jpg',
//         link: '',
//         linkText: false,
//         time: timestamp(),
//       },
//       {
//         id: 'ladygaga-2',
//         type: 'photo',
//         length: 3,
//         src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/7.jpg',
//         preview:
//           'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/7.jpg',
//         link: 'http://ladygaga.com',
//         linkText: false,
//         time: timestamp(),
//       },
//     ],
//   },
//   {
//     id: 'starboy',
//     photo:
//       'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/4.jpg',
//     name: 'The Weeknd',
//     time: timestamp(),
//     items: [
//       {
//         id: 'starboy-1',
//         type: 'photo',
//         length: 5,
//         src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/8.jpg',
//         preview:
//           'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/8.jpg',
//         link: '',
//         linkText: false,
//         time: timestamp(),
//       },
//     ],
//   },
//   {
//     id: 'riversquomo',
//     photo:
//       'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/5.jpg',
//     name: 'Rivers Cuomo',
//     time: timestamp(),
//     items: [
//       {
//         id: 'riverscuomo-1',
//         type: 'photo',
//         length: 10,
//         src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg',
//         preview:
//           'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg',
//         link: '',
//         linkText: false,
//         time: timestamp(),
//       },
//     ],
//   },
// ]

const StoriesWithZuck = () => {
  const [stories, setStories] = useState<any[]>([
    {
      id: 'ramon',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/1.jpg',
      name: 'Ramon',
      time: timestamp(),
      items: [
        {
          id: 'ramon-1',
          type: 'photo',
          length: 3,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/1.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/1.jpg',
          link: '',
          linkText: false,
          time: timestamp(),
        },
        {
          id: 'ramon-2',
          type: 'video',
          length: 0,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/2.mp4',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/2.jpg',
          link: '',
          linkText: false,
          time: timestamp(),
        },
        {
          id: 'ramon-3',
          type: 'photo',
          length: 3,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/3.png',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/3.png',
          link: 'https://ramon.codes',
          linkText: 'Visit my Portfolio',
          time: timestamp(),
        },
      ],
    },
    {
      id: 'gorillaz',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/2.jpg',
      name: 'Gorillaz',
      time: timestamp(),
      items: [
        {
          id: 'gorillaz-1',
          type: 'video',
          length: 0,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/4.mp4',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/4.jpg',
          link: '',
          linkText: false,
          time: timestamp(),
        },
        {
          id: 'gorillaz-2',
          type: 'photo',
          length: 3,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/5.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/5.jpg',
          link: '',
          linkText: false,
          time: timestamp(),
        },
      ],
    },
    {
      id: 'ladygaga',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/3.jpg',
      name: 'Lady Gaga',
      time: timestamp(),
      items: [
        {
          id: 'ladygaga-1',
          type: 'photo',
          length: 5,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/6.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/6.jpg',
          link: '',
          linkText: false,
          time: timestamp(),
        },
        {
          id: 'ladygaga-2',
          type: 'photo',
          length: 3,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/7.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/7.jpg',
          link: 'http://ladygaga.com',
          linkText: false,
          time: timestamp(),
        },
      ],
    },
    {
      id: 'starboy',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/4.jpg',
      name: 'The Weeknd',
      time: timestamp(),
      items: [
        {
          id: 'starboy-1',
          type: 'photo',
          length: 5,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/8.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/8.jpg',
          link: '',
          linkText: false,
          time: timestamp(),
        },
      ],
    },
    {
      id: 'riversquomo',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/5.jpg',
      name: 'Rivers Cuomo',
      time: timestamp(),
      items: [
        {
          id: 'riverscuomo-1',
          type: 'photo',
          length: 10,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg',
          link: '',
          linkText: false,
          time: timestamp(),
        },
      ],
    },
  ])

  const storiesEl = useRef(null)
  const storiesFunc = useRef(null)

  const options: Options = {
    backNative: true,
    previousTap: true,
    skin: 'snapgram',
    autoFullScreen: true,
    avatars: true,
    paginationArrows: true,
    list: false,
    cubeEffect: true,
    localStorage: true,
    // reactive: true,
    // callbacks: {
    //   onDataUpdate: function (currentState: any, callback: any) {
    //     setStories(currentState)
    //     callback()
    //   }.bind(this),
    // },
    stories: stories,
  }

  const handleAddStory = () => {
    console.log('chamou handleAddStory')

    const newStory: TimelineItem = {
      id: 'teste-marcus',
      photo: 'https://github.com/MarcusPOliveira.png',
      name: 'Marcus Oliveira Testeeee',
      time: timestamp(),
      items: [
        {
          id: 'teste-marcus-1',
          type: 'photo',
          length: 10,
          src: 'https://github.com/MarcusPOliveira.png',
          preview: 'https://github.com/MarcusPOliveira.png',
          link: '',
          // linkText: false,
          time: timestamp(),
        },
      ],
    }

    storiesFunc.current.add(newStory)
  }

  console.log('stories', stories)

  useEffect(() => {
    if (storiesEl.current && !storiesFunc.current) {
      storiesFunc.current = Zuck(storiesEl.current, options)
    }
  }, [storiesEl.current])

  console.log('storiesEl', storiesEl)
  console.log('storiesFunc', storiesFunc)

  return (
    <>
      <div id="stories" className="storiesWrapper" ref={storiesEl}></div>
      <button className="p-6 bg-red-500" onClick={handleAddStory}>
        Add story
      </button>
    </>
  )
}

export default StoriesWithZuck
