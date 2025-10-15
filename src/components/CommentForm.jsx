import { useState } from "react";

export default function CommentForm({ postId, setPosts, me = "you" }) {
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;

    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== postId) return p;
        return {
          ...p,
          comments: [...p.comments, { id: crypto.randomUUID(), author: me, text: t }],
        };
      })
    );

    setText("");
  }

  return (
    <form className="comment-form" onSubmit={onSubmit}>
      <input
        className="comment-input"
        aria-label="Add a comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
      />
      <button type="submit" className="btn">Post</button>
    </form>
  );
}
