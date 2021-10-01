import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import WifiLocal from "../routes/wifiLocal";
import WifiHub from "../routes/wifiHub";
import Save from "../routes/save";
import Navbar from "./navbar";
import background from "./background";

const App = () => (
	<div class={background.container} id="app">
		<Router>
			<Home path="/" />
			<WifiLocal path="/wifilocal" />
			<WifiHub path="/wifihub" />
			<Save path="/save" />
		</Router>

		{/* <Navbar /> */}
	</div>
);

export default App;
