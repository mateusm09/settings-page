import { useRef, useState } from "preact/hooks";
import background from "../../components/background";
import box from "../../components/box";
import Button from "../../components/button";
import Input from "../../components/input";
import Dialog from "../../components/dialog";
import { host } from "../../components/app";

const WifiHub = props => {
	const [ssid, setSsid] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const dialogRef = useRef();

	async function onSubmit(event) {
		event.preventDefault();
		setLoading(true);
		try {
			if (ssid.length <= 0) {
				dialogRef.current.showDialog({ text: "Insira o SSID da rede", error: true });
				setLoading(false);
				return;
			}

			if (password.length < 8) {
				dialogRef.current.showDialog({ text: "A senha precisa ter no mínimo 8 caracteres", error: true });
				setLoading(false);
				return;
			}

			const res = await fetch(`${host}/ap`, {
				method: "POST",
				body: {
					ssid,
					password,
				},
			});

			console.log("FETCH RESULT", res);

			dialogRef.current.showDialog({ text: "Salvo com sucesso" });
			props.next("/save");
			return;
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
						title={"Senha do Wi-Fi do Hub"}
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
