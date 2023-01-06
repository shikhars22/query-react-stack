import { useState } from 'react';
import './App.css';
import Customers from './components/Customers';

function App() {
	const [showCustomers, setShowCustomers] = useState(false);
	return (
		<div className='App'>
			<button
				onClick={() => {
					setShowCustomers(!showCustomers);
				}}>
				{showCustomers ? 'Click To Hide' : 'Click To show'}
			</button>
			{showCustomers ? <Customers /> : null}
		</div>
	);
}

export default App;
