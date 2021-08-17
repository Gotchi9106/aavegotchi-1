import Web3 from "web3";
import { AbiItem } from "web3-utils/types";
import { useState, useEffect } from "react";
import { Contract } from "web3-eth-contract";
import { Column, Columns, Container, Hero } from "@faramo.zayw/reabulma";

import "./App.css";
import diamondABI from "./abi/diamondABI.json";

import { AavegotchisList } from "./components";
import { SelectedGotchi } from "./components/selected-gotchi";
import { useGotchi } from "./hooks";

const diamondAddress = "0x86935F11C86623deC8a25696E1C19a8659CbF95d";

const App = () => {
	const { aavegotchis, activeGotchi } = useGotchi();
	const [contract, setContract] = useState<Contract | null>(null);

	const connectToWeb3 = () => {
		const web3 = new Web3(Web3.givenProvider);
		const aavegotchiContract = new web3.eth.Contract(
			diamondABI as AbiItem[],
			diamondAddress,
		);
		setContract(aavegotchiContract);
	};

	useEffect(() => connectToWeb3(), []);

	useEffect(() => {
		if (!!contract) {
			const fetchAavegotchiCollaterals = async () => {
				const collaterals = await contract.methods.getCollateralInfo().call();
				console.log(collaterals);
			};

			fetchAavegotchiCollaterals();
		}
	}, [contract]);

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
