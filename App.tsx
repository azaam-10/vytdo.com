
import React, { useState } from 'react';
import Header from './components/Header';
import ActionGrid from './components/ActionGrid';
import MenuList from './components/MenuList';
import BottomNav from './components/BottomNav';
import TaskModal from './components/TaskModal';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Mine');
  const USERNAME = "370mohmad";

  return (
    <div className="flex flex-col min-h-screen max-w-[430px] mx-auto bg-[#F8F8F8] relative pb-20 shadow-xl overflow-hidden">
      {/* Modal for the user task flow */}
      <TaskModal username={USERNAME} />

      {/* Top Header Section */}
      <Header 
        username={USERNAME}
        invitationCode="804461" 
        balance="4663.6366" 
      />

      {/* Main Content */}
      <div className="flex-1 w-full">
        {/* Quick Actions Row */}
        <ActionGrid />

        {/* Menu List */}
        <div className="px-3 mt-4">
          <MenuList />
        </div>
      </div>

      {/* Bottom Sticky Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
