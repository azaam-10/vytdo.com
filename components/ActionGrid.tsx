
import React from 'react';

const ActionGrid: React.FC = () => {
  const actions = [
    {
      label: 'Teams',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFA533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      label: 'Record',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      label: 'Wallet management',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F56565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      label: 'Invite friends',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#63B3ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white py-6 flex justify-around border-b border-gray-100">
      {actions.map((action, idx) => (
        <div key={idx} className="flex flex-col items-center max-w-[80px]">
          <div className="mb-2">
            {action.icon}
          </div>
          <span className="text-[11px] text-gray-700 text-center leading-tight px-1 font-medium">{action.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ActionGrid;
