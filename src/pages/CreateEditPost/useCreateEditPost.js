import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPostById,
  createPost,
  updatePost,
} from "../../services/postService";
import { getRandomQuote } from "../../services/quoteService";

export default function useCreateEditPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [platform, setPlatform] = useState("LinkedIn");
  const [status, setStatus] = useState("Draft");
  const [loadingQuote, setLoadingQuote] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fetchingPost, setFetchingPost] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  useEffect(() => {
    if (!isEditMode) return;

    const fetchPost = async () => {
      try {
        setFetchingPost(true);
        const res = await getPostById(id);
        setTitle(res.data.title);
        setContent(res.data.content);
        setPlatform(res.data.platform);
        setStatus(res.data.status);
      } catch (err) {
        console.error(err);
        alert("Failed to load post");
        navigate("/");
      } finally {
        setFetchingPost(false);
      }
    };

    fetchPost();
  }, [id, isEditMode, navigate]);

  const generateQuote = async () => {
    try {
      setLoadingQuote(true);
      const quote = await getRandomQuote();
      setContent(quote);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch quote");
    } finally {
      setLoadingQuote(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const postData = { title, content, platform, status };

      if (isEditMode) {
        await updatePost(id, postData);
        alert("Post Updated!");
      } else {
        await createPost(postData);
        alert("Post Created!");
      }
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error saving post");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => navigate("/");

  return {
    title,
    setTitle,
    content,
    setContent,
    platform,
    setPlatform,
    status,
    setStatus,
    loadingQuote,
    submitting,
    fetchingPost,
    isEditMode,
    generateQuote,
    handleSubmit,
    handleCancel,
  };
}
