import cn from 'classnames';
import style from './style';
import utilStyle from 'styles/utils';

const Credits = () => (
	<section id={'credits-section'} className={cn(utilStyle.homeSection, style.credits)}>
		<h2 className={style.title}>credits</h2>
		<a href="https://www.freepik.com/vectors/background" target="_blank">Background vector created by macrovector - www.freepik.com</a>
		<a href="https://stackshare.io/" target="_blank">Technology icons created by Stackshare - stackshare.io</a>
	</section>
);

export default Credits;
