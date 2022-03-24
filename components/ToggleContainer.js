import ToggleButton from "./ToggleButton";

function ToggleContainer(data) {
	return (
		<div>
			{Object.entries(data).map(function (key, index) {
				return (
					<ToggleButton
						key={index}
						parentIndex={cardIndex}
						childIndex={index}
						suffix={indx + "_" + index}
						cntrlLabel={key[0]}
						value={key[1].value}
						desc={key[1].desc}
					/>
				);
			})}
		</div>
	);
}

export default ToggleContainer;
