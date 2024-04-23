const data = [
	{
		'id' 		: 1,
		'name'		: 'Ram',
		'email' 	: 'ram@gmail.com',
		'contact' : '7878787878'
	},{
		'id' 		: 2,
		'name'		: 'shyam',
		'email' 	: 'shyam@gmail.com',
		'contact' : '9999787878'
	},{
		'id' 		: 3,
		'name'		: 'Mohan',
		'email' 	: 'mohan@gmail.com',
		'contact' : '888787878'
	},{
		'id' 		: 4,
		'name'		: 'sohan',
		'email' 	: 'sohan@gmail.com',
		'contact' 	: '969687878'
	}

];

const title = 'User List';

function List(){
	return (
		<>
			<h1>{title}</h1>
			<table>
				<thead>
					<tr>
						<th>S/No</th>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					<GetData />
				</tbody>
			</table>

		</>
	)
}


function GetData(){
	const myData = 	data.map( key => 
				<tr key={key.id}>
					<td>{key.id}</td>
					<td>{key.name}</td>
					<td>{key.email}</td>
				</tr>
	);
			
	return (<>{myData}</>)
}
export default List;
