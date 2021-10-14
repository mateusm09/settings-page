import { Router } from "preact-router";
// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import WifiLocal from "../routes/wifiLocal";
import WifiHub from "../routes/wifiHub";
import Save from "../routes/save";
import background from "./background";

// export const host = "http://192.168.1.163:80";
export const host = "http://localhost:80";

const App = () => (
	<div class={background.container} id="app">
		<Router>
			<Home path="/" />
			<WifiLocal path="/wifilocal" />
			<WifiHub path="/wifihub" />
			<Save path="/save" />
		</Router>
	</div>
);

export default App;
