import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
const Info = () => {
  return (
    <div className='fixed bottom-5 left-5 flex gap-2 items-center'>
        <Link className='text-2xl bg-pink-600 text-white p-2 w-8 h-8 rounded-[20px] flex items-center justify-center' to='https://www.instagram.com/matijastefanovic5/'>
            <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link className='text-2xl bg-white p-2 rounded-[20px] w-8 h-8 text-center flex items-center justify-center' to='https://github.com/blupxd'>
            <FontAwesomeIcon icon={faGithub} />
        </Link>
    </div>
  )
}

export default Info