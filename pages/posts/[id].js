import Head from 'next/head';
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
	return (
		<Layout topMenu>
			<Head>
				<title>{`${postData?.title} by Suhan Wijaya`}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
