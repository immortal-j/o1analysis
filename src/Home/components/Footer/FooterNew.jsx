import React from 'react'
// import { SocialIcon } from "react-social-icons";
import './footerNew.css'

import logo from '../../../Analysis/Assets/Logo/logo2.svg'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const FooterNew = () => {
  return (

        <div id="footer-wrap">
          <footer className="footer">
            <div className="top-footer">
              <div className="row">
                <div className='company-detail'>
                  <div className="footer-logo">
                    <a href="/" title="Mercury">
                      <img
                        src={logo} 
                        width="72"
                        alt="O(1)-logo"
                        className="img-fluid"
                      />
                     Statistics & Analysis
                    </a>
                    <p className="tagline">A product of O1 Coding Club.</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <h4>Heading</h4>
                  <ul className="footer-link">
                    <li>
                      <a href="#" title="Privacy Policy">
                      Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" title=" Privacy Policy">
                      Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <h4>Help</h4>
                  <ul className="footer-link">
                    <li>
                      <a href="#" title="Contact">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Support">
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h4>Contact</h4>
                  <ul className="footer-link">
                    <li>
                      <a href="mail-to:smartlight.eip@gmail.com" title="Contact">
                        @gmail.com
                      </a>
                    </li>
                    <li>
                      <div className="icons">
                  
        
        <div className='social-icons'>Socials
        <br></br>
        <a 
   
          href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in"
          target="_blank"
        >
          <LinkedInIcon />
        </a>

        <a
   
          href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in"
          target="_blank"
        >
          <TwitterIcon />
        </a>
        <a
   
          href="https://www.instagram.com/o1codingclub/?hl=en"
          target="_blank"
        >
          <InstagramIcon />
        </a>

        <a
   
          href="https://www.youtube.com/channel/UCTLzD9A-M_ll2m7Wj45sHJg"
          target="_blank"
        >
          <YouTubeIcon />
        </a></div>
     
                        {/* <SocialIcon
                          href="#"
                          title="Facebook"
                          network="facebook"
                          bgColor="#ffffff"
                        />
                        <SocialIcon
                          href="#"
                          title="Link"
                          network=""
                          bgColor="#ffffff"
                        /> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bottom-footer">
              <div className="row">
                <div className="col-md-5">
                  <p className="copyright pt-3">
                  O(1) Analysis &#38; Statistics &reg; {new Date().getFullYear()}
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      
  )
}

export default FooterNew