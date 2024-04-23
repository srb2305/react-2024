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
				<tr>
					<td>S/No</td>
					<td>Name</td>
					<td>Email</td>
				</tr>

				{
					data.map( key => 
						<tr key={key.id}>
							<td>{key.id}</td>
							<td>{key.name}</td>
							<td>{key.email}</td>
						</tr>
					)
				}	
				
				
			</table>

		</>
	)
}

export default List;
