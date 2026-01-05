
import React from 'react';

interface HeaderProps {
  username: string;
  invitationCode: string;
  balance: string;
}

const Header: React.FC<HeaderProps> = ({ username, invitationCode, balance }) => {
  return (
    <div className="bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] px-4 pt-8 pb-10 text-white relative">
      {/* Top Bar with Chat Icon */}
      <div className="absolute top-10 right-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white opacity-90">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 9h8M8 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* User Info Section */}
      <div className="flex items-center space-x-3 mb-8">
        {/* Avatar: Custom Logo with 5 Pentagons */}
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]">
            <polygon points="50,15 65,25 60,42 40,42 35,25" fill="#E55050" transform="rotate(0, 50, 50) translate(0, -5)"/>
            <polygon points="50,15 65,25 60,42 40,42 35,25" fill="#FFC03D" transform="rotate(72, 50, 50) translate(0, -5)"/>
            <polygon points="50,15 65,25 60,42 40,42 35,25" fill="#956AB4" transform="rotate(144, 50, 50) translate(0, -5)"/>
            <polygon points="50,15 65,25 60,42 40,42 35,25" fill="#3688B2" transform="rotate(216, 50, 50) translate(0, -5)"/>
            <polygon points="50,15 65,25 60,42 40,42 35,25" fill="#54B46E" transform="rotate(288, 50, 50) translate(0, -5)"/>
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h2 className="text-[19px] font-bold tracking-tight">{username}</h2>
            <span className="bg-[#F5B400] text-white text-[10px] px-1.5 py-0.5 rounded-[6px] font-bold italic translate-y-[1px]">VIP 0</span>
          </div>
          <p className="text-[13px] opacity-90 mt-0.5">Invitation code: {invitationCode}</p>
        </div>
      </div>

      {/* Account Balance Row */}
      <div className="flex items-center justify-between px-1">
        <div className="flex flex-col">
          <p className="text-[14px] font-medium opacity-100 mb-1">My Account</p>
          <div className="flex items-baseline">
            <span className="text-[13px] mr-1 font-medium">USDT</span>
            <span className="text-[28px] font-bold leading-none">{balance}</span>
          </div>
        </div>

        {/* Action Buttons: Deposit & Withdrawal */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <button className="w-[58px] h-[58px] bg-[#FFFFFF] rounded-[22px] flex items-center justify-center shadow-md">
              {/* Custom Blue Wallet Icon */}
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="12" rx="3" fill="#1F6AE1" />
                <path d="M14 9H21V15H14C12.3431 15 11 13.6569 11 12C11 10.3431 12.3431 9 14 9Z" fill="white" />
                <circle cx="14" cy="12" r="1.5" fill="#1F6AE1" />
              </svg>
            </button>
            <span className="text-[12px] mt-2 font-medium opacity-100">Deposit</span>
          </div>

          <div className="flex flex-col items-center">
            <button className="w-[58px] h-[58px] bg-[#FFFFFF] rounded-[22px] flex items-center justify-center shadow-md">
              {/* Custom Blue Card Icon */}
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="12" rx="3" fill="#1F6AE1" />
                <rect x="3" y="9" width="18" height="3" fill="white" opacity="0.8" />
                <rect x="15" y="14" width="3" height="2" rx="0.5" fill="white" />
              </svg>
            </button>
            <span className="text-[12px] mt-2 font-medium opacity-100">Withdrawal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
