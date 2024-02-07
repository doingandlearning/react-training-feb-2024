import TableHead from "./TableHead";
import TableBody from "./TableBody";

interface Props<T extends { toString(): string }> {
	items: T[]
}

export default function Table<T extends { toString(): string }>({ items = [] }: Props<T>) {
	if (items.length == 0) {
		return <div>[no items]</div>;
	} else {
		return (
			<table>
				<TableHead sampleObject={items[0]} />
				<TableBody objects={items} />
			</table>
		);
	}
}