import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='mx-auto w-full pb-24 text-center'>
        
        <h1 className='text-white text-3xl'>Welcome to League Search!</h1>
        <img src="https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-chroma-images/17/17050.png" className='mx-auto w-40 mt-4' alt="" />
        <h4 className='mt-12 text-white text-thin'>This is just a test project using Riot's API</h4>
        <h4 className='text-blue-300 mb-12'>If you are interested in trying this API, you can check it out on their website</h4>
        <Link className='p-4 bg-blue-600 rounded-[15px] font-bold text-white' to='https://developer.riotgames.com/'>Riot API Website</Link>
        
    </div>
  )
}

export default Home