import React from 'react';
import { Line } from 'react-chartjs-2';
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
import { Users, DollarSign, BarChart2, UserPlus, MoreVertical } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const kpiData = [
  { title: 'Total Users', value: '25.1k', icon: Users, change: '+3.5%' },
  { title: 'Total Profit', value: '$2,435k', icon: DollarSign, change: '+2.5%' },
  { title: 'Total Sessions', value: '3.5M', icon: BarChart2, change: '+9%' },
  { title: 'New Signups', value: '43.5k', icon: UserPlus, change: '+12%' },
];

const userData = [
  { name: 'Nicholas Patrick', img: '/Nicholas.png?height=40&width=40', revenue: '$ 2543.50', sessions: 230, projects: 40, tasks: 25 },
  { name: 'Cordell Edwards', img: '/Cordell.png?height=40&width=40', revenue: '$ 1657.40', sessions: 150, projects: 35, tasks: 18 },
  { name: 'Derrick Spencer', img: '/Derrick.png?height=40&width=40', revenue: '$ 1845.20', sessions: 190, projects: 38, tasks: 22 },
  { name: 'Larissa Burton', img: '/Larissa.png?height=40&width=40', revenue: '$ 2345.50', sessions: 220, projects: 42, tasks: 28 },
];

const chartData = {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
  datasets: [
    {
      label: 'Approved',
      data: [30, 40, 25, 40, 30, 45],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Submitted',
      data: [25, 35, 40, 30, 25, 40],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.4,
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Claims Over the Years',
    },
  },
  scales: {
    x: {
      type: 'category',
    },
    y: {
      type: 'linear',
      beginAtZero: true,
    },
  },
};

export default function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpiData.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500 text-sm">{item.title}</span>
              <item.icon className="text-blue-500" size={20} />
            </div>
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="text-green-500 text-sm">{item.change}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4 mb-6">
        {userData.map((user, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:bg-gray-50">
            <div className="flex items-center px-6 py-4">
              <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={user.img} alt="" />
              </div>
              <div className="ml-4 flex-grow">
                <div className="text-sm font-medium text-gray-900">{user.name}</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-500 w-24">{user.revenue}</div>
                <div className="text-sm text-gray-500 w-24">{user.sessions}</div>
                <div className="text-sm text-gray-500 w-24">{user.projects}</div>
                <div className="text-sm text-gray-500 w-24">{user.tasks}</div>
                <MoreVertical size={20} className="text-gray-400 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <Line options={chartOptions} data={chartData} />
      </div>
    </div>
  );
}