export default function Page({ params }: { params: { name: string } }) {
	const people = {
		'andy': 'lives in Manchester and likes .Net',
		'pav': 'enjoys C# and maintaining other React apps',
		'halidu': 'loves Django'
	}

	return <div>Page about {params.name}, who {people[params.name] || "we don't know"}</div>;
}

// /blog/[slug] -> /blog/something-about-react 

// /shop/clothes/tops/women/

// catch all