// components/StatCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { JSX } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  up: boolean;
  icon: JSX.Element;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  up,
  icon,
}) => (
  <Card className="shadow-md hover:shadow-lg transition-all duration-300 rounded-lg">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex justify-start items-center space-x-2">
        <div className="text-5xl">{icon}</div>
        <div className="flex flex-col">
          <p className="text-3xl font-semibold">{value}</p>
          <span
            className={`flex items-center text-sm ${
              up ? "text-green-500" : "text-red-500"
            }`}
          >
            {up ? (
              <FaArrowUp className="mr-1" />
            ) : (
              <FaArrowDown className="mr-1" />
            )}
            {change}
          </span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default StatCard;
