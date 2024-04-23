// export default function Button({text, color}){
// 	return (
// 		<>
// 		<button className="primaryButton" style={{color:'red', backgroundColor:color, marginTop:'10px'}} > {text} </button>
// 		</>
// 	);
// }


const Button = ({text, color}) => {
	return (
		<>
		<button className="primaryButton" style={{color:'red', backgroundColor:color, marginTop:'10px'}} > {text} </button>
		</>
	);
}

export default Button;