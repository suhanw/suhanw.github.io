import cn from 'classnames';
import style from './style';
import utilStyle from 'styles/utils';
import Date from 'components/date';

const Blog = ({ pinnedPosts }) => (
	<section id={'blog-section'} className={cn(utilStyle.homeSection, style.blog)}>
		<h2 className={style.title}>blog</h2>
		<ul className={style.posts}>
			{pinnedPosts?.map((post, i) => (
				<li key={`${post?.id}-i`} className={style.post}>
					<a href={`/posts/${post?.id}`} className={style.postImage} style={{ backgroundImage: `url(${post?.image})`}} />
					<a href={`/posts/${post?.id}`} className={style.postTitle}>{post?.title}</a>
					<small className={style.postDate}>
						<Date dateString={post?.date} />
					</small>
					<p className={style.postDescription}>{post?.description}</p>
				</li>
			))}
		</ul>
	</section>
);

export default Blog;
