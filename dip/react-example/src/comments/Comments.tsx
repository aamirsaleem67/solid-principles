import Comment from "./components/Comment";
import { useComments } from "./contexts/useComments";

const Comments = () => {
  const { comments } = useComments();

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
