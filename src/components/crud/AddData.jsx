import {useState} from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

function AddData(){
	
	const [formData, setFormData] = useState({
		title: '',
		description: ''
	});

	const [ alertCode,setAlertcode ] = useState('error');
	const [ alertMessage,setAlertMessage ] = useState('');

	const handleChange = (e) => {
		console.log(e.target.name);
		const {name, value} = e.target;
		console.log('test');
		setFormData({...formData, [name] : value });
	}


	const formSubmit =  async (e) => {
		e.preventDefault();
		try{
			const responce = await fetch('https://cors-anywhere.herokuapp.com/https://srbtracking.com/api/feedback_add_testing',{
				method: 'POST',
				headers: {
					'Content-Type':'application/json',
				},
				body: JSON.stringify({
					title: formData.title,
					description: formData.description
				})
			});
			if (!responce.status) {
				setAlertcode('error');
				setAlertMessage('Something went wrong');
				throw new Error('Responce was not ok');
			} else {
				setAlertcode('success');
				setAlertMessage('Submitted Successfully');
			}
		} catch (error) {
			console.log('Error adding data:', error);
		}	
	}
	return(
		<>
			<h1>Form</h1>

			{alertMessage ? 
			<Alert icon={<CheckIcon fontSize="inherit" />} severity={alertCode}>
		       {alertMessage}
		    </Alert>
		    : '' }
		    
			
			<form onSubmit={formSubmit}>
				Title: <input type="text" name="title" value={formData.title}  onChange={handleChange} /> <br />
				Description: <input type="text" name="description" value={formData.description} onChange={handleChange} /> <br />
				<button type="submit" > Click Me </button>
			</form>
		</>
	);
}

export default AddData;