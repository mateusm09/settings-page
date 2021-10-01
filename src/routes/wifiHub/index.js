import { route } from "preact-router";
import { useRef, useState } from "preact/hooks";
import background from "../../components/background";
import box from "../../components/box";
import Button from "../../components/button";
import Input from "../../components/input";
import Dialog from "../../components/dialog";

const WifiHub = props => {
	const [ssid, setSsid] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const dialogRef = useRef();

	function onSubmit(event) {
		event.preventDefault();
		setLoading(true);
		try {
			if (ssid.length > 0) {
				// TODO send SSID to Hub
			} else {
				dialogRef.current.showDialog({ text: "Insira o SSID da rede", error: true });
				setLoading(false);
				return;
			}

			if (password.length >= 8) {
				// TODO send password to Hub
			} else {
				dialogRef.current.showDialog({ text: "A senha precisa ter no mínimo 8 caracteres", error: true });
				setLoading(false);
				return;
			}

			dialogRef.current.showDialog({ text: "Salvo com sucesso" });
			setTimeout(() => route("/save"), 2000);
		} catch (error) {
			dialogRef.current.showDialog({ text: "Erro ao salvar", error: true });
		}
		setLoading(false);
	}

	return (
		<div class={background.container}>
			<div class={box.top}>
				<h1>Wi-Fi do Hub</h1>
				<p>
					Aqui você irá configurar a rede Wi-Fi que o seu Hub irá cria. Para sua segurança, evite senhas como
					12345678
				</p>
				<form onSubmit={onSubmit}>
					<Input onChange={e => setSsid(e.target.value)} title={"Nome do Wi-Fi do Hub"} />
					<Input
						onChange={e => setPassword(e.target.value)}
						title={"Senha do Wi-Fi di Hub"}
						type="password"
						secureEntry
					/>
					<Button loading={loading}>Salvar</Button>
				</form>
			</div>

			<Dialog ref={dialogRef} />
		</div>
	);
};

export default WifiHub;
