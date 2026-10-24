const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '#',
		'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
	}
};

const Baseurl = 'https://free-api-live-football-data.p.rapidapi.com';

export async function getLatesScoreLine() {
    try {
        const response = await fetch( Baseurl, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
export async function Fixtures() {
    try {
        const response = await fetch( Baseurl, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


