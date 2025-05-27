import React from 'react';
import Layout from '../components/Layout';
import ShipmentTable from '../components/logistics/ShipmentTable';

// Mock data
const shipments = [
  {
    id: 'SHP751036',
    clientName: 'Dominique Li',
    company: 'SpeedEx',
    status: 'In Transit' as const,
    method: 'Sea',
    package: 'Envelope',
    country: 'Australia',
    weight: 61.6,
    dimensions: '54x16x40',
    cost: 144.99
  },
  {
    id: 'SHP518252',
    clientName: 'Kenneth Ross',
    company: 'BlueCargo',
    status: 'Delivered' as const,
    method: 'Sea',
    package: 'Envelope',
    country: 'India',
    weight: 86.76,
    dimensions: '24x71x55',
    cost: 70.39
  },
  {
    id: 'SHP902862',
    clientName: 'Christopher Gordon',
    company: 'LogiTrans',
    status: 'Shipped' as const,
    method: 'Rail',
    package: 'Box',
    country: 'Canada',
    weight: 67.28,
    dimensions: '45x86x74',
    cost: 19.99
  },
  {
    id: 'SHP164856',
    clientName: 'Charles Valdez',
    company: 'QuickShip',
    status: 'Delivered' as const,
    method: 'Sea',
    package: 'Crate',
    country: 'USA',
    weight: 7.48,
    dimensions: '69x51x36',
    cost: 72.25
  }
];

const Logistics: React.FC = () => {
  return (
    <Layout title="Logistics">
      <ShipmentTable shipments={shipments} />
    </Layout>
  );
};

export default Logistics;