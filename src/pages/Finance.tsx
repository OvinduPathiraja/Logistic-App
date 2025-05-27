import React from 'react';
import Layout from '../components/Layout';
import { BarChart, DollarSign } from 'lucide-react';

const Finance: React.FC = () => {
  return (
    <Layout title="Finance">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
            <BarChart className="mr-2" size={20} />
            Revenue Overview
          </h2>
          <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Revenue chart will be displayed here</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
            <DollarSign className="mr-2" size={20} />
            Financial Summary
          </h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">$245,890.65</p>
              <p className="text-xs text-green-500 flex items-center">
                <span>↑</span> 12.5% from last month
              </p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Expenses</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">$103,430.00</p>
              <p className="text-xs text-red-500 flex items-center">
                <span>↑</span> 8.2% from last month
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Net Profit</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">$142,460.65</p>
              <p className="text-xs text-green-500 flex items-center">
                <span>↑</span> 15.3% from last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Finance;