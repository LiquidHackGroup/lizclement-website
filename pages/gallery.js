import Head from 'next/head';
import Image from 'next/image';
import { Layout, GallerySection } from '../components';

const navbarProps = [
	{
		isLandingPage: false,
		height: '333px',
		headerTitle: 'Portolio Gallery',
		backgroundImage:
			'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650270693/LizClementPhotos/istockphoto-1165263716-1024x1024_j1dxtb.jpg',
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
