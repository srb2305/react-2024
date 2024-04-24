import {useRef} from 'react';

function FormUseRef(){
	const username =  useRef('John Smith');
	const password =  useRef('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(username.current.value);
	}
	return(
		<> 
		<h1>Form</h1>
		<form>
			Username: <input type="text" ref={username} /> {username.current.value} <br />
			Username: <input type="password" ref={password} /> <br />
			<button onClick={handleSubmit} > Click Me </button>
		</form>
		</>
	);
}

export default FormUseRef;