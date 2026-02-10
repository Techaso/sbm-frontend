import { PLATFORMS, STATUSES } from "../../utils/constants";

export default function PostForm({
  title,
  setTitle,
  content,
  setContent,
  platform,
  setPlatform,
  status,
  setStatus,
  submitting,
  loadingQuote,
  isEditMode,
  onSubmit,
  onCancel,
  onGenerateQuote,
}) {
  return (
    <form onSubmit={onSubmit} className="cp-form">
      <div>
        <label className="cp-label">Post Title</label>
        <input
          className="cp-input"
          placeholder="Enter a catchy title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={submitting}
        />
      </div>

      <div>
        <label className="cp-label">Content</label>
        <div className="cp-content-row">
          <textarea
            className="cp-textarea"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="6"
            disabled={submitting}
          />
          <button
            type="button"
            onClick={onGenerateQuote}
            disabled={loadingQuote || submitting}
            title="Generate AI Quote"
            className="cp-quote-btn"
          >
            {loadingQuote ? "⏳" : "💡"}
          </button>
        </div>
      </div>

      <div className="cp-grid-row">
        <div className="cp-grid-item">
          <label className="cp-label">Platform</label>
          <select
            className="cp-select"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            disabled={submitting}
          >
            {PLATFORMS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="cp-grid-item">
          <label className="cp-label">Status</label>
          <select
            className="cp-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            disabled={submitting}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="cp-btn-row">
        <button
          type="button"
          onClick={onCancel}
          disabled={submitting}
          className="cp-btn-cancel"
        >
          Cancel
        </button>

        <button type="submit" disabled={submitting} className="cp-btn-submit">
          {submitting
            ? isEditMode
              ? "Updating..."
              : "Saving..."
            : isEditMode
              ? "Update Post"
              : "Create Post"}
        </button>
      </div>
    </form>
  );
}
