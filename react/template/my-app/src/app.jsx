import "./app.css";
import Comment from "./Comment";

const comments = [
  { name: "hy", content: "my react!" },
  { name: "hj", content: "my react!" },
  { name: "hh", content: "my react!" },
];
function App() {
  return (
    <div>
      {comments.map((comment, index) => {
        return <Comment name={comment.name} content={comment.content} />;
      })}
    </div>
  );
}

export default App;
