import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './App.css';

function App() {
	const { data, error, isLoading } = useQuery(['test'], () => {
		return axios(
			'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr'
		);
	});

	return (
		<div className='App'>
			{error ? <p>Error</p> : null}
			{isLoading ? <p>Loading...</p> : null}
			{data?.data?.bitcoin?.inr ? data.data.bitcoin.inr : null}
		</div>
	);
}

export default App;
