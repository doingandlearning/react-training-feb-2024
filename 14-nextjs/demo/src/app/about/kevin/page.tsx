import Link from "next/link";

export default function Page() {
	return <div>
		<p>
			Kevin likes maths.
		</p>
		<Link href="/about">Back</Link>
	</div>
}