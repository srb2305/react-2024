import Home from './Home';
import Form from './Form';

const isUserLogedIn  = true;

function ConditionalRendering(){
	// if (isUserLogedIn) {
	// 	return <Home />
	// } else {
	// 	return <Form />
	// }

	//return (isUserLogedIn) ? <Home /> : <Form />
	
	// return (isUserLogedIn) ? <Home /> : ''

	return (isUserLogedIn) && <Home / >
}

export default ConditionalRendering;