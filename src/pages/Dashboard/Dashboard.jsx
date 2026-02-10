import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import useDashboard from "./useDashboard";
import LoadingSpinner from "../../components/common/LoadingSpinner/LoadingSpinner";
import PlatformChart from "../../components/charts/PlatformChart";
import StatusChart from "../../components/charts/StatusChart";
import PostList from "../../components/posts/PostList";
import { calcPercent, countByField } from "../../utils/helpers";
import "./Dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const { posts, loading, deleting, handleDelete, handleEdit } = useDashboard();

  if (loading) {
    return <LoadingSpinner text="Loading posts..." />;
  }

  const totalPosts = posts.length;
  const publishedCount = countByField(posts, "status", "Published");
  const draftCount = countByField(posts, "status", "Draft");
  const publishedPercent = calcPercent(publishedCount, totalPosts);
  const draftPercent = calcPercent(draftCount, totalPosts);

  return (
    <div className="dash-root">
      <div className="dash-summary-bar">
        <div className="dash-summary-grid">
          <div className="dash-summary-card dash-summary-card-total">
            <div className="dash-summary-val">{totalPosts}</div>
            <div className="dash-summary-label">Total Posts</div>
          </div>
          <div className="dash-summary-card dash-summary-card-published">
            <div className="dash-summary-val">{publishedCount}</div>
            <div className="dash-summary-label">
              Published ({publishedPercent}%)
            </div>
          </div>
          <div className="dash-summary-card dash-summary-card-draft">
            <div className="dash-summary-val">{draftCount}</div>
            <div className="dash-summary-label">Drafts ({draftPercent}%)</div>
          </div>
        </div>
      </div>

      <div className="dash-main-content">
        <div className="dash-flex-row">
          <div className="dash-charts-col">
            <PlatformChart posts={posts} />
            <StatusChart posts={posts} />
          </div>

          <div className="dash-posts-col">
            <div className="dash-posts-card">
              <h3 className="dash-posts-title">Your Posts ({posts.length})</h3>
              <PostList
                posts={posts}
                deleting={deleting}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
