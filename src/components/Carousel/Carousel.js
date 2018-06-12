import React from 'react';

const Carousel = () =>
	<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
		<ol className="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		 </ol>
		<div className="carousel-inner">
			<div className="carousel-item active">
				<img className="d-block w-100" src="http://www.menu.am/resources/default/img/restaurant_products/big/1464191283,7815.jpeg" alt="First slide" />
			</div>
			<div className="carousel-item">
				<img className="d-block w-100" src="http://www.menu.am/resources/default/img/restaurant_products/big/1464191283,7815.jpeg" alt="Second slide" />
			</div>
			<div className="carousel-item">
				 <img className="d-block w-100" src="http://www.menu.am/resources/default/img/restaurant_products/big/1464191283,7815.jpeg" alt="Third slide" />
			</div>
		 </div>
	</div>
export default Carousel;