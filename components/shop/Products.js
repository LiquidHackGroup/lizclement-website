import React from 'react';
import Image from 'next/image';

const Products = () => {
	return (
		<div className="py-10 px-24">
			<div className="flex justify-center space-x-6">
				<div className="w-3/4">
					<div className="flex justify-between items-center">
						<h2>SHOWING 1 - 6 OF 18 RESULTS</h2>
						<div className="border rounded overflow-hidden flex w-64">
							<input
								type="text"
								className="px-4 py-2"
								placeholder="Search..."
							/>
							<button className="flex items-center justify-center px-4 border-l">
								<svg
									className="h-4 w-4 text-grey-dark"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
								</svg>
							</button>
						</div>
					</div>
					<div className="flex flex-col flex-wrap gap-y-8 md:flex-row py-8">
						<div className="md:w-1/3">
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
						<div className="md:w-1/3">
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
						<div className="md:w-1/3">
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
						<div className="md:w-1/3">
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
						<div className="md:w-1/3">
							<div className="flex items-center justify-center">
								<Image
									src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650258974/LizClementPhotos/products_4_defl6y.jpg"
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
						<div className="md:w-1/3">
							<div className="flex items-center justify-center">
								<Image
									src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650278760/LizClementPhotos/product_6_qhidmm.jpg"
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
				</div>
				<div className="w-1/4">
					<h2>Categories</h2>
				</div>{' '}
			</div>
		</div>
	);
};

export default Products;
