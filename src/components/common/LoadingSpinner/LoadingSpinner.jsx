import "./LoadingSpinner.css";

export default function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="loading-container">
      <div className="loading-spinner" />
      <p className="loading-text">{text}</p>
    </div>
  );
}
