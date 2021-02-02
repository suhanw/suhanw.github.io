import cn from 'classnames';
import style from './style';
import utilStyle from 'styles/utils';

const Blog = ({ pinnedPosts }) => {
	return (
		<section id={'blog-section'} className={cn(utilStyle.homeSection, style.blog)}>
			<h2 className={style.title}>blog</h2>
		</section>
	);
};

export default Blog;
