import { FC } from "react";

interface SelectedGotchiProps {
	name: string;
	traits: Array<Number>;
}

export const SelectedGotchi: FC<SelectedGotchiProps> = ({ name, traits }) => {
	return (
		<div className="selected-gotchi-container">
			<div className="name-container">
				<h2>{name}</h2>
			</div>
			<div className="svg-container" />
			<div className="traits-container">
				<div className="trait">
					<p>⚡ Energy</p>
					<p>{traits[0]}</p>
				</div>
				<div className="trait">
					<p>👹 Aggression</p>
					<p>{traits[1]}</p>
				</div>
				<div className="trait">
					<p>👻 Spookiness</p>
					<p>{traits[2]}</p>
				</div>
				<div className="trait">
					<p>🧠 Brain size</p>
					<p>{traits[3]}</p>
				</div>
				<div className="trait">
					<p>👀 Eye shape</p>
					<p>{traits[4]}</p>
				</div>
				<div className="trait">
					<p>👁 Eye color</p>
					<p>{traits[5]}</p>
				</div>
			</div>
		</div>
	);
};
