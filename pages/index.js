import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from 'components/layout';
import Intro from 'components/intro';
import About from 'components/about';
import Blog from 'components/blog';
import Projects from 'components/projects';
import Technologies from 'components/technologies';
import Contact from 'components/contact';
import Credits from 'components/credits';
import { getPinnedPosts } from 'data';

export const getStaticProps = async () => {
	const pinnedPosts = getPinnedPosts();
	return {
		props: {
			pinnedPosts,
		}
	}
}

const Home = ({ pinnedPosts }) => {
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

		if (typeof window !== 'undefined') {
			console.log({router})
			window.history.replaceState(null, null, router?.pathname)
		}

		router.events.on('hashChangeComplete', handleHashChange);

		return () => {
			router.events.off('hashChangeComplete', handleHashChange);
		};
	}, []);

	const metaTitle = 'Suhan Wijaya';
	const metaDescription = 'Right-brained techie who builds apps with JavaScript, React, Redux, Node.js, Hapi, Express, NoSQL, SQL, REST, GraphQL.';
	const metaImage = 'https://www.suhanwijaya.com/images/digital-garden-social.png';
	const metaUrl = 'https://www.suhanwijaya.com/index.html';

	return (
		<Layout>
			<Head>
				{/* Primary Meta Tags */}
				<title>{metaTitle}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="title" content={metaTitle} />
				<meta name="description" content={metaDescription} />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={metaUrl} />
				<meta property="og:title" content={metaTitle} />
				<meta property="og:description" content={metaDescription} />
				<meta property="og:image" content={metaImage} />

				{/* Twitter */}
				<meta name="twitter:title" content={metaTitle} />
				<meta name="twitter:description" content={metaDescription} />
				<meta name="twitter:image" content={metaImage} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Intro />
			<About />
			<Blog pinnedPosts={pinnedPosts} />
			<Projects />
			<Contact />
			<Technologies />
			<Credits />
		</Layout>
	);
};

export default Home;
