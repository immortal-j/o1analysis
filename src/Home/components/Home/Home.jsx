import React from 'react'
import Navbar from '../Navbar'
import SocialMedia from '../SocialMedia'
import Main from '../TextContent/Main'

const Home = () => {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>

        <Navbar />
        <Main />
        {/* Main content contains Start btn, modal, form */}
        <SocialMedia />
      </div>
    </>
  )
}

export default Home