import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import '../Components/ComponentCSS/Nav.scss'
import Logo from '../Assets/Logo/QH.svg'
import LogoReverse from '../Assets/Logo/Logo-Reverse.svg'
import DesktopLogo from '../Assets/Logo/DesktopLogo.svg'
import Burger from '../Assets/Misc/burgerMenu.svg'
import Resume from '../Assets/Resume/QH_resume_portfolio.pdf'
import Linkedin from '../Assets/Footer/linkedinReverse.svg'
import Twitter from '../Assets/Footer/twitterReverse.svg'
import Git from '../Assets/Footer/gitReverse.svg'
import Email from '../Assets/Footer/mailReverse.svg'
import Download from '../Assets/Nav/download.svg'
import DownloadBlack from '../Assets/Nav/downloadBlack.svg'

export default function Nav (){
    const [isOpen, setIsOpen] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const handleStateChange = (state) => {
        setIsOpen(state.isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const checkNavBarScroll = () => {
        if(window.innerWidth < 768){
            if(window.scrollY >= 1){
                setNavbar(true)
            } else {
                setNavbar(false)
            }
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', checkNavBarScroll);

    return(
        <nav className={navbar ? 'nav active' : 'nav' } >
            <div className='nav__mobile'>
                <Menu width={'256px'} isOpen={isOpen} onStateChange={(state) => handleStateChange(state)}>
                    <Link to={'/'} className='menu-logo'><img onClick={() => closeMenu()} src={LogoReverse} className="logo" alt="article cover"></img></Link>
                    <Link to={'/About'}><p onClick={() => closeMenu()} className='nav__list'>About Me</p></Link>
                    <Link to={'/Portfolio'}><p onClick={() => closeMenu()} className='nav__list'>Portfolio</p></Link>
                    {/* <Link to={'/Blog'}><p onClick={() => closeMenu()} className='nav__list'>Blog</p></Link> */}
                    <div className='nav__resume' onClick={()=>{window.open(Resume)}}>Resume<img src={DownloadBlack} className='nav__img'/></div>
                    <Link to={'/Contact'}><p onClick={() => closeMenu()} className='nav__list'>Contact</p></Link>
                </Menu>
                {
                navbar ?  
                <div className="nav__logo">
                    <img className='burger' alt='burger menu' src={Burger}/>
                    <Link to={'/'}><img src={LogoReverse} alt="app logo"></img></Link>
                </div>
                :
                <div className="nav__logo">
                    <img className='burger' alt='burger menu' src={Burger}/>
                    <Link to={'/'}><img src={Logo} alt="app logo"></img></Link>
                </div>
                }
            </div>
            <div className='nav__tablet'>                
                <div className='nav__tablet__container'>
                    <div >
                        <Link to={'/'} ><img  src={DesktopLogo} className='nav__tablet__logo' alt="article cover"></img></Link>
                    </div>
                    <div className='nav__tablet__listContainer'>
                        <p className='nav__tablet__title'>Data Scientist</p>
                        <Link to={'/About'}><p  className='nav__tablet__list'>About Me</p></Link>
                        <Link to={'/Portfolio'}><p  className='nav__tablet__list'>Portfolio</p></Link>
                        {/* <Link to={'/Blog'}><p  className='nav__tablet__list'>Blog</p></Link> */}
                        <div className='nav__tablet__list' onClick={()=>{window.open(Resume)}}>Resume<img src={Download} className='nav__tablet__img'/></div>
                        <Link to={'/Contact'}><p  className='nav__tablet__list'>Contact</p></Link>    
                    </div>
                </div>
                <div className='desktopFooter'>
                    <div className='desktopFooter__iconContainer'>
                        <div className='desktopFooter__iconContainer__icon'><img alt='email' src={Email}/></div>
                        <div className='desktopFooter__iconContainer__icon'><img alt='git' src={Git}/></div>
                        <div className='desktopFooter__iconContainer__icon'><img alt='twitter' src={Twitter}/></div>
                        <div className='desktopFooter__iconContainer__icon'><img alt='linkedin' src={Linkedin}/></div>
                    </div>
                    <p className='desktopFooter__copyright'> &copy; 2020 Queenie Hu</p>
                </div>
            </div>
        </nav>
        
    )
    
}

