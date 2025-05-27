import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Truck, Map, DollarSign, Package, Users, Shield, Calendar } from 'lucide-react';

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  hasSubmenu?: boolean;
}

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { title: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { title: 'Logistics', path: '/logistics', icon: <Truck size={20} />, hasSubmenu: true },
    { title: 'Map', path: '/map', icon: <Map size={20} /> },
    { title: 'Finance', path: '/finance', icon: <DollarSign size={20} />, hasSubmenu: true },
    { title: 'Inventory', path: '/inventory', icon: <Package size={20} /> },
    { title: 'Customers', path: '/customers', icon: <Users size={20} /> },
    { title: 'Authentications', path: '/users', icon: <Shield size={20} />, hasSubmenu: true },
    { title: 'Calendar', path: '/calendar', icon: <Calendar size={20} /> }
  ];

  const toggleExpand = (title: string) => {
    if (expanded === title) {
      setExpanded(null);
    } else {
      setExpanded(title);
    }
  };

  return (
    <aside className="w-60 bg-[#1a2233] text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-8 pt-2">
          <span className="text-xl font-bold">XYZ Logistics</span>
        </div>
        
        <nav>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 rounded-md transition-colors hover:bg-[#2a3447] ${
                      isActive ? 'bg-[#2a3447]' : ''
                    }`
                  }
                  onClick={() => item.hasSubmenu && toggleExpand(item.title)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.title}</span>
                  {item.hasSubmenu && (
                    <span className="ml-auto">
                      {expanded === item.title ? '▼' : '▶'}
                    </span>
                  )}
                </NavLink>
                {item.hasSubmenu && expanded === item.title && (
                  <ul className="pl-10 mt-1 space-y-1">
                    <li>
                      <NavLink
                        to={`${item.path}/sub1`}
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-md transition-colors hover:bg-[#2a3447] ${
                            isActive ? 'bg-[#2a3447]' : ''
                          }`
                        }
                      >
                        Submenu 1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`${item.path}/sub2`}
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-md transition-colors hover:bg-[#2a3447] ${
                            isActive ? 'bg-[#2a3447]' : ''
                          }`
                        }
                      >
                        Submenu 2
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;