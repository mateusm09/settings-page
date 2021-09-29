import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => (
	<header class={style.header}>
		<Link href="/">
			<h1>EnergyIO</h1>
		</Link>
		<nav>
			<a>teste</a>
		</nav>
	</header>
);

export default Header;
