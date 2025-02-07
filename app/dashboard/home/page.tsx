// pages/Home.tsx

"use client";

import StatCard from "@/ui/StatsCards";
import ProgressGraph from "@/ui/ProgressGraph";
import RecentActivity from "@/ui/RecentActivity";
import AnimeTable from "@/ui/CustomTable";
import { FaRegPlayCircle, FaCheckCircle, FaPlus, FaEye } from "react-icons/fa";
import HeroSection from "@/ui/HeroSession";

const fakeStats = [
  {
    title: "Watched Animes",
    value: "120",
    change: "+12 this month",
    up: true,
    icon: <FaEye />,
  },
  {
    title: "Episodes Watched",
    value: "3400",
    change: "+120 this month",
    up: true,
    icon: <FaRegPlayCircle />,
  },
  {
    title: "Completed Animes",
    value: "80",
    change: "+5 this month",
    up: true,
    icon: <FaCheckCircle />,
  },
  {
    title: "New Additions",
    value: "15",
    change: "+3 this week",
    up: false,
    icon: <FaPlus />,
  },
];

const fakeGraphData = [
  { month: "Jan", progress: 10 },
  { month: "Feb", progress: 25 },
  { month: "Mar", progress: 40 },
  { month: "Apr", progress: 55 },
  { month: "May", progress: 65 },
  { month: "Jun", progress: 80 },
  { month: "Jul", progress: 90 },
];

const fakeActivity = [
  { action: "Added", name: "One Piece", date: "Today" },
  { action: "Completed", name: "Attack on Titan", date: "Yesterday" },
  { action: "Added", name: "Jujutsu Kaisen", date: "3 days ago" },
];



export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <HeroSection />

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Hello Sim, welcome to your Dashboard! 👋
        </h1>
      </div>

      {/* Stats Section */}
      <div className="bg-white pl-4 rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
        {fakeStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
        {/* Graph Section */}
        <div className="flex-1">
          <ProgressGraph data={fakeGraphData} />
        </div>

        {/* Recent Activity Section */}
        <div className="flex-1">
          <RecentActivity activities={fakeActivity} />
        </div>
      </div>

      {/* Anime Table Section */}
      <AnimeTable />
    </div>
  );
}
