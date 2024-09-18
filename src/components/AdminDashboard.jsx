import React from 'react';
import { Line } from 'react-chartjs-2'; // Ensure this package is installed
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Menu, BarChart2, Users, DollarSign, TrendingUp, MoreVertical, ChevronDown } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
  datasets: [
    {
      label: 'Approved',
      data: [32, 38, 30, 42, 25, 50],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Submitted',
      data: [24, 22, 35, 45, 20, 38],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.4,
      fill: true,
    },
  ],
};

// Chart options without TypeScript type annotations
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Claims Over the Years',
      font: {
        size: 20,
        weight: 'bold',
      },
    },
  },
  scales: {
    x: {
      type: 'category',
      grid: {
        display: false,
      },
    },
    y: {
      type: 'linear',
      beginAtZero: true,
      max: 50,
      ticks: {
        stepSize: 10,
      },
    },
  },
};

export default function AdminDashboard() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">StudyMEISTER</h1>
        </div>
        <nav className="p-4">
          <a href="#" className="block py-2 px-4 text-blue-600 bg-blue-100 rounded">
            <Menu className="inline-block mr-2" size={18} />
            Dashboard
          </a>
          {/* Add more navigation items here */}
        </nav>
        <div className="mt-auto p-4 border-t">
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Upgrade to PRO
          </button>
        </div>
        <div className="p-4 border-t flex items-center">
          <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="font-semibold">Emma</p>
            <p className="text-sm text-gray-500">Admin Manager</p>
          </div>
          <ChevronDown className="ml-auto" size={18} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { title: 'Total Users', value: '25.1k', icon: Users, change: '+3.5%' },
            { title: 'Total Revenue', value: '$2,435k', icon: DollarSign, change: '+2.5%' },
            { title: 'Total Sessions', value: '3.5M', icon: BarChart2, change: '+9%' },
            { title: 'New Signups', value: '43.5k', icon: TrendingUp, change: '+12%' },
          ].map((kpi, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">{kpi.title}</span>
                <kpi.icon className="text-blue-500" size={24} />
              </div>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="text-sm text-green-500">{kpi.change}</div>
            </div>
          ))}
        </div>

        {/* User Table */}
        <div className="bg-white rounded-lg shadow mb-8 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Revenue</th>
                <th className="py-2 px-4 text-left">Sessions</th>
                <th className="py-2 px-4 text-left">Projects</th>
                <th className="py-2 px-4 text-left">Tasks</th>
                <th className="py-2 px-4 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Samantha Nayak', revenue: '$ 2543.50', sessions: 230, projects: 40, tasks: 25 },
                { name: 'Connie Smith', revenue: '$ 1657.40', sessions: 150, projects: 35, tasks: 18 },
                { name: 'Dennis Gideon', revenue: '$ 1845.20', sessions: 190, projects: 38, tasks: 22 },
                { name: 'Larissa Barton', revenue: '$ 2345.50', sessions: 220, projects: 42, tasks: 28 },
              ].map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">
                    <div className="flex items-center">
                      <img src="/placeholder.svg?height=32&width=32" alt={user.name} className="w-8 h-8 rounded-full mr-2" />
                      {user.name}
                    </div>
                  </td>
                  <td className="py-2 px-4">{user.revenue}</td>
                  <td className="py-2 px-4">{user.sessions}</td>
                  <td className="py-2 px-4">{user.projects}</td>
                  <td className="py-2 px-4">{user.tasks}</td>
                  <td className="py-2 px-4">
                    <MoreVertical size={18} className="text-gray-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <Line options={chartOptions} data={chartData} />
        </div>
      </main>
    </div>
  );
}