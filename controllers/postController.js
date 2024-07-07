

let posts = [
	{ id: 1, title: "one" },
	{ id: 2, title: "two" },
	{ id: 3, title: "three" },
];



// @desc Get all posts
// @ route GET api/posts

export const getPosts =
    (req, res, next) => {
      const limit = parseInt(req.query.limit);
      if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
      }
      res.status(200).json(posts); 
    
    }
  // @desc Get a single  posts
// @ route GET api/posts/:id

export const getSinglePost = (req, res, next) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id)

	if(!post){
	const error = new Error(`Post with id ${id} not found`)
  error.status = 404
  return next(error)
	}
	res.status(200).json(post)

}
  // @desc Create a post
// @ route POST api/posts/
export const createNewPost = (req,res, next) => { 
  const newPost = {
    id : posts.length +1,
    title : req.body.title
  }

  if(!newPost.title){
    const error = new Error(`add title plzz`)
    error.status = 400 
    return next(error)
  }else{
    posts.push(newPost)
  }
  res.status(200).json(posts)

}  // @desc Delete a post
// @ route DELETE api/posts/:id
export const deletePost =  (req, res) => {
  const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id)

  if(!post){
    return res.status(400).json({msg : "no post found"})
  }

  posts = posts.filter(post => post.id !== id)
  res.status(200).json(posts)}

   // @desc Update a post
// @ route PUT api/posts/:id
export const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id)

  if(!post){
    const error = new Error(`Post with id ${id} not found`)
    error.status = 404
    return next(error)
  }

  post.title = req.body.title
  res.status(200).json(posts)


}