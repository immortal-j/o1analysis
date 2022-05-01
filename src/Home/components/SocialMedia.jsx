import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Stack } from '@mui/material';

const StackStyle = {
    color:"white",
    position:"absolute"
    ,top:"40vh"
    ,right:"5vw"



}



const SocialMedia = () => {
  return (
    <div>
<Stack style={StackStyle}  >

 <a href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in" target="_blank"> 
 
 <LinkedInIcon style={{color:"white"}} /></a>    

 <a href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in" target="_blank"> 
 
 <TwitterIcon style={{color:"white"}} /></a>      
 <a href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in" target="_blank"> 
 
 <InstagramIcon  style={{color:"white"}}/>
 </a> 

 <a href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in" target="_blank"> 
 
 
        <YouTubeIcon  style={{color:"white"}}/>
        </a> 
</Stack>
        
        SocialMedia</div>
  )
}

export default SocialMedia