
import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoMaker = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 border-b-4 border-orange-700">
        <div className="container mx-auto p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded border-2 border-gray-300 flex items-center justify-center shadow-md">
                <span className="text-xl font-bold text-orange-600">G</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white drop-shadow-md">
                  GoAnimate
                </h1>
                <p className="text-orange-200 text-xs">Make Your Own Animated Videos!</p>
              </div>
            </div>
            <nav className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/')}
                className="text-white hover:text-orange-200 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/explore')}
                className="text-white hover:text-orange-200 font-medium"
              >
                Explore
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Thumbnail Banner Background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-100 overflow-hidden">
          {/* Video thumbnails background */}
          <div className="grid grid-cols-8 gap-1 opacity-30 p-2">
            {[...Array(32)].map((_, i) => (
              <div 
                key={i} 
                className="aspect-video bg-gradient-to-br from-blue-200 to-purple-200 rounded"
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 mx-auto max-w-4xl rounded-lg shadow-xl p-8 text-center border-4 border-blue-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              Make Awesome Animated Videos
            </h2>
          </div>

          {/* Video Maker Options */}
          <div className="max-w-4xl mx-auto mt-8 px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Quick Video Maker */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center border-4 border-blue-200">
                    <span className="text-4xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Video Maker</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    I want a "quick edit" that only have a couple of minutes to make this video.
                  </p>
                  <button
                    onClick={() => navigate('/quick-video-maker')}
                    className="w-full bg-gradient-to-b from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg border-2 border-orange-600 shadow-md transition-all"
                  >
                    SELECT A VIDEO TEMPLATE
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    New to Quick Video Maker? Tutorial
                  </p>
                </div>
              </div>

              {/* Full Video Maker */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center border-4 border-purple-200">
                    <span className="text-4xl">🎬</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Full Video Maker</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    I want full customization: the characters, backgrounds, props, actions and sound of my video.
                  </p>
                  <button
                    onClick={() => navigate('/full-video-maker')}
                    className="w-full bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg border-2 border-blue-700 shadow-md transition-all"
                  >
                    MAKE A VIDEO FROM SCRATCH
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    New to Full Video Maker? Tutorial
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Create Videos for Your Business Section */}
          <div className="mt-12 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Create Videos for Your Business!
              </h3>
              <div className="flex items-center justify-center gap-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-16 h-16 mx-auto mb-2 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-3xl">▶️</span>
                  </div>
                  <p className="text-white text-sm">Marketing</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-16 h-16 mx-auto mb-2 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💼</span>
                  </div>
                  <p className="text-white text-sm">Business</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-16 h-16 mx-auto mb-2 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <p className="text-white text-sm">Education</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="max-w-4xl mx-auto mt-12 px-4">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              What You Can Create
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center border border-gray-200">
                <div className="text-3xl mb-2">🎭</div>
                <p className="font-medium text-gray-800">Characters</p>
                <p className="text-xs text-gray-500">100,000+ characters</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center border border-gray-200">
                <div className="text-3xl mb-2">🏠</div>
                <p className="font-medium text-gray-800">Scenes</p>
                <p className="text-xs text-gray-500">1000+ backgrounds</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center border border-gray-200">
                <div className="text-3xl mb-2">💬</div>
                <p className="font-medium text-gray-800">Speech</p>
                <p className="text-xs text-gray-500">Text-to-speech</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center border border-gray-200">
                <div className="text-3xl mb-2">🎵</div>
                <p className="font-medium text-gray-800">Music</p>
                <p className="text-xs text-gray-500">Royalty-free tracks</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2011-2025 GoAnimate. Make Your Own Animated Videos!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VideoMaker;
