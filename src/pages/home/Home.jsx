import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import BlogPostCard from '../../components/blogPostCard/BlogPostCard'
import Feedback from '../../components/feedback/Feedback'

function Home() {
  return (
    <Layout>
        <HeroSection/>
        <BlogPostCard/>
        <Feedback/>
    </Layout>
  )
}

export default Home