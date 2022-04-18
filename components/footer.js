import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return (
		<div className="py-14 bg-black-600">
			<div className="flex justify-center">
				<Image
					src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_68,w_298/v1650114114/LizClementPhotos/Liz_Logo-removebg-preview_tpipeg.png"
					alt="lizclement-logo"
					className="cursor-pointer"
					width={298}
					height={68}
				/>
			</div>
			<ul className="flex justify-center items-center space-x-6 py-8">
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
					<Link href="/school">
						<a className="text-white uppercase hover:text-gold-600 duration-500">
							School
						</a>
					</Link>
				</li>
				<li>
					<Link href="/shop">
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
					<Link href="/contact">
						<a className="text-white uppercase hover:text-gold-600 duration-500">
							Contact
						</a>
					</Link>
				</li>
			</ul>
			<div className="flex justify-center space-x-4">
				<Link href="/" className="flex items-center" passHref>
					<div>
						<Image
							className="cursor-pointer"
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650266701/LizClementPhotos/Facebook_x6jbpg.png"
							alt="lizclement-Facebook_x6jbpg"
							width={36}
							height={36}
						/>
					</div>
				</Link>
				<Link href="/" className="flex items-center" passHref>
					<div>
						<Image
							className="cursor-pointer"
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650266701/LizClementPhotos/Twitter_cu1rno.png"
							alt="lizclement-Twitter"
							width={36}
							height={36}
						/>
					</div>
				</Link>
				<Link href="/" className="flex items-center" passHref>
					<div>
						<Image
							className="cursor-pointer"
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650266700/LizClementPhotos/Instagram_gfnee9.png"
							alt="lizclement-Instagram"
							width={36}
							height={36}
						/>
					</div>
				</Link>
			</div>
			<div className="py-4">
				<div className="flex justify-center">
					<p className="text-white">
						&copy; {new Date().getFullYear()} All Rights Reserved.{' '}
						<span className="text-gold-600">LizClement Beauty Salon</span>{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
