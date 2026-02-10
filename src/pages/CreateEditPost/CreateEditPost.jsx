import useCreateEditPost from "./useCreateEditPost";
import LoadingSpinner from "../../components/common/LoadingSpinner/LoadingSpinner";
import PostForm from "../../components/posts/PostForm";
import "./CreateEditPost.css";

export default function CreateEditPost() {
  const {
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
  } = useCreateEditPost();

  if (fetchingPost) {
    return <LoadingSpinner text="Loading post data..." />;
  }

  return (
    <div className="cp-container">
      {submitting && (
        <div className="cp-overlay">
          <div className="cp-overlay-spinner" />
          <p className="cp-overlay-text">
            {isEditMode ? "Updating post..." : "Creating post..."}
          </p>
        </div>
      )}

      <h2 className="cp-title">
        {isEditMode ? "✏️ Edit Post" : "✍️ Create New Post"}
      </h2>

      <PostForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        platform={platform}
        setPlatform={setPlatform}
        status={status}
        setStatus={setStatus}
        submitting={submitting}
        loadingQuote={loadingQuote}
        isEditMode={isEditMode}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        onGenerateQuote={generateQuote}
      />
    </div>
  );
}
