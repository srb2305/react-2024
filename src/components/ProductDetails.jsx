import { useParams } from 'react-router-dom';
  
function ProductDetails(){
	const { id } = useParams();
	return(
		<>
			<h1> ProductDetails </h1>
			Produc tId : {id}
		</>
	);
}
export default ProductDetails;