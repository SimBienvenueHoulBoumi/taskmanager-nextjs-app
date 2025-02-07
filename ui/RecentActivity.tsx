interface Activity {
    action: string;
    name: string;
    date: string;
  }
  
  interface RecentActivityProps {
    activities: Activity[];
  }
  
  const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-1 text-sm">
        {activities.map((activity, index) => (
          <li key={index} className="flex justify-between">
            <span>
              <strong>{activity.action}</strong>{" "}
              <span className="text-blue-500">{activity.name}</span>
            </span>
            <span className="text-gray-500">{activity.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default RecentActivity;
  