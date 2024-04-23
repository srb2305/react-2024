
const data = {
	name: 'RamKumar',
	email: 'ramkuamr@gmail.com',
	contact: '98989898989',
	image: 'https://srbitsolution.com/images/banner.png'
};

function About() {
	
	return (
		<>
			<h2 className="heading">About</h2>
			<h5>We Protect Families, Track Vehicles & Help Our Clients To Grow Their Business</h5>
			<p>SRB Tracking pursuit could be a worldwide leader in international positioning system (GPS) and mobile pursuit system by enabling App-to-App and App-to-Web quality solutions and platform to power the web of Things (IoT). </p>
			<p>Name: {data.name}  </p>
			<p>Email: {data.email}  </p>
			<p>Contact:  {data.contact} </p> 
			<p>Image:  <img src={data.image} style={{ height:100, width:100, borderRadius:'50%',background:'white' }} /> </p>
		</>
	);
}

export default About;

