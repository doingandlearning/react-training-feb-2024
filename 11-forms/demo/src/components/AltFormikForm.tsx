import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.css";

function App() {
	async function handleSubmit(values, { setSubmitting, setErrors }) {
		console.log(values);
		setErrors({});
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users",
				{
					method: "POST",
					body: JSON.stringify(values),
				}
			);

			const data = await response.json();
			console.log(data);
			setSubmitting(false);

			// navigate("/thank-you")
		} catch (error) {
			setErrors({ name: "Something went wrong" });
			setSubmitting(false);
		}
	}

	return (
		<>
			<h1>Contact Form</h1>
			<Formik
				initialValues={{ name: "", email: "", comment: "" }}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form>
						<div>
							<label htmlFor="name">Name</label>
							<Field
								className="field"
								id="name"
								name="name"
								required
							/>
							<ErrorMessage name="name" component="p" />
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<Field
								id="email"
								type="email"
								name="email"
							/>
							<ErrorMessage name="email" component="p" />
						</div>
						<div>
							<label htmlFor="comment">Comment</label>
							<Field
								id="comment"
								name="comment"
								as="textarea"
							/>
							<ErrorMessage name="comment" component="p" />
						</div>
						<button type="submit" disabled={isSubmitting}>Submit</button>
					</Form>
				)}
			</Formik>
		</>
	);
}

export default App;
