import React from 'react'

import { useSpring } from 'react-spring'

import { Tile, TileLink } from './PageTileListItem.styles'

const PageTileItem = ({ title, bg, to }) => {
  // const tileGrow = useSpring({ height: '100%', from: { height: '0%' } })
  return (
    <Tile bg={bg}>
      <h2>
        <TileLink to={to}>{title}</TileLink>
      </h2>
    </Tile>
  )
}

export default PageTileItem
