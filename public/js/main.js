const output = document.querySelector("#output");
const get_btn = document.querySelector("#get-posts-btn");
const form = document.querySelector("#add-post-form");

async function showPosts() {
	try {
		const res = await fetch("http://localhost:5000/api/posts");
		if (!res.ok) {
			throw new Error("Failed to fetch");
		}

		const posts = await res.json();

		output.innerHTML = "";
		posts.forEach((post) => {
			const postEl = document.createElement("div");
			postEl.textContent = post.title;
			output.appendChild(postEl);
		});
	} catch (error) {
		console.log("error fetching posts");
	}
}

async function addPost(e) {
	e.preventDefault();
	const formData = new FormData(this);
	const title = formData.get("title");

	try {
		const res = await fetch("http://localhost:5000/api/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title }),
		});
		if (!res.ok) {
			throw new Error("failed to add post");
		}

		const newPost = await res.json();
		const postEl = document.createElement("div");
		postEl.textContent = newPost.title;
		output.appendChild(postEl);
		showPosts();
	} catch (error) {
		console.log("error fetching post");
	}
}

get_btn.addEventListener("click", showPosts);
form.addEventListener("click", addPost);
