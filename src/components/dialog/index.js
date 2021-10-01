import { forwardRef } from "preact/compat";
import { useEffect, useImperativeHandle, useState } from "preact/hooks";
import style from "./style.css";

const Dialog = (props, ref) => {
	const { children } = props;

	const [show, setShow] = useState(false);
	const [timeoutId, setTimeoutId] = useState(-1);
	const [error, setError] = useState(false);
	const [text, setText] = useState("");

	useEffect(() => {
		return () => {
			clearTimeout(timeoutId);
		};
	}, [timeoutId]);

	const showDialog = ({ text, timeout, error = false }) => {
		setShow(true);
		setError(error);
		setText(text);
		const id = setTimeout(setShow, timeout || 3000, false);
		setTimeoutId(id);
	};

	useImperativeHandle(ref, () => ({ showDialog }));

	if (show)
		return (
			<div
				class={style.container}
				style={{ backgroundColor: error ? "#ff7b7b" : "#aaf9a8", color: error ? "#b53535" : "#52a350" }}
			>
				{text}
			</div>
		);
	else return <></>;
};

export default forwardRef(Dialog);
