import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'
import Home from './Home';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  const [walletAddress, setwalletAddress] = useState();

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setwalletAddress(accounts[0]);
    }

  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to={"/components/sections/"} className='navbar-logo' >
            QUICKSTARTER  <i className="fa-solid fa-globe"></i>
          </Link>
          {/* <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa solid fa-xmark' : 'fa-solid fa-bars'}/>
        </div> */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>

              <a href="#about" className='nav-links'>
                About
              </a>

            </li>
            <li className='nav-item'>
              <a href="#getstarted" className='nav-links'>
                Get Started
              </a>
              {/* <Link to="getstarted" spy={true} smooth={true} offset={10} duration={500} className='nav-links' onClick={closeMobileMenu}>
                
              </Link> */}
            </li>
            <li className='nav-item'>
              <a href="#projects" className='nav-links'>
                Projects
              </a>
              {/* <Link to="projects" spy={true} smooth={true} offset={10} duration={500} className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link> */}
            </li>

          </ul>
          {/* {!walletAddress && (<Button buttonStyle='btn--outline' onClick={connectWallet}>
        Connect Wallet
      </Button>)} */}
          {/* <div>
        <Home walletAddress={walletAddress}></Home>
      </div> */}
        </div>
      </nav>

    </>
  )
}

export default Navbar