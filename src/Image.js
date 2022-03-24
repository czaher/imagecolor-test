import React, { createRef } from 'react'
import target from './cowboy.jpg'
import ColorThief from 'colorthief'

const imgRef = createRef()

const Image = () => {
  return (
    <img
      style={{ maxWidth: '400px ' }}
      ref={imgRef}
      alt='target'
      src={target}
      onLoad={() => {
        const colorThief = new ColorThief()
        const img = imgRef.current
        const result = colorThief.getPalette(img, 3)
        window.localStorage.clear()
        window.localStorage.setItem('Palette', result)
      }}
    />
  )
}

export default Image
