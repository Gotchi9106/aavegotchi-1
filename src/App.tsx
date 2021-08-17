import { Column, Columns, Container, Hero } from "@faramo.zayw/reabulma";

import "./App.css";

import { AavegotchisList } from "./components";
import { SelectedGotchi } from "./components/selected-gotchi";
import { useGotchi } from "./hooks";

const App = () => {
	const { aavegotchis, activeGotchi } = useGotchi();

	return (
		<Hero isColor="black" isFullHeight isClipped>
			<Container className="is-fluid" spacing={["px-6"]}>
				{aavegotchis && (
					<Columns style={{ minWidth: "50vw !important" }}>
						<Column isSize="1/2">
							{activeGotchi && activeGotchi?.withSetsNumericTraits && (
								<SelectedGotchi
									name={activeGotchi.name}
									traits={activeGotchi?.withSetsNumericTraits}
								/>
							)}
						</Column>
						<Column isSize="1/2">
							<AavegotchisList aavegotchis={aavegotchis ?? []} />
						</Column>
					</Columns>
				)}
			</Container>
		</Hero>
	);
};

export default App;
