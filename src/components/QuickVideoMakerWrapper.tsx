
import React from 'react';
import CustomButton from './ui/CustomButton';

interface QuickVideoMakerWrapperProps {
  onOpenVideoMaker: () => void;
}

const QuickVideoMakerWrapper: React.FC<QuickVideoMakerWrapperProps> = ({ onOpenVideoMaker }) => {
  return (
    <div className="goanimate-2011-card">
      {/* Header */}
      <div className="goanimate-2011-gradient-green p-4 rounded-t-lg">
        <h2 className="text-xl font-bold goanimate-2011-text-white">
          ⚡ Quick Video Maker
        </h2>
        <p className="text-green-200 text-sm mt-1">
          Get started with GoAnimate in seconds!
        </p>
      </div>
      
      <div className="p-5">
        {/* Quick Start Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="goanimate-2011-card p-4 bg-blue-50">
            <div className="text-center mb-3">
              <div className="text-3xl mb-2">🎬</div>
              <h3 className="font-bold text-lg text-blue-800 goanimate-2011-text">Template Videos</h3>
              <p className="text-sm text-blue-600 mt-1">Choose from pre-made templates</p>
            </div>
            <button
              className="w-full goanimate-2011-button text-sm py-2"
              onClick={() => alert('Template selection coming soon!')}
            >
              Browse Templates
            </button>
          </div>
          
          <div className="goanimate-2011-card p-4 bg-purple-50">
            <div className="text-center mb-3">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-bold text-lg text-purple-800 goanimate-2011-text">Start from Scratch</h3>
              <p className="text-sm text-purple-600 mt-1">Create your own unique video</p>
            </div>
            <button
              className="w-full goanimate-2011-button-green text-sm py-2"
              onClick={onOpenVideoMaker}
            >
              Open Video Maker
            </button>
          </div>
        </div>
        
        {/* Features Preview */}
        <div className="goanimate-2011-card p-4 bg-gray-50">
          <h4 className="font-bold text-gray-800 mb-3 goanimate-2011-text">What you can do:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-1">🎭</div>
              <p className="text-gray-600 goanimate-2011-text">Characters</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🏫</div>
              <p className="text-gray-600 goanimate-2011-text">Scenes</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">💬</div>
              <p className="text-gray-600 goanimate-2011-text">Speech</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🎵</div>
              <p className="text-gray-600 goanimate-2011-text">Music</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickVideoMakerWrapper;
