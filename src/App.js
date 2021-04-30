import React from "react"
import Buttons from "./Buttons.js"
import { Tabs, Tab } from 'react-bootstrap';

function App() {
	return (
		<div id="exTab1" class="container">

			<Tabs defaultActiveKey="About You" id="1a">
				<Tab eventKey="about you" title="About You"><Buttons /></Tab>


				<Tab eventKey="more about you" title="More About You"><h3>Hello!</h3></Tab>
			</Tabs>
		</div>

	)
}

export default App;
