import React from "react";
import "./Switch.css"
export default function Switch() {
	const [on, setOn] = React.useState(false)

	return <button
		className="switch"
		onClick={() => setOn(!on)}
	>
		{on ? "Turn off" : "Turn on"}
	</button>
}