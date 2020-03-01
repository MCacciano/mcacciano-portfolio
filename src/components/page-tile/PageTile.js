import React from 'react'

import { useSpring } from 'react-spring'

import { Tile } from './PageTile.styles'

const PageTile = ({ title, bg }) => {
  const tileGrow = useSpring({ height: '100%', from: { height: '0%' } })
  return (
    <Tile style={tileGrow} bg={bg}>
      <h2>{title}</h2>
    </Tile>
  )
}

export default PageTile
