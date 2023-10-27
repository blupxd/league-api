import React, { useEffect, useState } from 'react'
import { fetchMatches } from '../hooks/useFetchMatches';
import MatchPlayers from './MatchPlayers';
import { useNavigate } from 'react-router-dom';
const MatchGame = (props) => {
    const match = props.matchId;
    const name = props.name
    const sort = props.sort || []
    const [matchData, setMatchData] = useState({})
    let summoner = [];
    const navigate = useNavigate()
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        try {
            fetchMatches(`${match}?`)
            .then((data) => setMatchData(data.info))
              .catch((err) => {
                console.error(err)
                navigate('/')
                alert("There's a problem with Riot's database")
                
            })
        } catch (error) {
            console.error(error)
        }
    }, [match])
    const {gameDuration, queueId, participants } = matchData;

    if(participants) summoner = participants.filter((ply) => ply.summonerName === name)


    const gameType = (id) => {
      switch(id){
        case(400):
          return 'Normal Draft'
        case(420):
          return 'Ranked Solo/Duo'
        case(430):
          return 'Normal Blind'
        case(440):
          return 'Ranked Flex'
        case(450):
          return 'ARAM Game'
        default: 
          return 'Featured Game'
      }
    }
    const sortGames = (ids) => {
      if(!ids.length) {
        return true
      }else{
        return ids.includes(queueId);
      }
    }

  return (
    <div className='mx-4 mb-12'>
      {participants && sortGames(sort) ? 
        <div className={`flex lg:flex-row rounded-[15px] flex-col border-y border-gray-800`}>
          <div className={`lg:border-l-8 lg:border-t-0 lg:rounded-tr-[0] border-l-0 border-t-8 ${summoner[0]?.win ? 'border-green-600' : 'border-red-600'} lg:rounded-l-[15px] rounded-bl-[0] rounded-t-[15px] bg-gray-900`}>
            <div className='p-1 border-b-2 border-blue-600'>
              <h1 className='text-gray-400 px-6 text-l text-center'>{gameType(queueId)}</h1>
            </div>
            <div className='px-4 py-10 flex flex-col items-center relative'>
              <img className='lg:w-16 w-24 rounded-full border-4 border-blue-950 drop-shadow-lg'
                src={summoner[0]?.championName === 'FiddleSticks' ? 'https://ddragon.leagueoflegends.com/cdn/13.21.1/img/champion/Fiddlesticks.png': `https://ddragon.leagueoflegends.com/cdn/13.21.1/img/champion/${summoner[0]?.championName}.png`} 
                alt="" 
                />
              <h1 className='text-xl text-gray-400 border-b border-gray-700 text-center mb-2'>{summoner[0]?.championName}</h1>
              <p className='text-xs text-blue-400 font-thin mb-2'>Playtime: {Math.floor(gameDuration / 60)}:{gameDuration%60}</p>
              <p className='text-center text-gray-500 text-xs'>KDA {summoner[0]?.kills}/{summoner[0]?.deaths}/{summoner[0]?.assists}</p>
              <p className='text-center text-blue-900 text-xs font-bold'>{((summoner[0]?.kills + summoner[0]?.assists)/summoner[0]?.deaths).toFixed(2)}</p>
              <h3 className='text-yellow-400 lg:text-xs absolute sm:top-8 rounded-[15px] sm:w-8 md:top-8 text-center md:text-lg md:w-10 bg-blue-900'>{summoner[0]?.champLevel}</h3>
              <h3 className={`text-center text-base font-bold ${summoner[0]?.win ? 'text-green-400' : 'text-red-600'}`}>{summoner[0]?.win ? 'Victory' : 'Defeat'}</h3>
            </div>
          </div>
          <button onClick={() => setShowMore(!showMore)} className='lg:hidden md:block bg-blue-900 text-gray-400 p-2 hover:text-gray-200 hover:bg-blue-800 transition delay-50'>Show more</button>
          <div className={`bg-gray-900 pl-2 w-full lg:h-80 border-l-2 overflow-y-auto rounded-r-[15px] lg:visible border-r-8 border-gray-800 lg:opacity-100 transition-opacity duration-500 ease-in-out ${showMore ? 'h-64 opacity-100' : 'opacity-0 h-0'} ${showMore ? 'visible' : 'invisible'}`}>
            <h1 className='text-gray-400 py-2 text-l border-b border-gray-500 text-center'>Game Stats</h1>
            <MatchPlayers participants={participants} name={name}/>
          </div>

        </div> 
      : null}
    </div>
  )
}

export default MatchGame