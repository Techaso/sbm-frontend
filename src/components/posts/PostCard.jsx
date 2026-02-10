export default function PostCard({ post, deleting, onEdit, onDelete }) {
  const isDeleting = deleting === post.id;

  return (
    <div className={`dash-post-item ${isDeleting ? "dash-post-deleting" : ""}`}>
      <div className="dash-post-header">
        <strong className="dash-post-title">{post.title}</strong>
        <div className="dash-post-badges">
          <span className="dash-badge-platform">{post.platform}</span>
          <span
            className={`dash-badge-status ${
              post.status === "Published"
                ? "dash-badge-published"
                : "dash-badge-draft"
            }`}
          >
            {post.status}
          </span>
        </div>
      </div>
      <p className="dash-post-content">{post.content}</p>
      <div className="dash-post-actions">
        <button
          onClick={() => onEdit(post.id)}
          disabled={isDeleting}
          className="dash-btn-edit"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(post.id)}
          disabled={isDeleting}
          className="dash-btn-delete"
        >
          {isDeleting ? "⏳ Deleting..." : "🗑 Delete"}
        </button>
      </div>
    </div>
  );
}
