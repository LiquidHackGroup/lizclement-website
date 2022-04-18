import Head from 'next/head';
import Image from 'next/image';
import { Layout, SchoolSection } from '../components';

const navbarProps = [
	{
		isLandingPage: false,
		height: '333px',
		headerTitle: 'Beauty School',
		backgroundImage:
			'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650270693/LizClementPhotos/istockphoto-1165263716-1024x1024_j1dxtb.jpg',
	},
];

const School = () => {
	return (
		<Layout navbarProps={navbarProps}>
			<SchoolSection />
		</Layout>
	);
};

export default School;
