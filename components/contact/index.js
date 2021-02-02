import cn from 'classnames';
import style from './style';
import utilStyle from 'styles/utils';

const Contact = (props) => {
	return (
		<section id={'contact-section'} className={cn(style.contact, utilStyle.homeSection)}>
			<h2 className={style.title}>contact</h2>
		</section>
	);
};

export default Contact;
