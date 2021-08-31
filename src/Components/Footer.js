import React from 'react';
import '../Components/ComponentCSS/Footer.scss'
import Linkedin from '../Assets/Footer/linkedinBlackBG.svg'
// import Twitter from '../Assets/Footer/twitterBlackBG.svg'
import Git from '../Assets/Footer/git.svg'
import Email from '../Assets/Footer/emailBlackBG.svg'


export default function Footer(){
    return(
        <div className='footer'>
            <div className='footer__icon-container'>
                <div className='footer__icon'><img alt='email' onClick={()=>{window.open('mailto:queeniehu@gmail.com')}} src={Email}/></div>
                <div className='footer__icon__git'><img alt='git' onClick={()=>{window.open('https://github.com/conibear')}} src={Git}/></div>
                {/* <div className='footer__icon'><img alt='twitter' src={Twitter}/></div> */}
                <div className='footer__icon'><img alt='linkedin' onClick={()=>{window.open('https://www.linkedin.com/in/queenie-hu-phd-566464b7/')}} src={Linkedin}/></div>
            </div>
            <p className='footer__copy-right'> &copy; 2020 Queenie Hu</p>
        </div>
    )
}