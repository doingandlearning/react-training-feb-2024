import React from "react";
import PropTypes from "prop-types";

export default function Counter({ initialValue }) {
	const [count, setCount] = React.useState(initialValue)

	function handleClick() {
		setCount(count => count + 1)
	}
	return <button onClick={handleClick}>
		count is {count}
	</button>
}

Counter.propTypes = {
	initialValue: PropTypes.number.isRequired
}