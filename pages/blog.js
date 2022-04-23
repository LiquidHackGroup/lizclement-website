import Head from 'next/head';
import Image from 'next/image';
import { Layout, BlogSection } from '../components';

const navbarProps = [
	{
		isLandingPage: false,
		height: '333px',
		headerTitle: 'Blog',
		backgroundImage:
			'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1650708280/LizClementPhotos/38_rfzes6.jpg',
	},
];

const Blog = () => {
	return (
		<Layout navbarProps={navbarProps}>
			<BlogSection />
		</Layout>
	);
};

export default Blog;
