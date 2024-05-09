import { Link }  from 'react-router-dom';

function Navigation(){
	return(
		<ul className="nav">
			<li><Link to={{ pathname: "/" }}>Home</Link></li>
			<li><Link to={{ pathname: "/about" }}>About</Link></li>
			<li><Link to={{ pathname: "/contact" }}>Contact</Link></li>
			<li><Link to={{ pathname: "/list" }}>List</Link></li>
			<li><Link to={{ pathname: "/list2" }}>List2</Link></li>
			<li><Link to={{ pathname: "/events" }}>Events</Link></li>
			<li><Link to={{ pathname: "/stateHook" }}>StateHook</Link></li>
			<li><Link to={{ pathname: "/Array" }}>Array</Link></li>
			<li><Link to={{ pathname: "/form" }}>Form</Link></li>
			<li><Link to={{ pathname: "/form2" }}>Form2</Link></li>
			<li><Link to={{ pathname: "/FormUseRef" }}>Form Ref</Link></li>
			<li><Link to={{ pathname: "/ConditionalRendering" }}>ConditionalRendering</Link></li>
			<li><Link to={{ pathname: "/ConditionalRendering" }}>ConditionalRendering</Link></li>
			<li><Link to={{ pathname: "/LifeCycle" }}>LifeCycle</Link></li>
			<li><Link to={{ pathname: "/LifeCycleClassComponent" }}>LifeCycleClassComponent</Link></li>
			<li><Link to={{ pathname: "/ParentComponent" }}>Data Transfer</Link></li>
			<li><Link to={{ pathname: "/product-details/123" }}>Product Details</Link></li>
			<li><Link to={{ pathname: "/GetData" }}>GetData</Link></li>
			<li><Link to={{ pathname: "/AddData" }}>AddData</Link></li>
			<li><Link to={{ pathname: "/material-form" }}>Material Form</Link></li>
			<li><Link to={{ pathname: "/signin" }}>SignIn</Link></li>
			<li><Link to={{ pathname: "/table" }}>Table</Link></li>
		</ul>
	)
}

export default Navigation;