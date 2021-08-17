import type { FC } from "react";
import {
	Column,
	Columns,
	Title,
	Notification,
	Tag,
	Container,
	ProgressBar,
} from "@faramo.zayw/reabulma";

import styled from "./selected-gotchi.module.css";

interface SelectedGotchiProps {
	name: string;
	traits: number[];
	svg: string;
	loadingSVG?: boolean;
}

const Trait: FC<{ title: string; trait: number }> = ({ title, trait }) => {
	return (
		<Column
			isSize="1/3"
			className={styled.trait}
			flexbox={{
				direction: "row",
				alignContent: "space-around",
				justifyContent: "space-evenly",
				alignItems: "center",
			}}
			spacing={["m-3"]}
		>
			<p>{title}</p>
			<Tag hasBackgroundColor="warning" typography={{ weight: "bold" }}>
				{trait ?? 0}
			</Tag>
		</Column>
	);
};

const traitsNames = [
	"⚡ Energy",
	"👹 Aggression",
	"👻 Spookiness",
	"🧠 Brain size",
	"👀 Eye shape",
	"👁 Eye color",
] as const;

export const SelectedGotchi: FC<SelectedGotchiProps> = ({
	name,
	traits,
	svg,
	loadingSVG,
}) => {
	return (
		<Container
			className={styled.selectedGotchiWrapper}
			flexbox={{
				direction: "column",
				alignContent: "space-around",
				justifyContent: "space-between",
			}}
			spacing={["py-5"]}
		>
			<Title
				hasBackgroundColor="info"
				className={styled.name}
				spacing={["p-4"]}
				typography={{ family: "monospace" }}
			>
				{name}
			</Title>
			{loadingSVG ? (
				<ProgressBar isColor="success" />
			) : (
				<div className={styled.svgContainer}>
					<div
						className={styled.svg}
						dangerouslySetInnerHTML={{ __html: svg }}
					/>
				</div>
			)}
			<Notification
				hasBackgroundColor="black-ter"
				hasTextColor="info"
				className="traitsContainer"
			>
				<Columns multiline flexbox={{ justifyContent: "space-evenly" }}>
					{traitsNames.map((title, index) => (
						<Trait key={title} title={title} trait={traits[index]} />
					))}
				</Columns>
			</Notification>
		</Container>
	);
};
