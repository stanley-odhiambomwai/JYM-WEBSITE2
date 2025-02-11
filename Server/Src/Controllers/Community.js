let posts = [
    { id: 1, user: "Alice", content: "Loving the new JIM updates!" },
    { id: 2, user: "Bob", content: "Anyone up for a group workout?" }
  ];
  
  export const getPosts = (req, res) => {
    res.json(posts);
  };
  
  export const addPost = (req, res) => {
    const { user, content } = req.body;
    const newPost = { id: posts.length + 1, user, content };
    posts.push(newPost);
    res.status(201).json(newPost);
  };
  