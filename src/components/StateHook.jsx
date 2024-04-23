import {useState} from 'react';

function StateHook(){
	const [number, setNumber] = useState(10);
	const [name, setName] = useState('');
	const [data, setData] = useState([]);
	

	function addNumber(){
		setNumber(number+1);
	}
	function setMyName(){
		setName('RamMohan');
	}
	return(
		<>
			<h1>StateHook</h1>
			My Number = {number}
			<button onClick={addNumber} > Click Me </button>

			<button onClick={ () => setNumber(number+1) } > Click Me again </button>

			My Name is : {name}

			<button onClick={setMyName} > set name </button>
		</>
	);

}


export default StateHook;
