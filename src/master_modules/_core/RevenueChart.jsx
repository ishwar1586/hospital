import {
  BarChart, Bar, Tooltip, ResponsiveContainer
} from "recharts";
import { revenueData } from "@/master_modules/configs/revenueChart.mock";
import "@/master_assets/styles/revenuechart.css";

const RevenueChart = () => {
  return (
    <div className="revenue-card">
      <h4>Revenue</h4>
      <h2>$4,589</h2>
      <span className="green">+7.5%</span>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={revenueData}>
          <Tooltip />
          <Bar dataKey="profit" fill="#4f6df6" radius={[6,6,6,6]} />
          <Bar dataKey="month" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
