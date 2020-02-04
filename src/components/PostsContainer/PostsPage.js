//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  console.log ('props-in-PP', props.postData)
  return (
    <div className="posts-container-wrapper">
      {props.postData.map(content =>
        <Post post={content} />
        )}
        {/* we are spliting each post section so the next component can parse out each post */}
      {/* map through data here */}
    </div>
  );
};

export default PostsPage;

