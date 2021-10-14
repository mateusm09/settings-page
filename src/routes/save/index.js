import Button from "../../components/button";
import background from "../../components/background";
import box from "../../components/box";
import Dialog from "../../components/dialog";

import { useRef, useState } from "preact/hooks";

const Save = () => {
	const [loading, setLoading] = useState(false);
	const dialogRef = useRef();

	async function onClick() {
		setLoading(true);

		try {
			const res = await fetch({
				url: `${host}/save`,
				method: "POST",
				body: {
					save: true,
				},
			});

			console.log("RESPONSE", res);

			dialogRef.current.showDialog({ text: "Salvo com sucesso" });
		} catch (error) {
			dialogRef.current.showDialog({ text: "Erro ao salvar", error: true });
		}

		setLoading(false);
	}

	return (
		<div class={background.container}>
			<div class={box.top}>
				<h1>Hub Configurado!</h1>
				<p>Agora só basta salvar as suas altaerações, para o seu Hub reiniciar e aplicá-las.</p>
				<Button onClick={onClick}>Salvar</Button>
				<Dialog ref={dialogRef} />
			</div>
		</div>
	);
};

export default Save;
