import React from "react";
import { CommentActionItem } from "@/comments/types";

export const PinOption: React.FC<CommentActionItem> = ({
  comment,
  actions,
}) => {
  const handleClick = () => {
    actions.togglePinComment(comment.id, !comment.isPinned);
  };

  return <div onClick={handleClick}>{comment.isPinned ? "Unpin" : "Pin"}</div>;
};
