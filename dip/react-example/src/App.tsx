import React from "react";
import "./App.css";
import { CommentsProvider } from "./comments/contexts/CommentsContext";
import Comments from "./comments/Comments";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Comments</h1>
      <CommentsProvider>
        <Comments />
      </CommentsProvider>
    </div>
  );
};

export default App;
