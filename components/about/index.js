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
				<li>👷🏻‍♂️ Senior Software Engineer at <a href={'https://www.spresso.com'} target={'_blank'}>Spresso.com</a>.</li>
				<li>🏗 Building apps with Nx, JavaScript, TypeScript, React, GraphQL, Node.js, GCP.</li>
				<li>🌱 Currently learning and experimenting with Jenkins, GitHub Actions, Pulumi.</li>
			</ul>
			<ul className={cn(style.content, style.mobile)}>
				<li>👷🏻‍♂️ Sr. Software Engineer at <a href={'https://www.spresso.com'} target={'_blank'}>Spresso.com</a>.</li>
				<li>🏗 JavaScript, TypeScript, React, Node.</li>
				<li>🌱 Learning Jenkins, GitHub Actions, GCP.</li>
			</ul>
			{/* <p className={cn(style.content, style.mobile)}>View my <a href='/assets/suhan_wijaya_resume.pdf' target='_blank'>resume</a>.</p>
			<p className={cn(style.content, style.desktop)}>View my <a href='/assets/suhan_wijaya_resume.pdf' target='_blank'>resume</a>.</p> */}
		</section>
	);
};

export default About;
