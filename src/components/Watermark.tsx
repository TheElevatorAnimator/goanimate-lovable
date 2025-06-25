
import React from 'react';
import { X } from 'lucide-react';
import CustomButton from './ui/CustomButton';

interface WatermarkProps {
  isSubscribed: boolean;
  pricingInfo?: {
    usd: string;
    gbp: string;
  };
}

const Watermark: React.FC<WatermarkProps> = ({ 
  isSubscribed,
  pricingInfo = { usd: '0.99', gbp: '0.05' }
}) => {
  const handleGetGoPlus = () => {
    alert('🎬 Start your 3-week FREE trial of GoPlus!\n\n✨ Get access to:\n• Premium BFDI & II characters\n• HD video exports\n• No watermarks\n• Advanced themes\n• Priority support\n\nSign up now for just $0.99 USD / £0.05 GBP after trial!');
  };

  if (isSubscribed) return null;
  
  return (
    <>
      {/* Classic 2013 GoAnimate Watermark - Only shows for free users in exported videos */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] opacity-60 select-none">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 rounded-lg border-4 border-orange-600 shadow-2xl">
            <p className="font-bold text-6xl text-white drop-shadow-lg" 
               style={{ 
                 textShadow: "3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000",
                 fontFamily: "Arial, sans-serif",
                 letterSpacing: "2px"
               }}>
              GoAnimate
            </p>
            <p className="font-bold text-2xl text-yellow-200 text-center mt-2" 
               style={{ 
                 textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
                 fontFamily: "Arial, sans-serif"
               }}>
              FREE VERSION
            </p>
          </div>
        </div>
      </div>
      
      {/* GoPlus Upgrade Banner - Only shows for free users in exported videos */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 z-50 border-t-4 border-orange-700 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full mr-3 flex items-center justify-center animate-pulse">
                <span className="text-orange-500 font-bold text-lg">G</span>
              </div>
              <div>
                <p className="text-lg font-bold">
                  🎬 REMOVE WATERMARK WITH GoPlus!
                </p>
                <p className="text-sm text-orange-100">
                  Get unlimited characters, longer videos, and premium themes! Only {pricingInfo.usd} USD / {pricingInfo.gbp} GBP
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CustomButton
                variant="theme"
                theme="comedyWorld"
                size="sm"
                onClick={handleGetGoPlus}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg border-2 border-green-700"
              >
                <X size={16} />
                Upgrade to GoPlus
              </CustomButton>
              <span className="text-yellow-300 font-bold animate-pulse text-lg">START 3-WEEK FREE TRIAL!</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watermark;
