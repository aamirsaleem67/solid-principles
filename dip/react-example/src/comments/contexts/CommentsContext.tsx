import React, { createContext, useState, useEffect } from "react";
import { CommentsContextType, CommentsProviderProps, Comment } from "../types";

export const CommentsContext = createContext<CommentsContextType | null>(null);

export const CommentsProvider: React.FC<CommentsProviderProps> = ({
  children,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [draftTexts, setDraftTexts] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await fetch("https://dummyjson.com/comments?limit=10");
    const data = await response.json();
    setComments(data.comments);
  };

  const startEditing = (id: number) => {
    const comment = comments.find((c) => c.id === id);
    if (comment) {
      setDraftTexts((prev) => ({ ...prev, [id]: comment.body }));
      setComments(
        comments.map((comment) =>
          comment.id === id ? { ...comment, isEditing: true } : comment,
        ),
      );
    }
  };

  const updateDraftText = (id: number, text: string) => {
    setDraftTexts((prev) => ({ ...prev, [id]: text }));
  };

  const saveEdit = (id: number) => {
    const draftText = draftTexts[id];
    if (draftText !== undefined) {
      setComments(
        comments.map((comment) =>
          comment.id === id
            ? { ...comment, body: draftText, isEditing: false }
            : comment,
        ),
      );
      setDraftTexts((prev) => {
        const newDrafts = { ...prev };
        delete newDrafts[id];
        return newDrafts;
      });
    }
  };

  const togglePinComment = (id: number, isPinned: boolean) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, isPinned } : comment,
      ),
    );
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const editComment = (id: number, text: string) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, body: text, isEditing: false }
          : comment,
      ),
    );
  };

  const value: CommentsContextType = {
    comments,
    fetchComments,
    startEditing,
    updateDraftText,
    saveEdit,
    togglePinComment,
    handleDeleteComment,
    editComment,
  };

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
};
