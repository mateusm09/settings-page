const withNext = (Component, next) =>
	function HOC(props) {
		return <Component next={next} {...props} />;
	};

const Route = ({ currentRoute, route, next, component }) => {
	const NewComponent = withNext(component, next);

	if (currentRoute === route) return <NewComponent />;
	return <></>;
};

export default Route;
