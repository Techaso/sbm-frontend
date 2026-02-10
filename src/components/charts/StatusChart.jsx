import { Pie } from "react-chartjs-2";
import { getChartOptions } from "./chartConfig";
import { STATUS_COLORS } from "../../utils/constants";
import { calcPercent } from "../../utils/helpers";

export default function StatusChart({ posts }) {
  const total = posts.length;
  const draftCount = posts.filter((p) => p.status === "Draft").length;
  const publishedCount = posts.filter((p) => p.status === "Published").length;

  const data = {
    labels: [
      `Draft (${draftCount} - ${calcPercent(draftCount, total)}%)`,
      `Published (${publishedCount} - ${calcPercent(publishedCount, total)}%)`,
    ],
    datasets: [
      {
        data: [draftCount, publishedCount],
        backgroundColor: [STATUS_COLORS.Draft, STATUS_COLORS.Published],
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  return (
    <div className="dash-chart-card">
      <h3 className="dash-chart-title">📈 Status Analytics</h3>
      <div className="dash-chart-wrapper">
        <Pie data={data} options={getChartOptions()} />
      </div>
    </div>
  );
}
