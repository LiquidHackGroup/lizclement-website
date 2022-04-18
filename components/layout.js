import Navbar from './navbar';
import SEO from './seo';
import Footer from './footer';

const Layout = ({ children }) => {
	return (
		<>
			<SEO title="LizClement Beauty Salon" />
			<Navbar />
			<main className="py-2 w-screen min-h-screen">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
