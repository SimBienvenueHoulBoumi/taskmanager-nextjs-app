import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ProgressGraphProps {
  data: { month: string, progress: number }[];
}

const ProgressGraph: React.FC<ProgressGraphProps> = ({ data }) => (
  <div className="bg-white p-6 text-sm">
    <h2 className="text-lg font-semibold mb-4">Viewing Progress</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="progress" stroke="#3b82f6" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ProgressGraph;