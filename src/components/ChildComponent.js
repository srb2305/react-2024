function ChildComponent(props){
	const { id, title, addToCart } = props;

	return(
		<>
			<h1>Child Component</h1>
			<p>id: {id}</p>
			<p>Title: {title}</p>

			<button onClick={addToCart}> Add to Cart </button>
		</>
	);
}

export default ChildComponent;