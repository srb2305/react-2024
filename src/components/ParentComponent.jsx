import ChildComponent from './ChildComponent';

function ParentComponent(){
	
	const productTitle = 'T-shirt for men';
	const productId = 15;

	const addToCart = () => {
		alert('Added Successfully...');
	}

	return (
		<>
			<h1>Parent Component</h1>
			<ChildComponent title={productTitle} id={productId} addToCart={addToCart} />
			End Page


		</>
	);
}

export default ParentComponent;