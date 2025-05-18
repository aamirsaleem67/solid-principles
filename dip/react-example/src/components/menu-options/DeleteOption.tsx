import React from "react";
import { CommentActionItem } from "../../interfaces";

export const DeleteOption: React.FC<CommentActionItem> = ({
  comment,
  actions,
}) => {
  const handleClick = () => {
    actions.handleDeleteComment(comment.id);
  };

  return <div onClick={handleClick}>Delete</div>;
};
