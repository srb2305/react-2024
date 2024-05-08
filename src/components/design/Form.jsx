import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';

function Form(){
	return(
		<>
			<Stack spacing={1.5}>
		      <Typography level="h1">User Registration</Typography>
		    </Stack>
			<Box
		      component="form"
		      sx={{
		        '& .MuiTextField-root': { m: 1, width: '50ch' },
		      }}
		      noValidate
		      autoComplete="off"
		    >
		      	<div>
			      	<TextField
			          disabled
			          id="outlined-disabled"
			          label="Username"
			          defaultValue="Rajaram"
			        />
			    </div>
			    <div>
			        <TextField 
			        	required
				        id="outlined-required"
				        label="First Name"
			        />
		        </div>
		        <div>
			        <TextField 
			        	required
				        id="outlined-required"
				        label="Last Name"
			        />
		        </div>
		        <div>
			        <TextField 
			        	required
				        id="outlined-required"
				        label="Email"
				        type="email"
			        />
		        </div>
		        <div>
			        <TextField 
			        	required
				        id="outlined-required"
				        label="Contact"
				        type="number"
			        />
		        </div>
		        <div>
		        	 <TextField
			          id="outlined-password-input"
			          label="Password"
			          type="password"
			          autoComplete="current-password"
			        />			        
		        </div>
		        <Stack spacing={2} direction="row">
			      <Button variant="text">Text</Button>
			      <Button variant="contained" color="success" >Contained</Button>
			      <Button variant="outlined">Outlined</Button>
			    </Stack>
		    </Box>


		</>
	);
}

export default Form;