import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  color: string;
}

interface TaskCardProps {
  title: string;
  tasks: Task[];
}

const TaskCard: React.FC<TaskCardProps> = ({ title, tasks }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
        <ChevronRight size={20} className="text-gray-400" />
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {tasks.map((task) => (
          <div key={task.id} className="px-6 py-4 flex">
            <div className={`w-1 self-stretch ${task.color} rounded-full mr-4`}></div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-white">{task.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{task.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;