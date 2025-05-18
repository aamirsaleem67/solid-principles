import React from "react";
import { Comment as CommentType } from "../interfaces";
import { CommentMenu } from "./CommentMenu";
import { useComments } from "../contexts/CommentsContext";

interface CommentProps {
  comment: CommentType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const { updateDraftText, saveEdit } = useComments();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      saveEdit(comment.id);
    }
  };

  return (
    <div className={`comment ${comment.isPinned ? "pinned" : ""}`}>
      <div className="comment-header">
        {comment.isPinned && <span className="pin-indicator">📌</span>}
        <div className="comment-menu-container">
          <CommentMenu comment={comment} />
        </div>
      </div>
      <div className="comment-body">
        {comment.isEditing ? (
          <div className="edit-container">
            <input
              type="text"
              defaultValue={comment.body}
              onChange={(e) => updateDraftText(comment.id, e.target.value)}
              onBlur={() => saveEdit(comment.id)}
              onKeyPress={handleKeyPress}
              autoFocus
            />
          </div>
        ) : (
          <div>{comment.body}</div>
        )}
      </div>
    </div>
  );
};

export default Comment;
