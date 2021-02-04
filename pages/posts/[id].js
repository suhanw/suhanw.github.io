import Head from 'next/head';
import { useRouter } from 'next/router';
import style from './style';
import { getAllPostIds, getPostData } from 'data';
import Date from 'components/date';
import Layout from 'components/layout';

export const getStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
};

const Post = ({ postData }) => {
	const router = useRouter();

	const metaTitle = `${postData?.title} by Suhan Wijaya`;
	const metaDescription = postData?.description;
	const metaImage = postData?.image;
	const metaUrl = `https://www.suhanwijaya.com${router?.asPath}`;
	
	return (
		<Layout topMenu>
			<Head>
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
				
				{postData?.canonical_url && <link rel="canonical" href={postData.canonical_url} />}
				
			</Head>
			<article className={style.contentWrapper}>
				<h1 className={style.title}>{postData?.title}</h1>
				<div className={style.description}>{postData?.description}</div>
				<div className={style.date}>
					<Date dateString={postData.date} />
					{/* <SocialIcons /> */}
				</div>
				<div className={style.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
				<div className={style.footer}>
					{/* <SocialIcons /> */}
				</div>
			</article>
		</Layout>
	);
};

const SocialIcons = ({ url, title }) => {
	// https://www.linkedin.com/shareArticle?mini=true&url=https://dev.to/suhanw/intro-to-react-server-side-rendering-nh9&title=Intro%20to%20React%20Server%20Side%20Rendering&summary=How%20to%20build%20a%20React%20SSR%20app%20without%20any%20tooling%20or%20framework&source=DEV%20Community
	// https://twitter.com/intent/tweet?text=%22Intro%20to%20React%20Server%20Side%20Rendering%22%20by%20@suhanw%20%23DEVCommunity%20https://dev.to/suhanw/intro-to-react-server-side-rendering-nh9

	return (
		<span className={style.socialIcons}>
			<img src={'/images/linked-in.png'} />
			<img src={'/images/twitter.png'} />
		</span>
	); 
};

export default Post;
