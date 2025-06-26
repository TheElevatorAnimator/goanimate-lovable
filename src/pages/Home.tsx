
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/ui/CustomButton';

const Home = () => {
  return (
    <div className="min-h-screen goanimate-2011-gradient-blue">
      {/* 2011 GoAnimate Header */}
      <header className="goanimate-2011-header">
        <div className="container mx-auto p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded border border-gray-400 flex items-center justify-center shadow-sm">
                <span className="text-xl font-bold text-orange-600">G</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold goanimate-2011-text-white">
                  GoAnimate
                </h1>
                <p className="text-orange-200 text-xs">Make a Video Online for Free!</p>
              </div>
            </div>
            <nav className="flex items-center space-x-2">
              <Link to="/explore">
                <button className="goanimate-2011-button px-3 py-1 text-sm">
                  Explore
                </button>
              </Link>
              <Link to="/video-maker">
                <button className="goanimate-2011-button-green px-4 py-2 text-sm">
                  Make a Video
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto p-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold goanimate-2011-text-white mb-3">
            🎬 Make Videos Like Never Before!
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-xl mx-auto">
            Create amazing animated videos with our easy-to-use GoAnimate video maker. 
            Choose from thousands of characters, scenes, and animations!
          </p>
          <Link to="/video-maker">
            <button className="goanimate-2011-button-green px-6 py-3 text-lg">
              🚀 Start Making Videos Now
            </button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="goanimate-2011-card p-5">
            <div className="text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 goanimate-2011-text">Thousands of Characters</h3>
              <p className="text-gray-600 text-sm">Choose from Comedy World, Anime, Space Citizens, and more!</p>
            </div>
          </div>
          
          <div className="goanimate-2011-card p-5">
            <div className="text-center">
              <div className="mb-3">
                <img 
                  src="/lovable-uploads/2cfd1c2e-bb23-4de5-a49b-f37d78674ee8.png" 
                  alt="GoAnimate Video Maker Interface"
                  className="w-12 h-12 mx-auto object-cover rounded border border-gray-300"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 goanimate-2011-text">Amazing Scenes</h3>
              <p className="text-gray-600 text-sm">Perfect backgrounds for any story you want to tell.</p>
            </div>
          </div>
          
          <div className="goanimate-2011-card p-5">
            <div className="text-center">
              <div className="text-3xl mb-3">🎤</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 goanimate-2011-text">Text-to-Speech</h3>
              <p className="text-gray-600 text-sm">Make your characters talk with realistic voices!</p>
            </div>
          </div>
        </div>

        {/* Sample Videos */}
        <div className="goanimate-2011-card p-6">
          <div className="goanimate-2011-card-header mb-4">
            <h3 className="text-xl text-gray-800">Featured Videos</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 aspect-video rounded border border-gray-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-3xl mb-2">▶️</div>
                <p className="text-sm">Comedy World Sample</p>
              </div>
            </div>
            <div className="bg-gray-800 aspect-video rounded border border-gray-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-3xl mb-2">▶️</div>
                <p className="text-sm">Anime Adventure Sample</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-700 text-white text-center py-4 mt-8 border-t border-gray-600">
        <p className="font-bold">🎭 GoAnimate - Make Videos Like Never Before!</p>
        <p className="text-gray-300 text-xs mt-1">© 2011 GoAnimate Inc. • Built with Flash Technology</p>
      </footer>
    </div>
  );
};

export default Home;
