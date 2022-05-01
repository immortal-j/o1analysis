import React from 'react'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import SocialMedia from '../components/SocialMedia'

import img from '../images/nebula.jpg'
const Homepage = () => {
  return (
    < >
    <div style={{ backgroundImage : `url(${img})`,     backgroundSize: "cover",    height:"100vh", }}>

   
    <Navbar/>
    {/* <Form/> */}

    {/* <p>HOme page</p>  */}
    <SocialMedia/>
    </div>
    </>
  )
}

export default Homepage