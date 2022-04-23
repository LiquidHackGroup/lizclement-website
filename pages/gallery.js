import Head from 'next/head';
import Image from 'next/image';
import { Layout, GallerySection } from '../components';

const navbarProps = [
	{
		isLandingPage: false,
		height: '333px',
		headerTitle: 'Portolio Gallery',
		backgroundImage:
			'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650708280/LizClementPhotos/38_rfzes6.jpg',
	},
];

const Gallery = () => {
	return (
		<Layout navbarProps={navbarProps}>
			<GallerySection />
		</Layout>
	);
};

export default Gallery;
