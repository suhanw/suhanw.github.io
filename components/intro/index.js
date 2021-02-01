import style from './style';

const Intro = (props) => (
	<section id={'intro'} className={style.intro}>
		<img className={style.image} src={'/images/digital-garden.png'} alt={'Picture of a greenhouse garden.'} />
		<h1 className={style.title}>welcome</h1>
		<p className={style.subtitle}>to my digital garden.</p>
	</section>
);

export default Intro;
