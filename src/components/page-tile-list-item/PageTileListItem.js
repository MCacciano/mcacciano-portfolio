import React from 'react'

import { useSpring } from 'react-spring'

import { Tile, TileLink } from './PageTileListItem.styles'

const PageTileItem = ({ title, bg }) => {
  // const tileGrow = useSpring({ height: '100%', from: { height: '0%' } })
  return (
    <Tile bg={bg}>
      <h2>
        <TileLink>{title}</TileLink>
      </h2>
    </Tile>
  )
}

export default PageTileItem
