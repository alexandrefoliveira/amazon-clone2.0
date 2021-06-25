import React from 'react';
import Product from './Product';

const ProductFeed = ({ products }) => {
	return (
		<div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
			{products.slice(0, 4).map((product) => {
				return <Product key={product.id} {...product} />;
			})}

			<img
				className='md:col-span-full'
				src='https://rebrand.ly/ads_amazon'
				alt='ads_amazon'
			/>

			<div className='md:col-span-2'>
				{products.slice(4, 5).map((product) => {
					return <Product key={product.id} {...product} />;
				})}
			</div>

			{products.slice(5, products.length).map((product) => {
				return <Product key={product.id} {...product} />;
			})}
		</div>
	);
};

export default ProductFeed;
