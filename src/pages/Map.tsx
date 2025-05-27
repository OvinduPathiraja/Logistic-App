import React from 'react';
import Layout from '../components/Layout';
import { MapPin } from 'lucide-react';

const Map: React.FC = () => {
  return (
    <Layout title="Map">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center h-96 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
          <div className="text-center">
            <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Map Interface</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Map integration would be implemented here, showing shipment routes and locations.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Map;