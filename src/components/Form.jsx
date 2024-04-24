import {useState} from 'react';

function Form(){
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleChangeUserName = (e) => {
		console.log(e.target.value);
		setUserName(e.target.value);
	}

	const handleChangePassword =(e) => {
		console.log(e.target.value);
		setPassword(e.target.value);
	}

	const formSubmit = (e) => {
		e.preventDefault();
		console.log('submit form');
	}
	return(
		<>
			<h1>Form</h1>
			<form onSubmit={formSubmit}>
				Username: <input type="text" value={userName}  onChange={handleChangeUserName} />  {userName} <br />
				Password: <input type="password" value={password} onChange={handleChangePassword} /> <br />
				<button type="submit" > Click Me </button>
			</form>
		</>
	);
}

export default Form;