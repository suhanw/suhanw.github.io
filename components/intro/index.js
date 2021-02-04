import Head from 'next/head';
import style from './style';

const Intro = () => (<>
	<Head>
		<link rel="preload" as="image" href={'/images/digital-garden.png'} />
	</Head>
	<section id={'intro-section'} className={style.intro}>
		<div className={style.imageWrapper}>
			<span className={style.image} style={{ backgroundImage: `url(/images/digital-garden.png)` }} />
		</div>
		<h1 className={style.title}>welcome</h1>
		<p className={style.subtitle}>to my digital garden.</p>
	</section>
</>);

export default Intro;
