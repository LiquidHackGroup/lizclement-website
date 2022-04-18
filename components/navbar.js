import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ navbarProps }) => {
	const { height, isLandingPage, headerTitle, backgroundImage } =
		navbarProps[0];

	return (
		<header
			className={`h-[${height}]`}
			style={{
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundImage: `url(${backgroundImage})`,
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
							<Link href="/gallery">
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
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_68,w_298/v1650114114/LizClementPhotos/Liz_Logo-removebg-preview_tpipeg.png"
								alt="lizclement-logo"
								className="cursor-pointer"
								width={298}
								height={68}
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
			{!isLandingPage && (
				<div className="mt-[120px] px-24">
					<h2 className="text-gold-600 font-semibold tracking-widest text-5xl uppercase">
						{headerTitle}
					</h2>
				</div>
			)}
			{isLandingPage && (
				<div className="flex flex-col items-center space-y-2 justify-center mt-[260px] my-auto">
					<h2
						className="text-gold-600"
						style={{
							font: 'normal normal normal 93px/86px AridITC TT',
							textTransform: 'capitalize',
						}}
					>
						{headerTitle}
					</h2>
					<div className="text-center">
						<button className="uppercase text-gold-600 hover:bg-transparent hover:text-gold-600 outline outline-offset-2 hover:outline-2 outline-2 px-4 py-4 duration-500">
							Make Appointment
						</button>
					</div>
				</div>
			)}
			{isLandingPage && (
				<div className="absolute flex h-[354px] w-3/4 left-[50%] translate-x-[-50%] top-[560px]">
					<div>
						<Image
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012162/LizClementPhotos/20220109_091023_ffjmes.jpg"
							alt="lizclement-salon"
							width={270}
							height={354}
						/>
					</div>
					<div>
						<Image
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012118/LizClementPhotos/WhatsApp_Image_2022-01-30_at_6.12.41_PM_zmmnyx.jpg"
							alt="lizclement-salon"
							width={270}
							height={354}
						/>
					</div>
					<div>
						<Image
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012128/LizClementPhotos/WhatsApp_Image_2022-02-11_at_5.03.21_PM_lsvv0l.jpg"
							alt="lizclement-salon"
							width={270}
							height={354}
						/>
					</div>
					<div>
						<Image
							src="https://res.cloudinary.com/dgisuffs0/image/upload/v1650114116/LizClementPhotos/new-pic_qgw6ch.png"
							alt="lizclement-salon"
							width={270}
							height={354}
						/>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
