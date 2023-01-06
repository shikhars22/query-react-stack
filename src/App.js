import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './App.css';

function App() {
	const priceQuery = useQuery(
		['price'],
		() => {
			return axios(
				'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr'
			);
		},
		{
			refetchInterval: 1000 * 5,
		}
	);
	const customerQuery = useQuery(
		['customers'],
		() => {
			return axios('http://localhost:3002/api/customers');
		},
		{
			refetchInterval: 1000 * 5,
		}
	);
	return (
		<div className='App'>
			{priceQuery?.error ? <p>Error</p> : null}
			{priceQuery?.isLoading ? <p>Loading...</p> : null}
			{priceQuery?.data?.data?.bitcoin?.inr
				? priceQuery.data.data.bitcoin.inr
				: null}
		</div>
	);
}

export default App;
