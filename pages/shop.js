import Head from 'next/head';
import Image from 'next/image';
import { Layout, Products } from '../components';

const navbarProps = [
	{
		isLandingPage: false,
		height: '333px',
		headerTitle: 'Product List',
		backgroundImage:
			'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650270693/LizClementPhotos/istockphoto-1165263716-1024x1024_j1dxtb.jpg',
	},
];

const Shop = () => {
	return (
		<Layout navbarProps={navbarProps}>
			<Products />
		</Layout>
	);
};

export default Shop;
