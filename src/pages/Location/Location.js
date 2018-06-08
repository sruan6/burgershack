import React, { Component } from 'react';

class Location extends Component {
	render() {
		return (
			<div className='row'>
				<div className='col-sm-12 col-md-6'>
					<a href='https://www.google.com/maps/place/Burger+Shack/data=!3m1!4b1!4m2!3m1!1s0x808580fb28ee016d:0x4bc1151d3b734095' target='_blank'><img src='https://maps.googleapis.com/maps/api/staticmap?scale=1&size=520x410&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visiblity:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=en&region=US&markers=color:0xddaa44|37.8055009,-122.4120484&zoom=16&client=google-presto&signature=zx7YM_UM9u00e0PLorAmLJQjwEw'/></a>
				</div>
				<div className='col-sm-12 col-md-6'>
					<h2 className='d-flex justify-content-center'>BURGER SHACK</h2>

					<div className='container'>
					<div className='row'>

							<div className='col-md-6'>
								<h3>Address</h3>
									<p>
									2237 Powell Street, San Francisco, 
									<br/>
									CA, 94133
									</p>
								<button>Get Direction</button>

								<h3>Contact</h3>
								<a href='tel:+1-415-523-6818'>(415)523-6818</a>
							</div>

							<div className='col-md-6'>
								<h3>Business Hours</h3>
								<p>
									Mon. 11:00 AM – 9:00 PM
									<br/>
									Tue. 11:00 AM – 9:00 PM
									<br/>
									Wed. 11:00 AM – 9:00 PM
									<br/>
									Thu. 11:00 AM – 9:00 PM
									<br/>
									Fri. 11:00 AM – 10:00 PM
									<br/>
									Sat. 11:00 AM – 10:00 PM
									<br/>
									Sun. 11:00 AM – 9:00 PM
								</p>
							</div>
					</div>
					</div>

				</div>	


			</div>
		);
	}
}
export default Location;