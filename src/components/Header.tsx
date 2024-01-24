import React from 'react'
import LongLogo from '../assets/logos/HFV Logo_Alt Long_Reverse.svg?react'
import '../styles.scss'


export const Header: React.FC = () =>  {

  const calculateLeft = () => {
    if (window.screen.width < 600)
      return window.screen.width * .025;
    return 0;      
  }

  return (
    <div className='header'>
        <LongLogo className='logo' style={{right: calculateLeft()}} />
    </div>
  )
}

export default Header