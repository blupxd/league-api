import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;
const url = 'https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';

export const fetchSummonerData = async (summoner) => {
    const { data } =  await axios.get(`${url}${summoner}?api_key=${KEY}`);
    return data
};
