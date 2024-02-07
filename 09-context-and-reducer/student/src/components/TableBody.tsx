import TableRow from "./TableRow";

interface Props {
	objects: any[]
}

export default function TableBody({ objects }: Props) {
	return (
		<tbody>
			{objects.map((obj, i) => (
				<TableRow key={i} data={Object.values(obj)} />
			))}
		</tbody>
	);
}
