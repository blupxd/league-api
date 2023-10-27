import axios from 'axios'

const KEY = process.env.REACT_APP_API_KEY;


export const fetchRanked = async (summoner) => {
    const { data } =  await axios.get(`https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summoner}?api_key=${KEY}`);
    return data
}