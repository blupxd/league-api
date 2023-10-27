import React, {useEffect, useState} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { fetchSummonerData } from '../hooks/useFetchSummonerData'
import { fetchMatches } from '../hooks/useFetchMatches'
import MatchGame from './MatchGame'
import Ranked from './Ranked'
import { LineWave } from 'react-loader-spinner'


export const SummonerProfile = () => {
    const [summonerData, setSummonerData] = useState({})
    const { id } = useParams()
    const [queueType, setQueueType] = useState()
    const [summonerMatches, setSummonerMatches] = useState([])

    const navigate = useNavigate();

    const [selectedButtuon, setSelectedButton] = useState('all')

    useEffect(() => {
        try {
            fetchSummonerData(id)
            .then((data) => {
                setSummonerData(data)
                fetchMatches(`by-puuid/${data.puuid}/ids?start=0&count=5&`)
                    .then((data2) => setSummonerMatches(data2))
                }
            ).catch((err) => {
                console.error(err)
                navigate('/')
            })
        }catch (error) {
            console.error(error);
        }
        
      }, [id]);
  return (
    <div>
        <div className='mt-16 p-4 bg-gray-800 items-center flex flex-col'>
            <div className='flex flex-col items-center relative drop-shadow-lg'>
                <img  className='w-24 rounded-full border-4 border-yellow-600' src={summonerData ? 
                    `https://ddragon.leagueoflegends.com/cdn/13.21.1/img/profileicon/${summonerData.profileIconId}.png` 
                    : 
                    'https://ddragon.leagueoflegends.com/cdn/13.21.1/img/profileicon/588.png'} alt={summonerData ? summonerData.name : 'loading...'} />
                <h1 className='text-white'>{summonerData.name}</h1>
                <h3 className='text-yellow-400 text-xs absolute bottom-6 rounded-[15px] w-12 text-center bg-blue-950'>{summonerData.summonerLevel}</h3>
            </div>
            <div className='mt-4 w-96'>
                
                <div className='flex justify-between drop-shadow-lg flex-row bottom-0 '>
                    <button onClick={() => {
                        setQueueType([])
                        setSelectedButton('all')
                        }} className={`px-4 py-2 w-48 ${selectedButtuon === 'all' ? 'bg-blue-800' : 'bg-blue-950'} text-gray-400 hover:bg-blue-800`}>All</button>
                    <button onClick={() => {
                        setQueueType([400,430])
                        setSelectedButton('normal')
                        }} className={`px-4 py-2 w-48 ${selectedButtuon === 'normal' ? 'bg-blue-800' : 'bg-blue-950'} text-gray-400 hover:bg-blue-800`}>Normal</button>
                    <button onClick={() => {
                        setQueueType([420])
                        setSelectedButton('ranked')
                        }} className={`px-4 py-2 w-48 ${selectedButtuon === 'ranked' ? 'bg-blue-800' : 'bg-blue-950'} text-gray-400 hover:bg-blue-800`}>Ranked Solo</button>
                    <button onClick={() => {
                        setQueueType([440])
                        setSelectedButton('flex')
                        }}className={`px-4 py-2 w-48 ${selectedButtuon === 'flex' ? 'bg-blue-800' : 'bg-blue-950'} text-gray-400 hover:bg-blue-800`}>Ranked Flex</button>
                </div>
            </div>
        </div>
        <div className='mx-auto flex md:flex-row w-96 flex-col gap-12 justify-center md:w-full mt-4 border-gray-900'>
            <div className='mt-4'>
                {summonerData && <Ranked id={summonerData?.id}/>}
            </div>
            <div className='p-6 bg-gray-900 border border-gray-800 rounded-[20px]'>
                <h1 className='text-center pb-2 border-gray-900 text-xl text-blue-200 mb-4'>Recent games</h1>
                {summonerMatches.length ? summonerMatches.map((match, index) => <MatchGame key={index} matchId={match} sort={queueType} name={summonerData.name}/>) : 
                <LineWave
                height="100"
                width="100"
                color="#1e40af"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
              />}
            </div>
           
        </div>
    </div>
    
        
    
  )
}
