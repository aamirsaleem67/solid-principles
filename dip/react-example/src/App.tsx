import React from "react";
import "./App.css";
import Comments from "./Comments";
import { CommentsProvider } from "./contexts/CommentsContext";

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
