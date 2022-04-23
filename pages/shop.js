import Head from 'next/head';
import Image from 'next/image';
import { Layout, Products } from '../components';

const navbarProps = [
	{
		isLandingPage: false,
		height: '333px',
		headerTitle: 'Product List',
		backgroundImage:
			'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650708280/LizClementPhotos/38_rfzes6.jpg',
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
