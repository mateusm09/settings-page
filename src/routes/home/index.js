import { h } from "preact";
import { Link } from "preact-router";
import Button from "../../components/button";
import box from "../../components/box";
import background from "../../components/background";

const Home = () => (
	<div class={background.container}>
		<div class={box.top}>
			<h1>Olá!</h1>
			<p>Nesta página você irá configurar o sistema EnergyIO.</p>
			<p>Aqui você pode configurar o wifi do seu Hub, bem como parear os seus sensores.</p>

			<Link href="/wifilocal">
				<Button>Vamos lá!</Button>
			</Link>
		</div>
	</div>
);

export default Home;
