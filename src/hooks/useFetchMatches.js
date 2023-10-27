import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;

export const fetchMatches = async (url) => {
    const { data } =  await axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/${url}api_key=${KEY}`);
    return data
};
