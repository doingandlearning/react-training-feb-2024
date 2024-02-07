import { useFormik } from "formik"

export default function Form() {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			comment: ''
		}, onSubmit: handleSubmit
	})

	async function handleSubmit({ name, comment, email }) {
		try {
			// throw Error()
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users",
				{
					method: "POST",
					body: JSON.stringify({
						name,
						email,
						comment,
					}),
				}
			);

			const data = await response.json();
			console.log(data);
			formik.resetForm()
			// navigate("/thank-you")
		} catch (error) {
			// error.name 
			// error.email
			// error.comment
		}
	}

	return <>
		<h1>Formik Form</h1>
		<form onSubmit={formik.handleSubmit}>
			<div>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					value={formik.values.name}
					onChange={formik.handleChange}
					// onBlur
					// onFocus
					required
				/>
				{formik.errors.name && <p>{formik.errors.name}</p>}
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
				{formik.errors.email && <p>{formik.errors.email}</p>}
			</div>
			<div>
				<label htmlFor="comment">Comment</label>
				<textarea
					id="comment"
					value={formik.values.comment}
					onChange={formik.handleChange}
				></textarea>
				{formik.errors.comment && <p>{formik.errors.comment}</p>}
			</div>
			<button type="submit">Submit</button>
		</form>
	</>
}