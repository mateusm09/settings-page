// Code-splitting is automated for `routes` directory
import Home from "../pages/home";
import WifiLocal from "../pages/wifiLocal";
import WifiHub from "../pages/wifiHub";
import Save from "../pages/save";
import background from "./background";
import Route from "./Route";
import { useState } from "preact/hooks";

export const host = "http://192.168.1.162:80";
// export const host = "http://localhost:80";

const App = () => {
	const [currentRoute, setCurrentRoute] = useState("/");

	function next(route) {
		setCurrentRoute(route);
	}

	return (
		<div class={background.container} id="app">
			<Route next={next} currentRoute={currentRoute} route={"/"} component={Home} />
			<Route next={next} currentRoute={currentRoute} route={"/local"} component={WifiLocal} />
			<Route next={next} currentRoute={currentRoute} route={"/hub"} component={WifiHub} />
			<Route next={next} currentRoute={currentRoute} route={"/save"} component={Save} />
		</div>
	);
};

export default App;
