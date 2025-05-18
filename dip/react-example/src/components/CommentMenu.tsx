import React, { useState } from 'react';
import { Comment } from '../interfaces';
import { EditOption } from './menu-options/EditOption';
import { PinOption } from './menu-options/PinOption';
import { DeleteOption } from './menu-options/DeleteOption';
import { useComments } from '../contexts/CommentsContext';

export const CommentMenu: React.FC<{ comment: Comment }> = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const commentsContext = useComments();
  const commentActionItem = {
    comment,
    actions: {
      startEditing: commentsContext.startEditing,
      handlePinComment: commentsContext.handlePinComment,
      handleDeleteComment: commentsContext.handleDeleteComment,
      editComment: commentsContext.editComment
    }
  }
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="comment-menu">
      <button className="menu-button" onClick={handleToggleMenu}>
        ⋮
      </button>
      
      {isOpen && (
        <div className="menu-dropdown">
          <div className="menu-options">
            <EditOption {...commentActionItem} />
            <PinOption {...commentActionItem} />
            <DeleteOption {...commentActionItem} />
          </div>
        </div>
      )}
    </div>
  );
}; 