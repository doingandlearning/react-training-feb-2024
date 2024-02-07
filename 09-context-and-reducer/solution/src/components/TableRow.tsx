import React from "react";
import { ILibraryContext, LibraryContext } from "../contexts/LibraryContext";
import Book from "../book";
import Film from "../film";

interface Props {
	data: (Book | Film)[]
	head: boolean
	item?: Book | Film
}

export default function TableRow<T extends { toString(): string }>({ data, head = false, item }: Props<T>) {
	const { dispatch } = React.useContext(LibraryContext) as ILibraryContext;



	const CellTag = head ? "th" : "td";
	return (
		<tr>
			{data.map((d, i) => (
				<CellTag key={i}>{d.toString()}</CellTag>
			))}
			{!head && (
				<td>
					<button onClick={() => handleRemove(item)}>Remove</button>
				</td>
			)}
		</tr>
	);
}
