import { Link }  from 'react-router-dom';

function Navigation(){
	return(
		<div className="nav">
			<Link to={{ pathname: "/" }}>Home</Link>
			<Link to={{ pathname: "/about" }}>About</Link>
			<Link to={{ pathname: "/contact" }}>Contact</Link>
			<Link to={{ pathname: "/list" }}>List</Link>
			<Link to={{ pathname: "/list2" }}>List2</Link>
			<Link to={{ pathname: "/events" }}>Events</Link>
			<Link to={{ pathname: "/stateHook" }}>StateHook</Link>
			<Link to={{ pathname: "/Array" }}>Array</Link>
		</div>
	)
}

export default Navigation;