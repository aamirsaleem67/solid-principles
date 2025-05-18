import React from 'react';
import { CommentActionItem } from '../../interfaces';

export const PinOption: React.FC<CommentActionItem> = ({ comment, actions }) => {
  const handleClick = () => {
    actions.handlePinComment(comment.id, !comment.isPinned);
  };

  return (
    <div onClick={handleClick}>
      {comment.isPinned ? 'Unpin' : 'Pin'}
    </div>
  );
}; 