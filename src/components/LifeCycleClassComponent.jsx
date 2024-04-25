import { Component } from 'react';
import Form from './Form';

class LifeCycleClassComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			username : '',
			email 	 : '',
			contact  : ''
		};
		console.log('constructor load');
	}

	componentDidMount() {
		console.log('componentDidMount');
		// api call for load data
	}
	
	compoentDidUpdate() {
		console.log('compoentDidUpdate');
	}

	componentWillUnmount(){
		console.log('compoentnt will unmoint');
	}

	render(){
		return (
			<>
				<h1 >Class Component</h1>
				<Form />
			</>
		);
	}
}

export default LifeCycleClassComponent;