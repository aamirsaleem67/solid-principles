import { useContext } from "react";
import { CommentsContextType } from "@/comments/types";
import { CommentsContext } from "./CommentsContext";

export const useComments = (): CommentsContextType => {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error("useComments must be used within a CommentsProvider");
  }
  return context;
};
