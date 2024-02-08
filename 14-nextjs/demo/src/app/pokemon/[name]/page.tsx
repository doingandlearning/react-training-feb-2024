import Link from "next/link"
import Image from "next/image"

async function fetchPokemon(name: string) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`,
		{
			cache: "no-store",
		})
	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}
	return res.json()
}

async function fetchTodos() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos`,
		{
			cache: "no-store",
		})
	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}
	return res.json()
}

export default async function Page({ params: { name } }: { params: { name: string } }) {
	const data = await fetchPokemon(name)
	// const todosPromise = fetchTodos()

	// // const [data, todos] = await Promise.all([dataPromise, todosPromise])
	// const [dataResult, todosResult] = await Promise.allSettled([dataPromise, todosPromise])

	// const data = dataResult.status === "fulfilled" ? dataResult.value : null
	// // const todos = todosResult.status === "fulfilled" ? todosResult.value : null

	return <div>
		<h1>{name}</h1>
		<p>{JSON.stringify(data?.abilities)}</p>
		<Image
			src={data.sprites.front_default}
			width={100}
			height={100}
			alt={`Image of ${name}`}
		/>
		<p><Link href="/pokemon">Back</Link></p>
	</div>

}
