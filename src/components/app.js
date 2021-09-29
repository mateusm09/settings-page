import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import WifiLocal from "../routes/wifiLocal";

const App = () => (
	<div id="app">
		{/* <Header /> */}
		<Router>
			<Home path="/" />
			<WifiLocal path="/wifilocal" />
		</Router>
	</div>
);

export default App;
