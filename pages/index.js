import Head from 'next/head';
import Image from 'next/image';
import { Layout, Section } from '../components';

const navbarProps = [
	{
		isLandingPage: true,
		height: '643px',
		headerTitle: 'Get a new look',
		backgroundImage:
			'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650012138/LizClementPhotos/9S3A0398_snrdsb.jpg',
	},
];

const Home = () => {
	return (
		<Layout navbarProps={navbarProps}>
			<Section />
		</Layout>
	);
};

export default Home;
