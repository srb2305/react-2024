import {useState} from 'react';

function AddData(){
	
	const [formData, setFormData] = useState({
		title: '',
		description: ''
	});

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
				console.log('Something went wrong');
				throw new Error('Responce was not ok');
			} else {
				alert('Submitted Successfully');
			}
		} catch (error) {
			console.log('Error adding data:', error);
		}	
	}
	return(
		<>
			<h1>Form</h1>
			<form onSubmit={formSubmit}>
				Title: <input type="text" name="title" value={formData.title}  onChange={handleChange} /> <br />
				Description: <input type="text" name="description" value={formData.description} onChange={handleChange} /> <br />
				<button type="submit" > Click Me </button>
			</form>
		</>
	);
}

export default AddData;