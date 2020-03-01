import React from 'react'

// components
import PageTileListItem from '../page-tile-list-item/PageTileListItem'

// styled components
import { TileList } from './PageTileList.styles'

const PageTileList = () => {
  return (
    <TileList>
      <PageTileListItem title="About" bg="hero-1.jpg" />
      <PageTileListItem title="Work" bg="hero-2.jpg" />
      <PageTileListItem title="Github" bg="github-tile.png" />
      <PageTileListItem title="Blog" bg="blog-tile.jpg" />
    </TileList>
  )
}

export default PageTileList
