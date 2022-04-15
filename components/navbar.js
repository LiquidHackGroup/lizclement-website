import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<header
			className="h-[643px]"
			style={{
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundImage:
					"url('https://res.cloudinary.com/dgisuffs0/image/upload/v1650012138/LizClementPhotos/9S3A0398_snrdsb.jpg')",
			}}
		>
			<nav className="relative container mx-auto py-6">
				<div className="flex items-center justify-around">
					<ul className="flex items-center space-x-6">
						<li>
							<Link href="/">
								<a className="text-white uppercase hover:text-gold-600 duration-500">
									Home
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a className="text-white uppercase hover:text-gold-600 duration-500">
									Gallery
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a className="text-white uppercase hover:text-gold-600 duration-500">
									School
								</a>
							</Link>
						</li>
					</ul>
					<Link href="/" className="cursor-pointer flex items-center" passHref>
						<div>
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_52,w_140/v1641167608/LiquidHack_1_aoh2xd.png"
								alt="liquidhack-logo"
								className="cursor-pointer"
								width={140}
								height={52}
							/>
						</div>
					</Link>
					<ul className="flex items-center space-x-6">
						<li>
							<Link href="/">
								<a className="text-white uppercase hover:text-gold-600 duration-500">
									Shop
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a className="text-white uppercase hover:text-gold-600 duration-500">
									Blog
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a className="text-white uppercase hover:text-gold-600 duration-500">
									Contact
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<div className="absolute flex h-[354px] w-3/4 left-[50%] translate-x-[-50%] top-[560px]">
				<div>
					<Image
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012162/LizClementPhotos/20220109_091023_ffjmes.jpg"
						alt="liquidhack-logo"
						className="cursor-pointer"
						width={270}
						height={354}
					/>
				</div>
				<div>
					<Image
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012118/LizClementPhotos/WhatsApp_Image_2022-01-30_at_6.12.41_PM_zmmnyx.jpg"
						alt="liquidhack-logo"
						className="cursor-pointer"
						width={270}
						height={354}
					/>
				</div>
				<div>
					<Image
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012128/LizClementPhotos/WhatsApp_Image_2022-02-11_at_5.03.21_PM_lsvv0l.jpg"
						alt="liquidhack-logo"
						className="cursor-pointer"
						width={270}
						height={354}
					/>
				</div>
				<div>
					<Image
						src="https://res.cloudinary.com/dgisuffs0/image/upload/v1650012099/LizClementPhotos/salon-image-1_xdrgtm.jpg"
						alt="liquidhack-logo"
						className="cursor-pointer"
						width={270}
						height={354}
					/>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
