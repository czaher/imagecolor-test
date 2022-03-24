import React from 'react'
import rgbHex from 'rgb-hex'
import tinyGradient from 'tinygradient'
import Image from './Image'

const ColorPalette = () => {
  var result = window.localStorage.getItem('Palette').split(',')
  var colorsSampled = 3
  var colors = []
  var hexColors = []
  for (var i = 0; i < result.length; i += colorsSampled) {
    colors.push(result.slice(i, i + colorsSampled))
  }
  for (i = 0; i < colors.length; i++) {
    hexColors.push(
      '#' + rgbHex(colors[i][0] + ' ' + colors[i][1] + ' ' + colors[i][2])
    )
  }

  const gradient = tinyGradient([hexColors[0], hexColors[1], hexColors[2]])

  return (
    <div>
      <Image></Image>
      <p></p>
      <div
        style={{
          width: '400px',
          height: '100px',
          background: gradient.css('linear', 'to bottom right '),
          display: 'inline-block',
        }}
      />
    </div>
  )
}

export default ColorPalette
