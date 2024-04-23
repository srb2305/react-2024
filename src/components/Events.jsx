function Events(){
	
	function helloWorld(){
		console.log('Hello');
	};

	function welcomeMessage(){
		console.log('welcomeMessage');
	}

	const welcomeAgain = () => {
		console.log('welcomeAgain');
	}

	return(
		<>
			<h1>Events</h1>

			<button onClick={helloWorld} > Click Me </button>
			<button onClick={ () => welcomeMessage()  } > Welcome Msg </button>
			<button onClick={ () => welcomeAgain()  } > Welcome Again </button>
		</>
	);
}

export default Events;