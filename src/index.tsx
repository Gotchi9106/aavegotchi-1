import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bulma/css/bulma.css";
// import "@fortawesome/fontawesome-free/css/all.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GotchiProvider } from "./hooks";

const client = new ApolloClient({
	uri:
		"https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic",
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<GotchiProvider>
				<App />
			</GotchiProvider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
