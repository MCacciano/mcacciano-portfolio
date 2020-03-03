import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

import { graphql } from 'gatsby'

import MainLayout from '../components/main-layout/MainLayout'

export default ({ data }) => {
  const posts = data.allSanityPost.nodes.map(post => {
    console.log(post)
    return (
      <div>
        <h1>{post.title}</h1>
        <BlockContent blocks={post._rawBody} />
      </div>
    )
  })

  return (
    <MainLayout>
      <div>Blog</div>
      <div>{posts}</div>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query {
    allSanityPost {
      nodes {
        title
        _rawBody(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`
