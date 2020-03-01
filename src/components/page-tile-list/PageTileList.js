import React from 'react'

// components
import PageTileListItem from '../page-tile-list-item/PageTileListItem'

// styled components
import { TileList } from './PageTileList.styles'

const PageTileList = () => {
  return (
    <TileList>
      <PageTileListItem to="/about" title="About" bg="hero-1.jpg" />
      <PageTileListItem to="/work" title="Work" bg="hero-2.jpg" />
      <PageTileListItem to="/github" title="Github" bg="github-tile.png" />
      <PageTileListItem to="/blog" title="Blog" bg="blog-tile.jpg" />
    </TileList>
  )
}

export default PageTileList
