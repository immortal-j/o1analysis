import React from 'react'
import Circle from '../components/Circle'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import SocialMedia from '../components/SocialMedia'
import Main from '../components/TextContent/Main'



import img from '../images/nebula.jpg'
const Homepage = () => {
  return (
    < >
    <div style={{backgroundColor: "#0b001a", backgroundImage : `url(${img})`,     backgroundSize: "cover",   minHeight:"1000vh" , backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center center",scrollBehavior:"smooth",userSelect:"none"}}>

   
    <Navbar/>
    {/* <Form/> */}
<Main/>
    {/* <p>HOme page</p>  */}
    <SocialMedia/>
    <Circle/>

    </div>
    </>
  )
}

export default Homepage