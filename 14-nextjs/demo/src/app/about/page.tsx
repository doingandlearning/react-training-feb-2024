import Link from "next/link"

export default function About() {
	const people = [
		"kevin", "andy", "halidu", "pav"
	]

	// <Link>  <NavLink>
	return <div>
		<h1>
			About page
		</h1>

		{
			people.map((person, index) =>
				<p>
					<Link
						href={`/about/${person}`}
						key={person}
						className="text-orange-700"
					>
						{person}
					</Link>
				</p>
			)
		}

	</div>
}