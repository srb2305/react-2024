import { useEffect } from 'react';

function LifeCycle(prop){

	useEffect(() => {
		console.log('useEffect 1');
		console.log('Component mount');
		// Api call for get data
	},[]); // initial state | Run only once after the first render

	useEffect(() => {
		console.log('useEffect 2');
		console.log('Component update');
		// Api call for update data
	},[prop]); // update state | Run whenever 'prop' changes

	useEffect(() => {
		console.log('useEffect 3');
		// This will call before destroy compoent data
		return () => {
			console.log('Component unmount');
		}
	},[]); // clear state

	return (
		<>
			<h1> Life Cycle</h1>
		</>
	)
}

export default LifeCycle;