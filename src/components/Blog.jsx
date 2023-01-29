import React, { createContext, useState } from "react";


const Blog = () => {
	const [blog, setBlog] = useState("waiting for your blog here");
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(blog)
		setBlog("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					id='blog'
					name='blog'
					type='text'
					onChange={(event) => setBlog(event.target.value)}
					value={blog}
				/>
				<button type='submit'>Submit Blog</button>
			</form>

		</div>
	);
};

export default Blog;


