import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
	return (
		<div className='relative'>
			<div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				<div>
					<img
						loading='lazy'
						src='https://rebrand.ly/banner_carousel1'
						alt='banner1'
					/>
				</div>
				<div>
					<img
						loading='lazy'
						src='https://rebrand.ly/banner_carousel2'
						alt='banner2'
					/>
				</div>
				<div>
					<img
						loading='lazy'
						src='https://rebrand.ly/banner_carousel3'
						alt='banner3'
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;
