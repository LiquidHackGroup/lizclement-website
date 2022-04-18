import React from 'react';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Section = () => {
	return (
		<>
			{/* Working days */}
			<div className="pt-72 px-40">
				<div className="flex space-x-8 justify-end">
					<div className="w-1/3">
						<h1 className="text-5xl font-bold text-right uppercase">
							Working Hours
						</h1>
					</div>
					<div className="flex flex-col justify-between w-1/2">
						<div className="flex justify-between border-b pb-4">
							<h4 className="text-xl font-semibold uppercase">Working Days</h4>
							<h4 className="text-xl ">9AM - 7PM</h4>
						</div>
						<div className="flex justify-between border-b py-4">
							<h4 className="text-xl font-semibold uppercase">Saturday</h4>
							<h4 className="text-xl ">10AM - 7PM</h4>
						</div>
						<div className="flex justify-between border-b py-4">
							<h4 className="text-xl font-semibold uppercase">Sunday</h4>
							<h4 className="text-xl uppercase">Closed</h4>
						</div>
					</div>
				</div>
			</div>
			{/* A whole new world */}

			{/* Products */}
			<div className="py-14 px-40">
				<div className="flex flex-col md:flex-row">
					<div className="md:w-1/4">
						<div className="flex items-center justify-center">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650258942/LizClementPhotos/products_5_msr6zp.jpg"
								alt="lizclement-image"
								className="cursor-pointer"
								width={257}
								height={343}
							/>
						</div>
						<div className="text-center pt-4">
							<h4 className="uppercase text-gray-700">Hair Care</h4>
							<h4 className="uppercase font-semibold">Dry Shampoo</h4>
							<h4 className="text-gray-700">KES 800.00</h4>
						</div>
					</div>
					<div className="md:w-1/4">
						<div className="flex items-center justify-center">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650258946/LizClementPhotos/products_2_k8z66p.jpg"
								alt="lizclement-image"
								className="cursor-pointer"
								width={257}
								height={343}
							/>
						</div>
						<div className="text-center pt-4">
							<h4 className="uppercase text-gray-700">Hair Care</h4>
							<h4 className="uppercase font-semibold">Dry Shampoo</h4>
							<h4 className="text-gray-700">KES 800.00</h4>
						</div>
					</div>
					<div className="md:w-1/4">
						<div className="flex items-center justify-center">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650258940/LizClementPhotos/products_3_klztgm.jpg"
								alt="lizclement-image"
								className="cursor-pointer"
								width={257}
								height={343}
							/>
						</div>
						<div className="text-center pt-4">
							<h4 className="uppercase text-gray-700">Hair Care</h4>
							<h4 className="uppercase font-semibold">Dry Shampoo</h4>
							<h4 className="text-gray-700">KES 800.00</h4>
						</div>
					</div>
					<div className="md:w-1/4">
						<div className="flex items-center justify-center">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650258952/LizClementPhotos/products_1_szeg22.jpg"
								alt="lizclement-image"
								className="cursor-pointer"
								width={257}
								height={343}
							/>
						</div>
						<div className="text-center pt-4">
							<h4 className="uppercase text-gray-700">Hair Care</h4>
							<h4 className="uppercase font-semibold">Dry Shampoo</h4>
							<h4 className="text-gray-700">KES 800.00</h4>
						</div>
					</div>
				</div>
				<div className="text-center py-8">
					<button className="uppercase text-white bg-gold-600 hover:bg-transparent hover:text-gold-600 outline outline-offset-2 hover:outline-2 outline-2 px-4 py-4 duration-500">
						More Products
					</button>
				</div>
			</div>
			<div className="">
				<div className="flex flex-col space-x-6 md:flex-row">
					<div>
						<Image
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012104/LizClementPhotos/WhatsApp_Image_2021-11-16_at_21.15.12_cpaher.jpg"
							alt="lizclement-image"
							width={620}
							height={620}
						/>
					</div>
					<div className="space-y-3">
						<div>
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012128/LizClementPhotos/WhatsApp_Image_2022-02-11_at_5.03.21_PM_lsvv0l.jpg"
								alt="lizclement-image"
								width={620}
								height={302}
							/>
						</div>
						<div>
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012118/LizClementPhotos/WhatsApp_Image_2022-01-30_at_6.12.40_PM_1_tsqoub.jpg"
								alt="lizclement-image"
								width={620}
								height={301}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="py-14">
				<h2 className="uppercase text-xl md:text-4xl font-bold text-center">
					Our Latest Deals
				</h2>
			</div>
			<div className="">
				<h2 className="uppercase text-xl md:text-4xl font-bold text-center">
					Testimonials
				</h2>
				<Carousel
					showArrows={false}
					infiniteLoop={true}
					showThumbs={false}
					showStatus={false}
					autoPlay={true}
					interval={3000}
				>
					<div>
						<Image
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012104/LizClementPhotos/WhatsApp_Image_2021-11-16_at_21.15.12_cpaher.jpg"
							alt="lizclement-image"
							width={139}
							height={139}
						/>
						<div className="myCarousel">
							<h3>Shirley Fultz</h3>
							<h4>Designer</h4>
							<p>
								It is freeing to be able to catch up on customized news and not
								be distracted by a social media element on the same site
							</p>
						</div>
					</div>
					<div>
						<Image
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650114116/LizClementPhotos/new-pic_qgw6ch.png"
							alt="lizclement-image"
							width={139}
							height={139}
						/>
						<div className="myCarousel">
							<h3>Jane Doe</h3>
							<h4>Stylist</h4>
							<p>
								I finally met with the hairstylist today after two months of
								growing my hair out.
							</p>
						</div>
					</div>
					<div>
						<Image
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012105/LizClementPhotos/WhatsApp_Image_2021-11-16_at_21.12.05_r54gbg.jpg"
							alt="lizclement-image"
							width={139}
							height={139}
						/>
						<div className="myCarousel">
							<h3>Kate Sorel</h3>
							<h4>Hair Dresser</h4>
							<p>
								The simple and intuitive hair design makes it easy for me to
								handle my hair. I highly recommend LizClement Beauty Salon to my
								peers.
							</p>
						</div>
					</div>
				</Carousel>
			</div>
		</>
	);
};

export default Section;
