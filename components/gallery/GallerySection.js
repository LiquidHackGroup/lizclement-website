import React from 'react';

const GallerySection = () => {
	return (
		<div className="py-14 px-24">
			<ul className="flex space-x-6 uppercase">
				<li className="cursor-pointer text-gold-600">Show All</li>
				<li className="cursor-pointer hover:text-gold-600">Hair Salon</li>
				<li className="cursor-pointer hover:text-gold-600">Nailbar</li>
				<li className="cursor-pointer hover:text-gold-600">Beauty Services</li>
			</ul>
		</div>
	);
};

export default GallerySection;
