import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function GetDataById(){
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

	return(
		<>
			<h1> Get Data By Id: {id}</h1>
			<p> Title : {title} </p>
			<p> Body : {body} </p>
		</>
	);
}

export default GetDataById;