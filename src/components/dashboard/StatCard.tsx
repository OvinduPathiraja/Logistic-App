import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  textColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  color,
  textColor = 'text-white'
}) => {
  return (
    <div className={`${color} rounded-lg shadow-md p-6`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className={`text-sm font-medium ${textColor}`}>{title}</h3>
          <p className={`text-3xl font-bold mt-1 ${textColor}`}>{value}</p>
        </div>
        <div className={textColor}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;