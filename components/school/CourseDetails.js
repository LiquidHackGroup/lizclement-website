import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CourseDetails = () => {
	return (
		<div className="py-10 px-7 sm:px-24">
			<h2 className="text-2xl font-semibold tracking-wide uppercase">
				Course Details
			</h2>
			<p className="md:w-1/2 py-4">
				Our school programs are designed to be engaging and fun while helping
				you to develop the skills and knowledge you’ll need to succeed.
			</p>
			<p className="md:w-1/2 pb-4">You will gain:</p>
			<ul className="list-disc marker:text-gold-600 pb-4 px-10">
				<li>Know-how and hands-on training</li>
				<li>Fundamentals & advanced techniques</li>
				<li>Ability to master haircutting, hair styling, and haircoloring</li>
				<li>And much more...</li>
			</ul>
			<Link href="/" className="cursor-pointer flex items-center" passHref>
				<div className="py-4">
					<button className="uppercase text-white bg-gold-600 hover:bg-transparent hover:text-gold-600 outline outline-offset-2 hover:outline-2 outline-2 px-4 py-4 duration-500">
						Enroll Now
					</button>
				</div>
			</Link>
		</div>
	);
};

export default CourseDetails;
