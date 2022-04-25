import { useRouter } from 'next/router';
import Navbar from './navbar';
import SEO from './seo';
import Footer from './footer';

const Layout = ({ navbarProps, children }) => {
	const router = useRouter();
	const { pathname } = router;

	return (
		<>
			<SEO title="LizClement Beauty Salon" />
			<Navbar navbarProps={navbarProps} />
			<main
				className={
					pathname === '/contact' || pathname === '/blog'
						? 'py-2 w-screen min-h-fit bg-faintGray'
						: 'py-2 w-screen min-h-screen'
				}
			>
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
