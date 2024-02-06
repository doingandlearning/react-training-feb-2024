export default function Gallery({ baseAddress, urls }) {
	const [selectedUrl, setSelectedUrl] = React.useState(undefined);
	const [clickCount, setClickCount] = React.useState(0);

	React.useEffect(() => {
		console.log("Gallery effect 1.");
		return () => {
			console.log("Gallery effect 1 cleanup.");
		};
	});

	React.useEffect(() => {
		console.log("Gallery effect 2.");
		return () => {
			console.log("Gallery effect 2 cleanup.");
		};
	}, [clickCount]);

	React.useEffect(() => {
		console.log("Gallery effect 3.");
		return () => {
			console.log("Gallery effect 3 cleanup.");
		};
	}, [selectedUrl]);

	React.useEffect(() => {
		console.log("Gallery effect 4.");
		return () => {
			console.log("Gallery effect 4 cleanup.");
		};
	}, []); // Empty dependency list, which cannot change, so this effect is only called on first render (and cleaned up on unmount).

	const mainContent = selectedUrl ? (
		<img src={`${baseAddress}/${selectedUrl}`} className="largeImage" />
	) : (
		<h2>No image selected</h2>
	);

	return (
		<div className="gallery">
			<button onClick={() => clearGallery()}>Clear gallery</button>
			<div>
				{urls.map((url, i) => (
					<img
						key={i}
						src={`${baseAddress}/${url}`}
						className="smallImage"
						onClick={() => {
							console.log(
								`Thumbnail clicked: ${url} at ${new Date().toString()}`
							);
							setSelectedUrl(url);
							setClickCount(clickCount + 1);
						}}
					/>
				))}
			</div>
			<div>Updated at {new Date().toString()}</div>
			<div>{mainContent}</div>
		</div>
	);
}