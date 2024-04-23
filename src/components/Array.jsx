import {useState} from 'react';

function Array(){
	const [data, setData] = useState(['ram','shyam','mohan']);
	
	function addArray(){
		const newData =	[...data, 'newValue'];
		setData(newData);
	}

	function addArrayDynamic(newValue){
		console.log('check');
		const newData =	[...data, newValue];
		setData(newData);
	}

	return (
		<>
			<h1>Array</h1>
			<button onClick={ addArray } > Click Me</button>
			<button onClick={ () => addArrayDynamic('test') } > Click Me again</button>

			{
				data.map((val,index) => (
					<div key={index}> {index+1} {val}</div>
				))
			}
		</>

	);
}

export default Array;