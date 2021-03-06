import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'

import  kakulogo  from '../images/kakulogo.png'

const Header = ({ siteTitle }) => {
      
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='fixed bg-gray-101 z-30 w-full'>
      <div className=' mx-auto py-3 md:flex md:justify-between md:items-center relative'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center relative'>
            <Link className='opacity-0 ' to='/'>{siteTitle}</Link>
            <Link className='absolute w-24 ml-20 z-50' to='/'><img src={kakulogo} alt='logo'/></Link>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className='flex md:hidden'>
            <button
              type='button'
              className='text-black hover:text-gray-900 focus:outline-none focus:text-purple-874 z-50'
              aria-label='toggle menu'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Hamburger size={32} />
            </button>
          </div>
        </div>

        {/* <!-- normal nav menu --> */}
        <div className='md:flex items-center hidden md:block '>
          <ul className='flex flex-row list-none md:ml-auto '>
            <li className='hoverLine'>
              <Link
                className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                to='/Pricing/'
              >
                Pricing & Plans
              </Link>
            </li>
            <li className='hoverLine'>
              <Link
                className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                to='/Contact/'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* drop-down menu */}
        <div
          className={
            ' flex justify-center absolute inset-0 top-0 right-0 w-full h-screen bg-gray-101 items-center transition transform duration-500 ease-in-out z-30 ' +
            (menuOpen
              ? ' opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-full')
          }
        >
          <div className='flex flex-col justify-center items-center text-center text-3xl '>
            <ul className='flex flex-col list-none md:ml-auto '>
              <li className='hoverLine'>
                <Link
                  className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                  to='/Pricing/'
                >
                  Pricing & Plans
                </Link>
              </li>
              <li className='hoverLine'>
                <Link
                  className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                  to='/Contact/'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
