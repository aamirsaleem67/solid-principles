import React, { useState, useRef, useEffect } from "react";
import { Comment } from "../interfaces";
import { EditOption } from "./menu-options/EditOption";
import { PinOption } from "./menu-options/PinOption";
import { DeleteOption } from "./menu-options/DeleteOption";
import { useComments } from "../contexts/CommentsContext";

export const CommentMenu: React.FC<{ comment: Comment }> = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const commentsContext = useComments();
  
  const commentActionItem = {
    comment,
    actions: {
      startEditing: commentsContext.startEditing,
      togglePinComment: commentsContext.togglePinComment,
      handleDeleteComment: commentsContext.handleDeleteComment,
      editComment: commentsContext.editComment,
    },
  };
  
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="comment-menu" ref={menuRef}>
      <button className="menu-button" onClick={handleToggleMenu}>
        ⋮
      </button>
      
      {isOpen && (
        <div className="menu-dropdown">
          <div className="menu-options" onClick={handleCloseMenu}>
            <EditOption {...commentActionItem} />
            <PinOption {...commentActionItem} />
            <DeleteOption {...commentActionItem} />
          </div>
        </div>
      )}
    </div>
  );
};
