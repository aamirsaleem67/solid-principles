export interface Comment {
  id: number;
  body: string;
  isPinned: boolean;
  isEditing: boolean;
}

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

export interface CommentsProviderProps {
  children: React.ReactNode;
}

export interface CommentActions {
  startEditing: (id: number) => void;
  togglePinComment: (id: number, isPinned: boolean) => void;
  handleDeleteComment: (id: number) => void;
  editComment: (id: number, text: string) => void;
}

export interface CommentActionItem {
  comment: Comment;
  actions: CommentActions;
}
