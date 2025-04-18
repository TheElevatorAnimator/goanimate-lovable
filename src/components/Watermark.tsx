
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
  if (isSubscribed) return null;
  
  return (
    <>
      {/* Ugly Watermark - Only shows for free users in exported videos */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-20deg] opacity-50 select-none">
          <p className="font-sans text-8xl font-bold text-red-500 animate-pulse" 
             style={{ 
               textShadow: "3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000",
               fontFamily: "Arial, sans-serif",
               letterSpacing: "-2px"
             }}>
            PLOTAGONMIMIC
          </p>
          <p className="font-sans text-4xl font-bold text-yellow-300 text-center" 
             style={{ 
               textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
               fontFamily: "Arial, sans-serif"
             }}>
            FREE VERSION (EXPORTED VIDEO)
          </p>
        </div>
      </div>
      
      {/* Outro Banner - Only shows for free users in exported videos */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-3 z-50 animate-bounce">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              <p className="text-sm">
                <span className="font-bold">REMOVE WATERMARK & OUTRO FROM EXPORTED VIDEOS</span> - PlotPlus costs only {pricingInfo.usd} USD / {pricingInfo.gbp} GBP
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CustomButton
                variant="theme"
                theme="comedyWorld"
                size="sm"
                onClick={() => alert('Please subscribe to PlotPlus to remove the watermark and outro from exported videos!')}
                className="flex items-center gap-1"
              >
                <X size={14} />
                Remove
              </CustomButton>
              <span className="text-yellow-300 font-bold animate-pulse">START 3-WEEK FREE TRIAL!</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watermark;
