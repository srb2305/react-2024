import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function EditData(){
	const { id } = useParams();
	const [userId, setUserId] = useState(id);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((responce) => {
			return responce.json()
		}).then((parseResponce) => {
			setTitle(parseResponce.title);
			setBody(parseResponce.body);
		});
	},[]);

	const handleChange = (e) => {
		//console.log(e.target.name);
		if(e.target.name == 'title') {
			setTitle(e.target.value);
		}
		if(e.target.name == 'body'){
			setBody(e.target.value)
		}
	}

	const formSubmit =  async (e) => {
		e.preventDefault();
		try{
			const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
				method: 'PUT',
				headers: {
					'Content-Type':'application/json',
				},
				body: JSON.stringify({
					title: title,
					body: body
				})
			});
			console.log(responce);
			if (!responce.status) {
				console.log('Something went wrong');
				throw new Error('Responce was not ok');
			} else {
				alert('Updated Successfully');
			}
		} catch (error) {
			console.log('Error adding data:', error);
		}	
	}
	return(
		<>
			<h1> Edit Data</h1>
			<form onSubmit={formSubmit} >
				<p> Title : <input type="text" name="title" value={title} onChange={handleChange} /> </p>
				<p> Body : 
					<textarea name="body" rows="6" onChange={handleChange} value={body}>
						{body}	
					</textarea>
				</p>
				<button type="submit">Update</button>
			</form>
		</>
	);
}

export default EditData;


