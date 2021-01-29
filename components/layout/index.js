import Menu from 'components/menu';
import style from './style';

const Layout = ({ children }) => (
	<div className={style.layout}>
		<Menu />
		{children}
	</div>
);

export default Layout;
