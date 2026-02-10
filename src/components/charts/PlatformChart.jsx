import { Pie } from "react-chartjs-2";
import { getChartOptions } from "./chartConfig";
import { PLATFORM_COLORS } from "../../utils/constants";
import { calcPercent } from "../../utils/helpers";

export default function PlatformChart({ posts }) {
  const total = posts.length;
  const linkedInCount = posts.filter((p) => p.platform === "LinkedIn").length;
  const twitterCount = posts.filter((p) => p.platform === "Twitter").length;
  const instaCount = posts.filter((p) => p.platform === "Instagram").length;

  const data = {
    labels: [
      `LinkedIn (${linkedInCount} - ${calcPercent(linkedInCount, total)}%)`,
      `Twitter (${twitterCount} - ${calcPercent(twitterCount, total)}%)`,
      `Instagram (${instaCount} - ${calcPercent(instaCount, total)}%)`,
    ],
    datasets: [
      {
        data: [linkedInCount, twitterCount, instaCount],
        backgroundColor: [
          PLATFORM_COLORS.LinkedIn,
          PLATFORM_COLORS.Twitter,
          PLATFORM_COLORS.Instagram,
        ],
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  return (
    <div className="dash-chart-card dash-chart-card-platform">
      <h3 className="dash-chart-title">📊 Platform Analytics</h3>
      <div className="dash-chart-wrapper">
        <Pie data={data} options={getChartOptions()} />
      </div>
    </div>
  );
}
