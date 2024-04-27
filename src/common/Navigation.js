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
			<Link to={{ pathname: "/form" }}>Form</Link>
			<Link to={{ pathname: "/form2" }}>Form2</Link>
			<Link to={{ pathname: "/FormUseRef" }}>Form Ref</Link>
			<Link to={{ pathname: "/ConditionalRendering" }}>ConditionalRendering</Link>
			<Link to={{ pathname: "/ConditionalRendering" }}>ConditionalRendering</Link>
			<Link to={{ pathname: "/LifeCycle" }}>LifeCycle</Link>
			<Link to={{ pathname: "/LifeCycleClassComponent" }}>LifeCycleClassComponent</Link>
			<Link to={{ pathname: "/ParentComponent" }}>Data Transfer</Link>
			<Link to={{ pathname: "/product-details/123" }}>Product Details</Link>
		</div>
	)
}

export default Navigation;