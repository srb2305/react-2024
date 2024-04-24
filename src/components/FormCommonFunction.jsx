import {useState} from 'react';

function FormCommonFunction(){
	const [formData, setFormData] = useState({
		username: '',
		password: ''
	});

	const handleChange = (e) => {
		console.log(e.target.name);
		const {name, value} = e.target;
		setFormData({...formData, [name] : value });
	}

	return(
		<>
			<h1>Form</h1>
			<form>
				Username: <input type="text" name="username" value={formData.username}  onChange={handleChange} />  {formData.username} <br />
				Password: <input type="password" name="password" value={formData.password} onChange={handleChange} /> <br />
				<button type="submit" > Click Me </button>
			</form>
		</>
	);
}

export default FormCommonFunction;