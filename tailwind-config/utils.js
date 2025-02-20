// @ts-check

/** @type {import('tailwindcss').Config['theme']} */ 

const breakPointsInPx = {
  '2xsmall': '320px',
  xsmall: '512px',
  small: '1024px',
  medium: '1280px',
  large: '1440px',
  xlarge: '1680px',
  '2xlarge': '1920px',
}

const breakPointsAsArray = Object.entries(breakPointsInPx).map(
  ([key, value]) => [key, parseInt(value.replace('px', ''), 10)]
)

const breakPointsAsNumber = Object.keys(breakPointsInPx).reduce((acc, key) => {
  acc[key] = breakPointsInPx[key].replace('px', '')
  return acc
}, {})

module.exports = {
  breakPointsInPx,
  breakPointsAsArray,
  breakPointsAsNumber,
}
