interface Props<T extends { toString(): string }> {
	items: T[],
	ordered?: boolean
}

export default function ItemsList<T extends { toString(): string }>({ items, ordered = false }: Props<T>) {
	if (items.length == 0) {
		return <div>[no items]</div>;
	} else {
		const ListTag = ordered ? "ol" : "ul";
		return (
			<ListTag>
				{items.map((item, i) => (
					<li key={i}>{item.toString()} </li>
				))}
			</ListTag>
		);
	}
}
