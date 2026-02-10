import { useEffect, useState, useCallback } from "react";
import { getAllPosts, deletePost } from "../../services/postService";

export default function useDashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllPosts();
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      alert("Failed to load posts");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      setDeleting(id);
      await deletePost(id);
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post");
    } finally {
      setDeleting(null);
    }
  };

  const handleEdit = (id) => {
    window.location.href = `/edit/${id}`;
  };

  return { posts, loading, deleting, handleDelete, handleEdit };
}
