import BookForm from "./BookForm"
import ItemsList from "./ItemsList"
import Table from "./Table"
import { useSelector } from "react-redux"

export default function BookPage({ tabularFormat }: { tabularFormat: boolean }) {
	const { books } = useSelector(s => s.books)

	return <>
		<BookForm />
		{tabularFormat ? (
			<Table items={books} />
		) : (
			<ItemsList items={books} />)}

	</>
}