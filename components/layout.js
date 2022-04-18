import Navbar from './navbar';
import SEO from './seo';
import Footer from './footer';

const Layout = ({ navbarProps, children }) => {
	return (
		<>
			<SEO title="LizClement Beauty Salon" />
			<Navbar navbarProps={navbarProps} />
			<main className="py-2 w-screen min-h-screen">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
