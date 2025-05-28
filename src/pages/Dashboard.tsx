import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Needed to read query params
import Layout from '../components/Layout';
import StatCard from '../components/dashboard/StatCard';
import TaskCard from '../components/dashboard/TaskCard';
import { Package, ShoppingCart, DollarSign, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const [userId, setUserId] = useState<string | null>(null);

  // Extract user from query string
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const user = params.get('user');
    setUserId(user);
  }, [location.search]);

  // Optional: use userId to fetch personalized data
  useEffect(() => {
    if (userId) {
      console.log('User ID from Cognito:', userId);

      // Example: Fetch user-specific tasks or stats from backend
      // fetch(`/api/user-dashboard?user=${userId}`)
      //   .then(res => res.json())
      //   .then(data => setTasks(data));
    }
  }, [userId]);

  // Mock data (this could be dynamic if fetched above)
  const todoTasks = [
    {
      id: '1',
      title: 'Dashboard',
      description: 'Complete the dashboard design and implementation for the logistics platform.',
      color: 'bg-red-500'
    },
    {
      id: '2',
      title: 'New project',
      description: 'Setup project requirements and initial documentation for the client.',
      color: 'bg-red-500'
    }
  ];

  const inProgressTasks = [
    {
      id: '3',
      title: 'New Code Update',
      description: 'Implement the new features requested by the client for the tracking system.',
      color: 'bg-yellow-500'
    },
    {
      id: '4',
      title: 'Meeting',
      description: 'Prepare presentation for the stakeholder meeting scheduled for tomorrow.',
      color: 'bg-yellow-500'
    }
  ];

  const completedTasks = [
    {
      id: '5',
      title: 'Job title',
      description: 'Updated job descriptions for all logistics department positions.',
      color: 'bg-green-500'
    }
  ];

  return (
    <Layout title="Dashboard">
      <div className="mb-4">
        {userId && (
          <div className="text-sm text-gray-600">
            Logged in as <strong>{userId}</strong>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Works" value="543" icon={<Package size={32} />} color="bg-blue-500" />
        <StatCard title="Sales" value="3510" icon={<ShoppingCart size={32} />} color="bg-green-500" />
        <StatCard title="Earnings" value="$43,567.53" icon={<DollarSign size={32} />} color="bg-orange-500" />
        <StatCard title="New Users" value="11" icon={<Users size={32} />} color="bg-pink-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TaskCard title="Todos" tasks={todoTasks} />
        <TaskCard title="In Progress" tasks={inProgressTasks} />
        <TaskCard title="Completed" tasks={completedTasks} />
      </div>
    </Layout>
  );
};

export default Dashboard;
