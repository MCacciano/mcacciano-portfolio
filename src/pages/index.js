import React from 'react'

import SEO from '../components/seo'
import MainLayout from '../components/main-layout/MainLayout'
import Header from '../components/header/Header'

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <Header />
  </MainLayout>
)

export default IndexPage
