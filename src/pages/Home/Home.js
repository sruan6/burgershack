import React, { Component } from 'react';
import Carousel from './../../components/Carousel';

class Home extends Component {
	render(){
		return(
			<div className="home">
				<div className='row'>
					<div className='col-md-4'></div>
						<div className='col-md-4 col-12'>
							<Carousel />
						</div>
					<div className='col-md-4'></div>
				</div>
			</div>
		)
	}
}
export default Home;