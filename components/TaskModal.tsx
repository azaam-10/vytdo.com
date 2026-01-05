
import React, { useState } from 'react';

interface TaskModalProps {
  username: string;
}

const TaskModal: React.FC<TaskModalProps> = ({ username }) => {
  const [step, setStep] = useState(1);
  const [walletAddress, setWalletAddress] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Blurred Backdrop - Reduced blur intensity */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-[3px] transition-all duration-300"
      />

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-[340px] rounded-[24px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 text-right" dir="rtl">
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">أهلاً بك {username}</h3>
              <p className="text-gray-600 leading-relaxed">
                تم حل أمر المهام اضغط التالي وقم بوضع رابط المنصة <span className="font-bold text-[#7C4A50]">mini pro</span> لقسم الإيداع حصراً.
              </p>
              <button 
                onClick={handleNext}
                className="w-full py-3 bg-[#7C4A50] text-white rounded-xl font-bold hover:bg-[#9B4A4E] transition-colors"
              >
                التالي
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">إعداد محفظة السحب</h3>
              <p className="text-gray-600">الرجاء وضع رابط محفظة <span className="font-bold">BEP20</span> الخاصة بك:</p>
              <input 
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="0x..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C4A50]/50 text-left"
                dir="ltr"
              />
              <button 
                onClick={handleNext}
                disabled={!walletAddress}
                className={`w-full py-3 bg-[#7C4A50] text-white rounded-xl font-bold transition-all ${!walletAddress ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#9B4A4E]'}`}
              >
                التالي
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">أهلاً بك {username}</h3>
              <p className="text-sm text-gray-600 leading-loose">
                بقي أمر إيداع مبلغ <span className="font-bold text-red-600 text-lg">237.47</span> عملة <span className="font-bold">USDT BEP20</span> لفتح قناة السحب.
                <br />
                <span className="text-xs text-gray-500 italic">هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro.</span>
              </p>
              
              <div className="bg-gray-50 p-3 rounded-lg border border-dashed border-gray-300 break-all">
                <p className="text-[10px] text-gray-400 mb-1 text-center">عنوان الإيداع (BEP20)</p>
                <p className="text-[11px] font-mono text-center text-blue-600 select-all">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</p>
              </div>

              <button 
                onClick={handleNext}
                className="w-full py-3 bg-[#1F6AE1] text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                تم الإيداع
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="py-8 flex flex-col items-center justify-center space-y-4">
              <div className="w-12 h-12 border-4 border-[#7C4A50] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-lg font-bold text-gray-800 text-center">
                الرجاء الانتظار للتأكد من عملية الإيداع...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
