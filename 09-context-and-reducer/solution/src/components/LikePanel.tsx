import React from "react"
import { ILikeContext, LikeContext } from "../contexts/LikeContext";

export default function LikePanel() {
	const { likes, setLikes, incrementLike, clearLikes } = React.useContext(LikeContext) as ILikeContext
	const [start, setStart] = React.useState(true)

	// Run this code after first render only.
	React.useEffect(() => {
		const likesFromLocalStorage = Number(window.localStorage.likes);
		if (!isNaN(likesFromLocalStorage)) {
			console.log(
				`Read likes=${likesFromLocalStorage} from local storage`
			);
			setLikes(likesFromLocalStorage);
		}
	}, []);

	React.useEffect(() => {
		if (start) {
			setStart(false)
		} else {
			window.localStorage.likes = likes;
			console.log(`Written likes=${likes} to local storage`);
		}
	}, [likes]);

	function onLike() {
		incrementLike()
	}

	function onResetLikes() {
		clearLikes()
	}

	return (
		<div className="likePanel">
			<h2>Like My Library</h2>
			<span>
				Likes: <b>{likes}</b>
			</span>
			&nbsp;
			<button onClick={() => onLike()}>Like</button>
			<button onClick={() => onResetLikes()}>Reset like count</button>
		</div>
	);
}