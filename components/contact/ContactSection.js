import React from 'react';

const ContactSection = () => {
	return (
		<div className="py-10 mx-24 bg-white">
			<div className="px-10">
				<h2 className="text-4xl uppercase font-semibold tracking-wide">
					Contact Us
				</h2>
				<h4 className="py-8 text-gray-500">
					We're open for any suggestion or just to have a chat.
				</h4>
				<div className="flex justify-center space-x-6">
					<div className="md:w-1/3">
						<h4 className="text-3xl uppercase font-semibold tracking-wide">
							Address:
						</h4>
						<h5 className="text-xl capitalize text-gray-500 py-4">
							P.O. Box 6301 - 00610 Nairobi Kenya
						</h5>
					</div>
					<div className="md:w-1/3">
						<h4 className="text-3xl uppercase font-semibold tracking-wide">
							Email:
						</h4>
						<h5 className="text-xl text-gray-500 py-4">
							support@lizclementsalon.com
						</h5>
					</div>
					<div className="md:w-1/3">
						<h4 className="text-3xl uppercase font-semibold tracking-wide">
							Phone:
						</h4>
						<h5 className="text-xl capitalize text-gray-500 py-4">
							+254 785 242 025
						</h5>
					</div>
				</div>
				<div className="flex justify-center space-x-6">
					<div className="md:w-1/3">
						<input
							type="text"
							className="pl-[14px] focus:outline-none border border-gray-400 w-full my-4 py-6 h-10 rounded-sm bg-lightGray"
							placeholder="Your Name"
						/>
					</div>
					<div className="md:w-1/3">
						<input
							type="text"
							className="pl-[14px] focus:outline-none border border-gray-400 w-full my-4 py-6 h-10 rounded-sm bg-lightGray"
							placeholder="Email Address"
						/>
					</div>
					<div className="md:w-1/3">
						<input
							type="text"
							className="pl-[14px] focus:outline-none border border-gray-400 w-full my-4 py-6 h-10 rounded-sm bg-lightGray"
							placeholder="Subject"
						/>
					</div>
				</div>
				<div>
					<div>
						<textarea
							className="w-full my-4 pl-[14px] pt-[16px] focus:outline-none border border-gray-400"
							name=""
							id=""
							cols="30"
							rows="8"
							placeholder="Your Message..."
						></textarea>
					</div>
				</div>
				<div className="pb-8">
					<button className="uppercase text-white bg-gold-600 hover:bg-transparent hover:text-gold-600 outline outline-offset-2 hover:outline-2 outline-2 px-4 py-4 duration-500">
						Send Message
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
