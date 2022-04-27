import React from 'react';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Section = () => {
	return (
		<>
			{/* Working days */}
			<div className="pt-36 md:pt-72 px-auto px-4 sm:px-40">
				<div className="flex flex-col md:flex-row md:space-x-8 items-center sm:items-start justify-center md:justify-end">
					<div className="w-full md:w-1/3">
						<h1 className="text-2xl mb-8 md:mb-0 md:text-5xl font-bold text-center md:text-right uppercase">
							Working Hours
						</h1>
					</div>
					<div className="flex flex-col space-y-4 justify-center md:justify-between w-full md:w-1/2">
						<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-center sm:justify-between border-b pb-4">
							<h4 className="text-base sm:text-xl font-semibold uppercase">
								Working Days
							</h4>
							<h4 className="text-base sm:text-xl">6AM - 10PM</h4>
						</div>
						<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-center sm:justify-between border-b py-4">
							<h4 className="text-base sm:text-xl font-semibold uppercase">
								Saturday
							</h4>
							<h4 className="text-base sm:text-xl ">6AM - 10PM</h4>
						</div>
						<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-center sm:justify-between border-b py-4">
							<h4 className="text-base sm:text-xl font-semibold uppercase">
								Sunday
							</h4>
							<h4 className="text-base sm:text-xl uppercase">7AM - 9PM</h4>
						</div>
					</div>
				</div>
			</div>
			{/* A whole new world */}
			<div
				className="sm:h-[422px] w-full flex flex-col items-center sm:items-end justify-center my-14 py-8 sm:py-0"
				style={{
					backgroundBlendMode: 'multiply',
					backgroundColor: '#949494',
					// filter: 'brightness(60%)',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					mixBlendMode: 'hard-light',
					backgroundImage: `url('https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650708286/LizClementPhotos/29_fukz8w.jpg')`,
				}}
			>
				<div className="mx-7 sm:px-32 md:px-40 md:pt-0 pb-2 sm:pb-0">
					<Image
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650859335/LizClementPhotos/Unique_ham0dv.png"
						alt="lizclement-image"
						className="cursor-pointer object-cover"
						width={444}
						height={186}
					/>
				</div>
				<div className="sm:px-32 md:px-40 md:pt-8 pb-8 sm:pb-0">
					<h2 className="text-white text-xl md:text-4xl font-light uppercase tracking-widest">
						A Whole New World,
					</h2>
					<h2 className="text-white text-xl md:text-4xl font-light uppercase tracking-widest">
						A Whole New Look.
					</h2>
				</div>
			</div>

			{/* Products */}
			<div className="py-8 sm:py-14 px-2 sm:px-28 md:px-40">
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
					<div className="">
						<div className="flex items-center justify-center">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650258942/LizClementPhotos/products_5_msr6zp.jpg"
								alt="lizclement-image"
								className="cursor-pointer object-cover"
								width={257}
								height={343}
							/>
						</div>
						<div className="text-center pt-4">
							<h4 className="uppercase text-sm text-gray-700">Hair Care</h4>
							<h4 className="uppercase font-semibold">Skin Awaken</h4>
							<h4 className="text-gray-700 text-sm">KES 1099.00</h4>
						</div>
					</div>
					<div className="">
						<div className="flex items-center justify-center">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650258946/LizClementPhotos/products_2_k8z66p.jpg"
								alt="lizclement-image"
								className="cursor-pointer object-cover"
								width={257}
								height={343}
							/>
						</div>
						<div className="text-center pt-4">
							<h4 className="uppercase text-sm text-gray-700">Hair Care</h4>
							<h4 className="uppercase font-semibold">Color Silk</h4>
							<h4 className="text-gray-700 text-sm">KES 1299.00</h4>
						</div>
					</div>
					<div className="">
						<div className="flex items-center justify-center">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650258940/LizClementPhotos/products_3_klztgm.jpg"
								alt="lizclement-image"
								className="cursor-pointer object-cover"
								width={257}
								height={343}
							/>
						</div>
						<div className="text-center pt-4">
							<h4 className="uppercase text-sm text-gray-700">Hair Care</h4>
							<h4 className="uppercase font-semibold">Eye Brush</h4>
							<h4 className="text-gray-700 text-sm">KES 999.00</h4>
						</div>
					</div>
					<div className="">
						<div className="flex items-center justify-center">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650258952/LizClementPhotos/products_1_szeg22.jpg"
								alt="lizclement-image"
								className="cursor-pointer object-cover"
								width={257}
								height={343}
							/>
						</div>
						<div className="text-center pt-4">
							<h4 className="uppercase text-sm text-gray-700">Hair Care</h4>
							<h4 className="uppercase font-semibold">Super Lustrous</h4>
							<h4 className="text-gray-700 text-sm">KES 800.00</h4>
						</div>
					</div>
				</div>
				<div className="text-center py-8">
					<button className="uppercase text-white bg-gold-600 hover:bg-transparent hover:text-gold-600 outline outline-offset-2 hover:outline-2 outline-2 px-4 py-2 sm:py-4 duration-500">
						More Products
					</button>
				</div>
			</div>
			<div className="px-4 sm:px-0">
				<div className="flex flex-col justify-center sm:space-x-4 sm:flex-row">
					<div>
						<Image
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012104/LizClementPhotos/WhatsApp_Image_2021-11-16_at_21.15.12_cpaher.jpg"
							alt="lizclement-image"
							width={620}
							height={620}
						/>
					</div>
					<div className="sm:space-y-2">
						<div>
							<Image
								className="object-cover"
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012128/LizClementPhotos/WhatsApp_Image_2022-02-11_at_5.03.21_PM_lsvv0l.jpg"
								alt="lizclement-image"
								width={620}
								height={302}
							/>
						</div>
						<div>
							<Image
								className="object-cover"
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012118/LizClementPhotos/WhatsApp_Image_2022-01-30_at_6.12.40_PM_1_tsqoub.jpg"
								alt="lizclement-image"
								width={620}
								height={302}
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
			<div
				className="h-[348px] w-full flex flex-col items-center py-8"
				style={{
					backgroundBlendMode: 'multiply',
					backgroundColor: '#949494',
					// filter: 'brightness(60%)',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					mixBlendMode: 'hard-light',
					backgroundImage: `url('https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650708278/LizClementPhotos/35_bodljx.jpg')`,
				}}
			>
				<div className="w-full md:w-1/2">
					<h2 className="uppercase text-white text-xl md:text-3xl font-semibold tracking-widest text-center">
						DON’T MISS OUT OUR SPECIAL OFFERS! SUBSCRIBE!
					</h2>
				</div>
				<div className="w-full md:w-2/5 px-2 py-12 flex flex-col sm:flex-row items-center">
					<input
						type="text"
						className="pl-[14px] focus:outline-none border border-gray-400 w-full my-4 py-3 sm:py-7 sm:h-10 rounded-sm bg-lightGray"
						placeholder="Your email address"
					/>
					<button className="uppercase text-white bg-gold-600 px-6 sm:px-8 sm:py-2 h-10 sm:h-14 duration-500">
						Subscribe
					</button>
				</div>
			</div>
			<div className="py-14">
				<h2 className="uppercase mb-8 md:mb-0 text-xl md:text-4xl font-bold text-center">
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
