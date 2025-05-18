import React, { createContext, useContext, useState, useEffect } from "react";
import { Comment } from "../interfaces";

export interface CommentsContextType {
  comments: Comment[];
  fetchComments: () => Promise<void>;
  startEditing: (id: number) => void;
  updateDraftText: (id: number, text: string) => void;
  saveEdit: (id: number) => void;
  togglePinComment: (id: number, isPinned: boolean) => void;
  handleDeleteComment: (id: number) => void;
  editComment: (id: number, text: string) => void;
}

const CommentsContext = createContext<CommentsContextType | null>(null);

interface CommentsProviderProps {
  children: React.ReactNode;
}

export const CommentsProvider: React.FC<CommentsProviderProps> = ({
  children,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [draftTexts, setDraftTexts] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await fetch("https://dummyjson.com/comments");
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

  const editComment = (id: number, text: string) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, body: text, isEditing: false }
          : comment,
      ),
    );
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

export const useComments = (): CommentsContextType => {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error("useComments must be used within a CommentsProvider");
  }
  return context;
};
