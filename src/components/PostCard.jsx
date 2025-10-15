// src/components/PostCard.jsx
import { Link } from "react-router-dom";
import { useCallback } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

export default function PostCard({ post, setPosts }) {
  const toggleLike = useCallback(() => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== post.id) return p;
        const likedByMe = !p.likedByMe;
        const likeCount = p.likeCount + (likedByMe ? 1 : -1);
        return { ...p, likedByMe, likeCount };
      })
    );
  }, [post.id, setPosts]);

  return (
    <article className="card" aria-label={`post by ${post.author}`}>
      <header className="card-header">
        <img className="avatar" src={post.avatar} alt={`${post.author} avatar`} />
        <strong>
          <Link
            to={`/u/${post.author}`}
            style={{ textDecoration: "none", color: "inherit" }}
            aria-label={`View @${post.author}'s profile`}
          >
            @{post.author}
          </Link>
        </strong>
      </header>

      <img
        className="card-img"
        src={post.imageUrl}
        alt={post.caption ? post.caption : `Photo by @${post.author}`}
      />

      <div className="card-body">
        <div className="row">
          <button
            className="like-btn"
            onClick={toggleLike}
            aria-pressed={post.likedByMe}
            aria-label={post.likedByMe ? "Unlike" : "Like"}
            title={post.likedByMe ? "Unlike" : "Like"}
          >
            {post.likedByMe ? "♥" : "♡"} Like
          </button>
          <span className="likes">{post.likeCount} likes</span>
        </div>

        {post.caption && (
          <p className="caption">
            <strong>@{post.author}</strong> {post.caption}
          </p>
        )}

        {/* crash-proof */}
        <CommentList comments={post.comments ?? []} />
        <CommentForm postId={post.id} setPosts={setPosts} />
      </div>
    </article>
  );
}
