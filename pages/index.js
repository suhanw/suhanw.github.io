import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from 'components/layout';
import Intro from 'components/intro';
import About from 'components/about';

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

		router.events.on('hashChangeComplete', handleHashChange);

		return () => {
			router.events.off('hashChangeComplete', handleHashChange);
		};
	});

	return (
		<Layout>
			<Intro />
			<About />
		</Layout>
	);
};

export default HomePage;
