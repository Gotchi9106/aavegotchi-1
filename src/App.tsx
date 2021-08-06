import { useEffect } from "react";
import { Container, Hero } from "@faramo.zayw/reabulma";

import "./App.css";

import { useGetAavegotchisQuery } from "./types/graphql";
import { AavegotchisList } from "./components";

const App = () => {
	const { data } = useGetAavegotchisQuery();

	useEffect(() => {}, [data]);

	return (
		<Hero isColor="black" isFullHeight>
			<Container>
				<AavegotchisList aavegotchis={data?.aavegotchis!} />
			</Container>
		</Hero>
	);
};

export default App;
