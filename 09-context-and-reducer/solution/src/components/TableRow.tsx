interface Props<T extends { toString(): string }> {
	data: T[]
	head: boolean
}

export default function TableRow<T extends { toString(): string }>({ data, head = false }: Props<T>) {
	const CellTag = head ? "th" : "td";
	return (
		<tr>
			{data.map((d, i) => (
				<CellTag key={i}>{d.toString()}</CellTag>
			))}
		</tr>
	);
}
