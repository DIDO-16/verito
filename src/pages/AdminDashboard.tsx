import React from 'react';
import { BarChart3, Users, Car, AlertTriangle } from 'lucide-react';
import { StatsCard } from '../components/Admin/StatsCard';
import { VehicleInspectionsChart } from '../components/Admin/VehicleInspectionsChart';
import { RecentInspections } from '../components/Admin/RecentInspections';
import { mockVehicles } from '../data/mockData';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export const AdminDashboard: React.FC = () => {
  const { user } = useAuthStore();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  const totalVehicles = mockVehicles.length;
  const totalInspections = mockVehicles.reduce(
    (acc, vehicle) => acc + vehicle.technicalHistory.length,
    0
  );
  const majorIssues = mockVehicles.reduce(
    (acc, vehicle) =>
      acc +
      vehicle.technicalHistory.filter((record) => record.severity === 'major')
        .length,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Vehicles"
          value={totalVehicles}
          icon={Car}
          trend={+5}
        />
        <StatsCard
          title="Total Inspections"
          value={totalInspections}
          icon={BarChart3}
          trend={+12}
        />
        <StatsCard
          title="Active Users"
          value={156}
          icon={Users}
          trend={+8}
        />
        <StatsCard
          title="Major Issues"
          value={majorIssues}
          icon={AlertTriangle}
          trend={-2}
          trendColor="green"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <VehicleInspectionsChart />
        <RecentInspections />
      </div>
    </div>
  );
};