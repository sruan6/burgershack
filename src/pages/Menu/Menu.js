import React, { Component } from 'react';

class Menu extends Component {
	render() {
		return(
			<div className='menu'>
				<div className='row'>
					<div className='col-lg-1'></div>

						<div className='col-lg-10'>
							<div className='dot'>
								<div className='container'>
									<div className='row'>
										<div className='col-md-6'>
											<h2>-Burgers-</h2>
											<p>This burger is the besjksflhfsldkjhfslkdhfdklahjfdlakhfdlkhfaljhft</p>
											<div className="row">
												<div className="col-md-6">
													<h3>1/4&nbsp;lb&nbsp;burger&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.25</h3>
												</div>
												<div className="col-md-6">
													<h3>Veggie&nbsp;burger&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.25</h3>
												</div>
											</div>
											<h2>-Fries-</h2>
												<div className="row">
													<div className="col-md-6">
														<h3>French&nbsp;Fries&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.25</h3>
														<h3>Garlic&nbsp;Fries&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.25</h3>
													</div>
													<div className="col-md-6">
														<h3>Curly&nbsp;Fries&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.25</h3>
														<h3>Onion&nbsp;Rings&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.25</h3>
													</div>
												</div>
										</div>
										<div className='col-md-6'>

										</div>
									</div>
								</div>
							</div>
						</div>

					<div className='col-lg-1'></div>
				</div> 
			</div> 
		);
	}
};

export default Menu;