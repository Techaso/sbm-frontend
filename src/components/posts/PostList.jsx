import PostCard from "./PostCard";

export default function PostList({ posts, deleting, onEdit, onDelete }) {
  if (posts.length === 0) {
    return (
      <div className="dash-empty-state">
        <p className="dash-empty-icon">📝</p>
        <p>No posts yet. Create your first post!</p>
      </div>
    );
  }

  return posts.map((post) => (
    <PostCard
      key={post.id}
      post={post}
      deleting={deleting}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  ));
}
