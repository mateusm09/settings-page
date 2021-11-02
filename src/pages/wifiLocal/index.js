import { useEffect, useRef, useState } from "preact/hooks";
import background from "../../components/background";
import box from "../../components/box";
import Button from "../../components/button";
import Input from "../../components/input";
import Dialog from "../../components/dialog";
import { sendWifi } from "../../http";

const WifiLocal = props => {
	const [ssid, setSsid] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	// const [wifis, setWifis] = useState([]);

	const dialogRef = useRef();

	useEffect(() => {
		// async function func() {
		// 	try {
		// 		// const res = await fetch("http://192.168.1.163:80/wifis");
		// 		const res = await fetch(`${host}/wifis`);
		// 		const str = await res.text();
		// 		console.log("TEXT", str);
		// 		const array = JSON.parse(str);
		// 		console.log("WIFIs", array);
		// 	} catch (error) {
		// 		console.log("ERROR", error);
		// 	}
		// }
		// func();
	}, []);

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

			const res = await sendWifi("/local", ssid, password);

			console.log("FETCH RES", res);

			dialogRef.current.showDialog({ text: "Salvo com sucesso" });
			props.next("/hub");
			return;
		} catch (error) {
			dialogRef.current.showDialog({ text: "Erro ao salvar", error: true });
			setLoading(false);
		}
	}

	return (
		<div class={background.container}>
			<div class={box.top}>
				<h1>Seu Wi-Fi</h1>
				<p>Aqui você irá configurar a rede Wi-Fi em que o seu Hub irá se conectar</p>
				<form onSubmit={onSubmit}>
					<Input onChange={e => setSsid(e.target.value)} title={"Nome do seu Wi-Fi"} />
					<Input
						onChange={e => setPassword(e.target.value)}
						title={"Senha do seu Wi-Fi"}
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

export default WifiLocal;
