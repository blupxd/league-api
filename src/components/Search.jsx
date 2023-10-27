import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Search = () => {
    const [summonerName, setSummonerName] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(summonerName) navigate(`/summoner/${summonerName}`)
        else alert("Please enter a summoner's name!")
    }
  return (
    <div className='m-4 mt-12 flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='rounded-full shadow-lg flex gap-3'>
            <input
                type="text"
                placeholder='Search...'
                onChange={(e) => setSummonerName(e.target.value)}
                className="text-black px-4 w-72 rounded-[15px] focus:outline-none
                hover:ring-2 hover:ring-blue-300 transition duration-300 delay-100
                focus:ring-2 focus:ring-blue-300 transition duration-300 delay-100"
            />
            <button type='submit' className="bg-blue-600 py-2 px-4 rounded-full focus:outline-none"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
    </div>
  )
}

export default Search