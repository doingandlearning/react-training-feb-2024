// "use client"
export default function Page({ params }) {
	console.log(params)
	return <div>
		<h1>Shop</h1>
		<h2>{params.slug[0]}</h2>
		<h3>{params.slug[1]}</h3>
		<h4>{params.slug[2]}</h4>
		<h5>{params.slug[3]}</h5>
	</div>
}