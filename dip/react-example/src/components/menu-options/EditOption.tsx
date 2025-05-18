import React from 'react';
import { CommentActionItem } from '../../interfaces';

export const EditOption: React.FC<CommentActionItem> = ({ comment, actions }) => {
  const handleClick = () => {
    actions.startEditing(comment.id);
  };

  return (
    <div onClick={handleClick}>Edit</div>
  );
}; 