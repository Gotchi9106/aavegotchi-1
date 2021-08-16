import { useEffect } from "react";
import { Container, Hero, ProgressBar } from "@faramo.zayw/reabulma";

import "./App.css";

import { useGetAavegotchisQuery } from "./types/graphql";
import { AavegotchisList } from "./components";

const App = () => {
	const { data, loading } = useGetAavegotchisQuery();

	useEffect(() => {}, [data]);

	return (
		<Hero isColor="black" isFullHeight>
			<Container>
				{loading ? (
					<ProgressBar isColor="info" />
				) : (
					<AavegotchisList aavegotchis={data!.aavegotchis} />
				)}
			</Container>
		</Hero>
	);
};

export default App;
