import React from 'react';
import Image from 'next/image';

const BlogSection = () => {
	return (
		<div className="pt-4 px-auto px-7 sm:px-24">
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
				<div className="">
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
		</div>
	);
};

export default BlogSection;
