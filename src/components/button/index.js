import style from "./style";
import Loading from "../../assets/icons/loading";

const Button = props => {
	const { loading } = props;

	const renderLoading = () => {
		return <Loading size={25} color={"black"} class={style.loading} />;
	};

	return (
		<button class={style.button} {...props} disabled={loading}>
			{!loading ? props.children : renderLoading()}
		</button>
	);
};

export default Button;
