import Head from 'next/head';
import style from './style';
import { getAllPostIds, getPostData } from 'data';
import Date from 'components/date';

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
	// console.log({ postData })
	return (
		<>
			<Head>
				<title>{postData?.title}</title>
			</Head>
			<article className={style.contentWrapper}>
				<h1 className={style.title}>{postData?.title}</h1>
				<div className={style.description}>{postData?.description}</div>
				<div className={style.date}>
					<Date dateString={postData.date} />
					<span className={style.socialIcons}>
						<img src={'/images/linked-in.png'} />
						<img src={'/images/twitter.png'} />
					</span>
				</div>
				<div className={style.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
				<div className={style.footer}>
					<span className={style.socialIcons}>
						<img src={'/images/linked-in.png'} />
						<img src={'/images/twitter.png'} />
					</span>
				</div>
			</article>
		</>
	);
};

export default Post;
