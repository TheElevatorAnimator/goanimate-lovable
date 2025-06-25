
import React from 'react';
import CustomButton from './ui/CustomButton';

interface QuickVideoMakerWrapperProps {
  onOpenVideoMaker: () => void;
}

const QuickVideoMakerWrapper: React.FC<QuickVideoMakerWrapperProps> = ({ onOpenVideoMaker }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-green-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold text-white drop-shadow-md flex items-center">
          ⚡ Quick Video Maker
        </h2>
        <p className="text-green-100 text-sm mt-1">
          Get started with GoAnimate in seconds!
        </p>
      </div>
      
      <div className="p-6">
        {/* Quick Start Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg border-2 border-blue-300">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🎬</div>
              <h3 className="font-bold text-lg text-blue-800">Template Videos</h3>
              <p className="text-sm text-blue-600 mt-1">Choose from pre-made templates</p>
            </div>
            <CustomButton
              variant="primary"
              className="w-full bg-blue-500 hover:bg-blue-600"
              onClick={() => alert('Template selection coming soon!')}
            >
              Browse Templates
            </CustomButton>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-lg border-2 border-purple-300">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="font-bold text-lg text-purple-800">Start from Scratch</h3>
              <p className="text-sm text-purple-600 mt-1">Create your own unique video</p>
            </div>
            <CustomButton
              variant="primary"
              className="w-full bg-purple-500 hover:bg-purple-600"
              onClick={onOpenVideoMaker}
            >
              Open Video Maker
            </CustomButton>
          </div>
        </div>
        
        {/* Features Preview */}
        <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
          <h4 className="font-bold text-gray-800 mb-3">What you can do:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-1">🎭</div>
              <p className="text-gray-600">Characters</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🏫</div>
              <p className="text-gray-600">Scenes</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">💬</div>
              <p className="text-gray-600">Speech</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🎵</div>
              <p className="text-gray-600">Music</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickVideoMakerWrapper;
