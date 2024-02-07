export default function Products() {
	const products = [
		new ProductItem("1", "Game controller", 55.99, 20001, "2015-05-09"),
		new ProductItem("2", "3D Printer", 49.99, 15009, "2018-12-08"),
		new ProductItem("3", "XBox", 4_000_000, 4, "2017-12-25"),
	];

	return (
		<>
			<h1>Products</h1>
			<ul>{products.map((product, i) =>
				<li key={i}>{product.description}</li>)}</ul>
		</>
	);
}

export class ProductItem {
	constructor(
		public id: string,
		public description: string,
		public price: number,
		public likes: number,
		public mostRecentLike: string
	) { }
}
