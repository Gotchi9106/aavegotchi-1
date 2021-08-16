import { useEffect } from "react";
import {
	Column,
	Columns,
	Container,
	Hero,
	ProgressBar,
} from "@faramo.zayw/reabulma";

import "./App.css";

import { useGetAavegotchisQuery } from "./types/graphql";
import { AavegotchisList } from "./components";
import { SelectedGotchi } from "./components/selected-gotchi";

const App = () => {
	const { data, loading } = useGetAavegotchisQuery();

	useEffect(() => {}, [data]);

	return (
		<Hero isColor="black" isFullHeight>
			<Container>
				{loading ? (
					<ProgressBar isColor="info" />
				) : (
					<Columns>
						<Column isSize="1/2">
							<SelectedGotchi name="asda" traits={[]} />
						</Column>
						<Column isSize="1/2">
							<AavegotchisList aavegotchis={data!.aavegotchis} />
						</Column>
					</Columns>
				)}
			</Container>
		</Hero>
	);
};

export default App;
