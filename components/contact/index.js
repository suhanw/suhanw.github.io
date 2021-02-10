import cn from 'classnames';
import style from './style';
import utilStyle from 'styles/utils';

const Contact = (props) => {
	return (
		<section id={'contact-section'} className={cn(style.contact, utilStyle.homeSection)}>
			<h2 className={style.title}>contact</h2>
			<div className={style.row}>
				<span className={style.leftCol}>Email: </span>
				<a href={'mailto:suhanw@gmail.com'} className={style.rightCol}>suhanw@gmail.com</a>
			</div>
			<div className={style.row}>
				<span className={style.leftCol}>LinkedIn: </span>
				<a href={'https://www.linkedin.com/in/suhanwijaya/'} className={style.rightCol}>suhanwijaya</a>
			</div>
			<div className={style.row}>
				<span className={style.leftCol}>Twitter: </span>
				<a href={'https://twitter.com/suhanw'} className={style.rightCol}>@suhanw</a>
			</div>
			<div className={style.row}>
				<span className={style.leftCol}>GitHub: </span>
				<a href={'https://github.com/suhanw'} className={style.rightCol}>suhanw</a>
			</div>
		</section>
	);
};

export default Contact;
