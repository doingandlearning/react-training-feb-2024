import React from "react";

function Panel({ title, text }) {
	let count = React.useRef(0);
	console.log(`Rendered at ${new Date().toString()}`);

	// Cache a particular piece of content.
	const firstRendered = React.useMemo(
		() => <div>Initial: {new Date().toString()}</div>,
		[]
	);

	return (
		<div className="panel">
			<h2>{title}</h2>
			<div>Painted: {count.current++} times</div>
			<div>Textbox: {text}</div>
			{firstRendered}
			<div>Updated: {new Date().toString()}</div>
		</div>
	);
}

const MemoizedPanel = React.memo(Panel);

const MemoizedPanelWithComparisonFunction = React.memo(
	Panel,
	(prevProps, nextProps) => prevProps.text.length == nextProps.text.length
);

export default function App() {
	const [text, setText] = React.useState("");
	return (
		<div>
			<input
				value={text}
				placeholder="Enter text here"
				onChange={(e) => setText(e.target.value)}
			/>
			<Panel title="Normal panel" text={text} />
			<MemoizedPanel title="Memoized panel" text={text} />
			<MemoizedPanelWithComparisonFunction
				title="Memoized panel with comparison function"
				text={text}
			/>
			kevin
		</div>
	);
}