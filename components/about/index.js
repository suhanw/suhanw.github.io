import cn from 'classnames';
import style from './style';
import utilStyle from 'styles/utils';

const About = (props) => {
	return (
		<section id={'about-section'} className={cn(style.about, utilStyle.homeSection)}>
			<h2 className={style.title}>about</h2>
			<p className={cn(style.content, style.desktop)}>
				Right-brained techie passionate about coding, product, UX, and fun with my family.
			</p>
			<ul className={cn(style.content, style.desktop)}>
				<li>👷🏻‍♂️ Senior Software Engineer at Boxed.com. Check us out for your bulk grocery needs.</li>
				<li>🌱 Currently learning and experimenting with TypeScript and Nx build system.</li>
				<li>💬 Let's chat JavaScript, React, Apollo/GraphQL, Hapi, UX/UI, CSS, web performance, etc.</li>
			</ul>
			<ul className={cn(style.content, style.mobile)}>
				<li>👷🏻‍♂️ Sr. Software Engineer at Boxed.com.</li>
				<li>🏗 JavaScript, React, Node, GraphQL.</li>
				<li>🌱 Learning TypeScript & Nx build system.</li>
			</ul>
			{/* <p className={cn(style.content, style.mobile)}>View my <a href='/assets/suhan_wijaya_resume.pdf' target='_blank'>resume</a>.</p>
			<p className={cn(style.content, style.desktop)}>View my <a href='/assets/suhan_wijaya_resume.pdf' target='_blank'>resume</a>.</p> */}
		</section>
	);
};

export default About;
