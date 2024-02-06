import React from "react"

export default function Temp() {
	React.useEffect(() => {
		console.log("Temp use effect")
		return () => {
			console.log("Temp use effect clenaup")
		}
	}, []) // Empty Dependency array - means initial render only!

	return <>I'm the temporary component!</>
}