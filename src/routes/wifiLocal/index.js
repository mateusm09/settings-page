import background from "../../components/background";
import box from "../../components/box";
import Button from "../../components/button";
import Input from "../../components/input";

const WifiLocal = props => {
	function onSubmit(event) {
		event.preventDefault();
	}

	return (
		<div class={background.container}>
			<div class={box.top}>
				<h1>Configurações de Wi-Fi</h1>
				<p>Aqui você irá configurar a rede Wi-Fi em que o seu Hub irá se onectar</p>
				<form onSubmit={onSubmit}>
					<Input title={"Nome do seu Wi-Fi"} />
					<Input title={"Senha do seu Wi-Fi"} type="password" secureEntry />
					<Button>Salvar</Button>
				</form>
			</div>
		</div>
	);
};

export default WifiLocal;
