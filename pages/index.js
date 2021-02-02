import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from 'components/layout';
import Intro from 'components/intro';
import About from 'components/about';
import Blog from 'components/blog';
import Projects from 'components/projects';

const HomePage = () => {
	const router = useRouter();

	useEffect(() => {
		const handleHashChange = (url, options) => {
			if (typeof document === 'undefined' || typeof window === 'undefined') return;

			const sectionId = `${url.substring(2)}-section`;
			const section = document.getElementById(sectionId);
			const scrollDistance = section?.offsetTop;

			window.scrollTo({ top: scrollDistance, behavior: 'smooth' });
		};

		handleHashChange(router?.asPath);

		router.events.on('hashChangeComplete', handleHashChange);

		return () => {
			router.events.off('hashChangeComplete', handleHashChange);
		};
	}, []);

	return (
		<Layout>
			<Head>
				<title>Suhan Wijaya</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Intro />
			<About />
			<Blog />
			<Projects />
		</Layout>
	);
};

export default HomePage;
