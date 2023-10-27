import React from 'react'
import { Link } from 'react-router-dom'

const MatchPlayers = (props) => {
    const name = props.name
    const participants = props.participants


    const findSpell = (sid) =>{
      switch(sid){
        case(21):
          return 'SummonerBarrier'
        case(1):
          return 'SummonerBoost'
        case(14):
          return 'SummonerDot'
        case(3): 
          return 'SummonerExhaust'
        case(4):
          return 'SummonerFlash'
        case(6):
          return 'SummonerHaste'
        case(7):
          return 'SummonerHeal'
        case(13):
          return 'SummonerMana'
        case(30):
          return 'SummonerPoroRecall'
        case(32):
          return 'SummonerSnowball'
        case(12):
          return 'SummonerTeleport'
        case(11):
          return 'SummonerSmite'
      }
    }

  return (
    <div className="p-2 lg:grid lg:grid-rows-5 grid-flow-col gap-x-8 md:flex md:flex-col">
    {participants.map((ply, index) => 
        <div className="drop-shadow-lg block items-center p-2" key={index}>
          <div className=''>
            <div className='inline-flex items-center'>
              <img className={`absolute w-6 ${ply?.teamId === 100 ? 'border-l-2 border-red-600' : 'border-l-2 border-blue-600'}`} 
                  src={ply?.championName === 'FiddleSticks' ? 'https://ddragon.leagueoflegends.com/cdn/13.21.1/img/champion/Fiddlesticks.png': `https://ddragon.leagueoflegends.com/cdn/13.21.1/img/champion/${ply?.championName}.png`}  alt="" />
              <Link
                className={`text-xs ml-7 w-24 font-semibold hover:text-blue-600 transition delay-100 ${ply.summonerName === name ? 'text-yellow-600' : 'text-gray-500'} inline-block overflow-hidden whitespace-no-wrap overflow-ellipsis`}
                to={`/summoner/${ply?.summonerName}`}
              >
                {ply.summonerName}
              </Link>
              <p className='text-xs text-gray-500'>{ply?.kills}/<span className='text-red-500'>{ply?.deaths}</span>/{ply?.assists} <span className='font-semibold text-blue-500'>{((ply?.kills + ply?.assists)/ply?.deaths).toFixed(2)}</span></p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap drop-shadow-lg py-2 border-b border-gray-600">
            {Array(7).fill().map((_,index) => 
              ply[`item${index}`] !== 0 ? <div key={index} className='w-5 h-5 border border-gray-800'>
                <img src={`http://ddragon.leagueoflegends.com/cdn/13.21.1/img/item/${ply[`item${index}`]}.png`} />
                </div>
              : <div key={index} className='w-5 h-5 bg-gray-900 border border-gray-800'/>
            )}
            <div className='flex border border-gray-900 ml-2'>
              <img className='w-5 h-5' src={`https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/${findSpell(ply.summoner1Id)}.png`} alt="" />
              <img className='w-5 h-5' src={`https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/${findSpell(ply.summoner2Id)}.png`} alt="" />
            </div>
          </div>
        </div>
    )}
    </div>
  )
}

export default MatchPlayers