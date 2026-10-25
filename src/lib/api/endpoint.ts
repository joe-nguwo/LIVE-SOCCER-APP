import {type ApiRoutes} from './routes';
import { Routes } from './routes';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_API_KEY,
		'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
	}
};

const Baseurl = 'https://free-api-live-football-data.p.rapidapi.com';
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const currentDateString = `${year}${month}${day}`; 

export async function LiveScore() {
    try {
        const response = await fetch( `${Baseurl}${Routes.liveScore}`, options);
        const result = await response.json();
        return result;
    
      
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
export async function Fixtures() {
    try {
        const response = await fetch( `${Baseurl}${Routes.fixtures}?date=${currentDateString}`, options);
        const result = await response.json();
        return result
      
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


