import React, { useState, useRef, useEffect, useMemo } from "react";
import { Comment } from "../types";
import { EditOption } from "./menu-options/EditOption";
import { PinOption } from "./menu-options/PinOption";
import { DeleteOption } from "./menu-options/DeleteOption";
import { useComments } from "../contexts/useComments";

export const CommentMenu: React.FC<{ comment: Comment }> = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const commentsContext = useComments();

  const commentActionItem = useMemo(
    () => ({
      comment,
      actions: {
        startEditing: commentsContext.startEditing,
        togglePinComment: commentsContext.togglePinComment,
        handleDeleteComment: commentsContext.handleDeleteComment,
        editComment: commentsContext.editComment,
      },
    }),
    [comment, commentsContext],
  );

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
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
          <div className="menu-options" onClick={handleOptionClick}>
            <EditOption {...commentActionItem} />
            <PinOption {...commentActionItem} />
            <DeleteOption {...commentActionItem} />
          </div>
        </div>
      )}
    </div>
  );
};
