import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Customers = () => {
	const customerQuery = useQuery(
		['customers'],
		() => {
			return axios('http://localhost:3002/api/customers');
		}
		// {
		// 	refetchInterval: 1000 * 1,
		// 	refetchIntervalInBackground: false,
		// }
	);
	if (customerQuery?.data?.data?.customers) {
		return (
			<div>
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
	return <div></div>;
};

export default Customers;
