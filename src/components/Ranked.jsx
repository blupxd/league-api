import React, { useEffect, useState } from 'react'
import { fetchRanked } from '../hooks/useFetchRanked'

const Ranked = (props) => {
    
    const [ranked, setRanked] = useState([])
    const [norm, setNorm] = useState([])
    const [flex, setFlex] = useState([])
    const id = props.id || ''

    useEffect(() => {
        if (id.length !== '') {
            fetchRanked(id)
                .then(data => setRanked(data))
                .catch(err => console.error(err));
        }
    }, [id]);
    useEffect(() => {
        setNorm(ranked.find(rnk => rnk.queueType === 'RANKED_SOLO_5x5'))
        setFlex(ranked.find(rnk => rnk.queueType === 'RANKED_FLEX_SR'))
    },[ranked])
  return (
    <div className='flex justify-center'>
        {ranked ? (
            <div className='w-full p-4 bg-gray-900 border rounded border-gray-800'>
                <div className='mx-auto w-32 p-4 border border-yellow-700 rounded-full'>
                    <img src={`https://opgg-static.akamaized.net/images/medals_new/${String(norm?.tier).toLowerCase()}.png`} alt="" />
                </div>
                <div className='border-b text-center p-2 mt-2 border-gray-700'>
                    <h1 className='text-gray-400 text-l'>{norm?.tier} {norm?.rank}</h1>
                    <p className='text-yellow-600'>{norm?.leaguePoints} LP</p>
                    <p className='text-blue-700 text-xs'>{norm?.wins}W <span className='text-red-900'>{norm?.losses}L</span></p>
                </div>
                <div className='h-12 inline-flex items-center w-full'>
                    <div className='w-16'>
                        <img src={`https://opgg-static.akamaized.net/images/medals_new/${String(flex?.tier).toLowerCase()}.png`} alt="" />
                    </div>
                    <div className='inline-flex justify-between w-full px-4'>
                        <h3 className='text-xs text-gray-400 flex-grow'>{flex?.tier} <span className='text-blue-400'>{flex?.wins}W {flex?.losses}L</span></h3>
                        <h3 className='text-xs text-yellow-600'>{flex?.leaguePoints}LP</h3>
                    </div>
                </div>
            </div>
        ) : 'Loading...'}
    </div>
  )
}

export default Ranked