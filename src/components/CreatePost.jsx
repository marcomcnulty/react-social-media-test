import React from "react";
import { PostContext } from "../App";

function CreatePost({ user }) {
  const { dispatch } = React.useContext(PostContext);
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);
  const imageInputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const post = { content, image, user, id: Date.now() };
    dispatch({ type: "ADD_POST", payload: { post }});
    setContent("");
    imageInputRef.current.value = "";
  }
  
  // without Hooks
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const post = { content, image, user };
  //   const newPosts = [post, ...posts];
  //   setPosts(newPosts);
  //   setContent("");
  //   imageInputRef.current.value = "";
  // }

  return (
    <div>
      <h1>Create New Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={e => setContent(e.target.value)}
          type="text"
          value={content}
          placeholder="Add Post Content"
        />
        <input
          onChange={e => setImage(e.target.files[0])}
          type="file"
          ref={imageInputRef}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
