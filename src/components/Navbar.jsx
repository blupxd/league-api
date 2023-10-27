import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='text-center p-4 mx-auto text-white mt-8 '>
        <Link className='text-2xl border-b border-white p-1 hover:text-blue-500 transition delay-150' to="/"><FontAwesomeIcon icon={faHome} /></Link>
        <Search />
    </div>
  )
}

export default Navbar