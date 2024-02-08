import Link from "next/link"

async function fetchPokemon() {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon/",
		{
			cache: "force-cache",
			next: { revalidate: 3600 }
		})
	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}
	return res.json()
}

export default async function Page() {
	const data = await fetchPokemon()

	return <main>
		{data.results.map(pokemon =>
			<p key={pokemon.name}>
				<Link
					href={`/pokemon/${pokemon.name}`}
					className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
				>
					{pokemon.name}
				</Link>
			</p>
		)}
	</main>
}