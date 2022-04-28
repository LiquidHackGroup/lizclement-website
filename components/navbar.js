import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ navbarProps }) => {
	const { height, isLandingPage, headerTitle, backgroundImage } =
		navbarProps[0];

	const [open, setOpen] = useState(false);

	const handleSidebar = () => {
		setOpen(!open);
	};

	return (
		<header
			className={
				isLandingPage
					? `h-screen bg-contain bg-black-600 sm:bg-cover`
					: `h-fit bg-cover`
			}
			style={{
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				// backgroundSize: 'contain',
				backgroundImage: `url(${backgroundImage})`,
			}}
		>
			<nav className="relative container mx-auto py-6">
				<div className="hidden sm:flex items-center justify-around">
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
							<Link href="/school">
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
							<Link href="/shop">
								<a className="text-white uppercase hover:text-gold-600 duration-500">
									Shop
								</a>
							</Link>
						</li>
						<li>
							<Link href="/blog">
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
				</div>
				<div className="block sm:hidden relative container mx-auto py-2">
					<div className="flex w-full justify-between px-4">
						<Link
							href="/"
							className="cursor-pointer flex items-center"
							passHref
						>
							<div>
								<Image
									src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_51,w_223/v1650114114/LizClementPhotos/Liz_Logo-removebg-preview_tpipeg.png"
									alt="lizclement-logo"
									className="cursor-pointer"
									width={223}
									height={51}
								/>
							</div>
						</Link>
						<i
							onClick={handleSidebar}
							color="white"
							className="bx bx-menu text-white cursor-pointer text-3xl"
						></i>
					</div>
					<div
						className={`${
							open ? 'left-0' : 'left-[-100%]'
						}  bg-glass-300 z-[100] leading-[40px] shadow-md fixed h-[100%] top-0 px-2 duration-500`}
					>
						<div className="flex justify-between py-6">
							<Link
								href="/"
								className="cursor-pointer flex items-center"
								passHref
							>
								<div>
									<Image
										src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_51,w_223/v1650114114/LizClementPhotos/Liz_Logo-removebg-preview_tpipeg.png"
										alt="lizclement-logo"
										className="cursor-pointer"
										width={223}
										height={51}
									/>
								</div>
							</Link>
							<i
								onClick={handleSidebar}
								color="white"
								className="bx bx-x text-white cursor-pointer text-3xl"
							></i>
						</div>
						<ul className="flex flex-col items-center">
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
								<Link href="/blog">
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
					</div>
				</div>
			</nav>
			{!isLandingPage && (
				<div className="mt-[120px] pb-8 px-24">
					<h2 className="text-gold-600 font-semibold tracking-widest text-2xl sm:text-5xl uppercase">
						{headerTitle}
					</h2>
				</div>
			)}
			{isLandingPage && (
				<div className="flex flex-col items-center space-y-2 justify-center mt-[120px] sm:mt-[260px] my-auto">
					<div className="mx-7">
						<Image
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650859333/LizClementPhotos/Get_dx0baw.png"
							alt="lizclement-text"
							className="cursor-pointer"
							width={583}
							height={87}
						/>
					</div>
					<div className="text-center">
						<button className="uppercase text-gold-600 hover:bg-transparent hover:text-gold-600 outline outline-offset-2 hover:outline-2 outline-2 px-2 sm:px-4 py-2 sm:py-4 duration-500">
							Make Appointment
						</button>
					</div>
				</div>
			)}
			{isLandingPage && (
				<div className="absolute flex h-[354px] w-3/4 left-[50%] translate-x-[-50%] top-[95%] sm:top-[90%]">
					<div>
						<Image
							className="object-cover"
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012162/LizClementPhotos/20220109_091023_ffjmes.jpg"
							alt="lizclement-salon"
							width={270}
							height={354}
						/>
					</div>
					<div>
						<Image
							className="object-cover"
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012118/LizClementPhotos/WhatsApp_Image_2022-01-30_at_6.12.41_PM_zmmnyx.jpg"
							alt="lizclement-salon"
							width={270}
							height={354}
						/>
					</div>
					<div>
						<Image
							className="object-cover"
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012128/LizClementPhotos/WhatsApp_Image_2022-02-11_at_5.03.21_PM_lsvv0l.jpg"
							alt="lizclement-salon"
							width={270}
							height={354}
						/>
					</div>
					<div>
						<Image
							className="object-cover"
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
