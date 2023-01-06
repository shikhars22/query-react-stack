import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './App.css';

function App() {
	const customerQuery = useQuery(
		['customers'],
		() => {
			return axios('http://localhost:3002/api/customers');
		},
		{
			refetchInterval: 1000 * 1,
			// staleTime: 1000 * 10,
			refetchIntervalInBackground: false,
		}
	);
	if (customerQuery?.data?.data?.customers) {
		return (
			<div className='App'>
				{customerQuery.data.data.customers.map((customer) => {
					return (
						<p key={customer._id}>
							{customer.name + '-----' + customer.industry}
						</p>
					);
				})}
			</div>
		);
	}
	return <div className='App'></div>;
}

export default App;
