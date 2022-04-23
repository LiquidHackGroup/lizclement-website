import Head from 'next/head';
import Image from 'next/image';
import { Layout, ContactSection } from '../components';

const navbarProps = [
	{
		isLandingPage: false,
		height: '333px',
		headerTitle: 'Contacts',
		backgroundImage:
			'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650708280/LizClementPhotos/38_rfzes6.jpg',
	},
];

const Contact = () => {
	return (
		<Layout navbarProps={navbarProps}>
			<ContactSection />
		</Layout>
	);
};

export default Contact;
