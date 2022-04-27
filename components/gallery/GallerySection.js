import React from 'react';
import Image from 'next/image';

const GallerySection = () => {
	return (
		<div className="py-10 px-7 sm:px-24">
			<ul className="flex flex-wrap space-x-6 uppercase">
				<li className="cursor-pointer text-gold-600">Show All</li>
				<li className="cursor-pointer hover:text-gold-600">Hair Salon</li>
				<li className="cursor-pointer hover:text-gold-600">Nailbar</li>
				<li className="cursor-pointer hover:text-gold-600">Beauty Services</li>
			</ul>
			<div className="py-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
				<div>
					<Image
						className="object-cover"
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012103/LizClementPhotos/WhatsApp_Image_2021-11-16_at_21.15.07_mhe6kg.jpg"
						alt="lizclement-image"
						width={300}
						height={349}
					/>
				</div>
				<div>
					<Image
						className="object-cover"
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012118/LizClementPhotos/WhatsApp_Image_2022-01-30_at_6.12.41_PM_zmmnyx.jpg"
						alt="lizclement-image"
						width={300}
						height={349}
					/>
				</div>
				<div>
					<Image
						className="object-cover"
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012122/LizClementPhotos/WhatsApp_Image_2022-02-10_at_4.25.14_PM_wiedb6.jpg"
						alt="lizclement-image"
						width={300}
						height={349}
					/>
				</div>
				<div>
					<Image
						className="object-cover"
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012105/LizClementPhotos/WhatsApp_Image_2021-11-16_at_21.12.05_r54gbg.jpg"
						alt="lizclement-image"
						width={300}
						height={349}
					/>
				</div>
				<div>
					<Image
						className="object-cover"
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012107/LizClementPhotos/WhatsApp_Image_2021-11-16_at_21.15.14_vbcfaa.jpg"
						alt="lizclement-image"
						width={300}
						height={349}
					/>
				</div>
				<div>
					<Image
						className="object-cover"
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012109/LizClementPhotos/WhatsApp_Image_2022-01-30_at_6.12.30_PM_yc1noa.jpg"
						alt="lizclement-image"
						width={300}
						height={349}
					/>
				</div>
				<div>
					<Image
						className="object-cover"
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012141/LizClementPhotos/WhatsApp_Image_2022-02-16_at_3.50.19_PM_1_wqeukt.jpg"
						alt="lizclement-image"
						width={300}
						height={349}
					/>
				</div>
				<div>
					<Image
						className="object-cover"
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012130/LizClementPhotos/WhatsApp_Image_2022-02-11_at_5.03.21_PM_2_bt6xdj.jpg"
						alt="lizclement-image"
						width={300}
						height={349}
					/>
				</div>
			</div>
			<div className="text-center py-4">
				<button className="uppercase text-white bg-gold-600 hover:bg-transparent hover:text-gold-600 outline outline-offset-2 hover:outline-2 outline-2 px-4 py-4 duration-500">
					View More
				</button>
			</div>
		</div>
	);
};

export default GallerySection;
