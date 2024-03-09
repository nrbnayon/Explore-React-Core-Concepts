import "./css/Post.css";
import PropTypes from "prop-types";
const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="postStyle">
      <h2>Post No: {id}</h2>
      <h3>Title: {title}</h3>
      <p>Description: {body}</p>
    </div>
  );
};

// Define PropTypes for the 'post' prop
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
export default Post;
