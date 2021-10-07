import { useState } from "preact/hooks";
import EyeIcon from "../icons/eye";
import EyeSlashIcon from "../icons/eyeSlash";
import style from "./style.css";

const Input = props => {
	const { title, secureEntry } = props;
	const [secure, setSecure] = useState(true);
	return (
		<div class={style.container}>
			<div class={style.title}>{title}</div>
			<div class={style.inputContainer}>
				{secureEntry ? (
					<>
						<input {...props} type={secure ? "password" : "text"} />
						<div onClick={() => setSecure(!secure)}>
							{!secure ? <EyeSlashIcon size={20} color={"#FFF"} /> : <EyeIcon size={20} color={"#FFF"} />}
						</div>
					</>
				) : (
					<input {...props} />
				)}
			</div>
		</div>
	);
};

export default Input;
