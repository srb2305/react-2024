import React, { useState, useEffect } from 'react';

function GetData(){
	const [data, setData] = useState([]);

	useEffect(() => {
		console.log('useEffect');
		const fetchData = async () => {
			try {
				//const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
				const responce = await fetch('https://cors-anywhere.herokuapp.com/https://srbtracking.com/api/feedback_get');
				if (!responce.status) {
					console.log('Something went wrong');
					throw new Error('Responce was not ok');
				}
				const jsonData = await responce.json();
				setData(jsonData);
			} catch (error) {
				console.log('Error in fetching data', error);
			}
		};

		fetchData();
	}, []);
	return(
		<>
			<h1>Data List</h1>
			<table border="1">
			<tbody>
				<tr>
					<td>S/No</td>
					<td>Title</td>
					<td>Body</td>
				</tr>
				{
					data.map( key => 
						<tr key={key.id}>
							<td>{key.id}</td>
							<td>{key.title}</td>
							<td>{key.description}</td>
						</tr>
					)
				}	
				
				</tbody>
			</table>		
		</>
	);
}

export default GetData;