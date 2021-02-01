import cn from 'classnames';
import style from './style';

const Intro = (props) => {
	return (
		<section id={'about-section'} className={style.about}>
			<h2 className={style.title}>about</h2>
			<p className={cn(style.content, style.desktop)}>
				Right-brained techie passionate about coding, product, UX, and fun adventures with my family.
			</p>
			<ul className={cn(style.content, style.desktop)}>
				<li>👷🏻‍♂️ I work at Boxed.com as the Growth Tech Lead. Check us out for your grocery needs (in bulk!).</li>
				<li>🌱 I'm currently learning about and experimenting with webpack 5 Module Federation.</li>
				<li>💬 Happy to chat JavaScript, React, Apollo/GraphQL, Hapi, UX/UI, CSS, web performance, etc.</li>
			</ul>
			<ul className={cn(style.content, style.mobile)}>
				<li>👷🏻‍♂️ Growth Tech Lead at Boxed.com.</li>
				<li>⌨️ JavaScript, React, Node, GraphQL.</li>
				<li>🌱 Learning webpack Module Federation.</li>
			</ul>
			<p className={style.content}>View my <a href='/assets/suhan_wijaya_resume.pdf' target='_black'>resume</a>.</p>
		</section>
	);
};

export default Intro;
