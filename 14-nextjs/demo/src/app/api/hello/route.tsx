export function GET(request: Request) {
	// 
	return Response.json({
		hello: "world",
		request: JSON.stringify(request)
	})
}

// getServerSideProps
// ... 