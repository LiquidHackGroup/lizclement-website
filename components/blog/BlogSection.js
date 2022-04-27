import React from 'react';
import Image from 'next/image';

const BlogSection = () => {
	return (
		<div className="py-8 px-auto px-7 sm:px-24">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
				<div className="md:col-span-2">
					<Image
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650859330/LizClementPhotos/48_cucisr.jpg"
						alt="lizclement-image"
						className="cursor-pointer"
						width={717}
						height={483}
					/>
				</div>
				<div className="bg-white shadow-sm">
					<div className="grid grid-cols-2">
						<div className="bg-gold-600 py-4">
							<h2 className="uppercase text-white text-center">Popular</h2>
						</div>
						<div className="py-4">
							<h2 className="uppercase text-center">Recent</h2>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-2 pt-6 px-2">
						<div className="rounded-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650859330/LizClementPhotos/48_cucisr.jpg"
								alt="lizclement-image"
								className="rounded-full"
								width={56}
								height={56}
							/>
						</div>
						<div className="col-span-3 leading-3">
							<p className="text-sm">
								Healthy hair is something that everyone wants
							</p>
							<p className="text-xs text-gray-500">24 May 2021</p>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-2 pt-6 px-2">
						<div className="rounded-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650859330/LizClementPhotos/48_cucisr.jpg"
								alt="lizclement-image"
								className="rounded-full"
								width={56}
								height={56}
							/>
						</div>
						<div className="col-span-3 leading-3">
							<p className="text-sm">
								Healthy hair is something that everyone wants
							</p>
							<p className="text-xs text-gray-500">24 May 2021</p>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-2 pt-6 px-2">
						<div className="rounded-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650859330/LizClementPhotos/48_cucisr.jpg"
								alt="lizclement-image"
								className="rounded-full"
								width={56}
								height={56}
							/>
						</div>
						<div className="col-span-3 leading-3">
							<p className="text-sm">
								Healthy hair is something that everyone wants
							</p>
							<p className="text-xs text-gray-500">24 May 2021</p>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-2 pt-6 px-2">
						<div className="rounded-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650859330/LizClementPhotos/48_cucisr.jpg"
								alt="lizclement-image"
								className="rounded-full"
								width={56}
								height={56}
							/>
						</div>
						<div className="col-span-3 leading-3">
							<p className="text-sm">
								Healthy hair is something that everyone wants
							</p>
							<p className="text-xs text-gray-500">24 May 2021</p>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-2 pt-6 px-2">
						<div className="rounded-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650859330/LizClementPhotos/48_cucisr.jpg"
								alt="lizclement-image"
								className="rounded-full"
								width={56}
								height={56}
							/>
						</div>
						<div className="col-span-3 leading-3">
							<p className="text-sm">
								Healthy hair is something that everyone wants
							</p>
							<p className="text-xs text-gray-500">24 May 2021</p>
						</div>
					</div>
				</div>
			</div>
			<div className="py-14">
				<h3 className="uppercase text-3xl font-semibold">Editor's Pick</h3>
			</div>
			<div className="grid grid-cols-3 gap-2">
				<div className="bg-white grid grid-cols-2 col-span-2">
					<div className="m-4">
						<div>
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/v1650859334/LizClementPhotos/49_ynoogx.jpg"
								alt="lizclement-image"
								className="object-cover"
								width={347}
								height={377}
							/>
						</div>
						<div className="flex justify-around pt-3">
							<h4 className="text-gray-500">LizClement</h4>
							<li className="marker:text-gold-600">
								<span className="text-gray-500">05 Jun 2021</span>
							</li>
						</div>
						<div className="py-4">
							<h4 className="font-semibold">Hair Accessories You should Try</h4>
							<p className="text-sm py-3">
								When it comes to styling your hair, there are likely a few
								styles and accessories that you are comfortable with and stick
								to. Whether it's the classic ponytail, braids, or a messy bun,
								these styles are popular and simple. Even if you choose a simple
								style, there are many accessories you can use to add…
							</p>
						</div>
					</div>
					<div>
						<h2>Inner section 2</h2>
					</div>
				</div>
				{/* <div className="bg-white">
					<h1>Section 2</h1>
				</div> */}
				<div className="bg-white">
					<h1>Section 3</h1>
				</div>
			</div>
		</div>
	);
};

export default BlogSection;
