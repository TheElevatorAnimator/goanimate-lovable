
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/ui/CustomButton';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600">
      {/* GoAnimate Header */}
      <header className="bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg border-b-4 border-orange-600">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl font-bold text-orange-500">G</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                  GoAnimate
                </h1>
                <p className="text-orange-100 text-sm">Make a Video Online for Free!</p>
              </div>
            </div>
            <nav className="flex items-center space-x-4">
              <Link to="/explore">
                <CustomButton variant="outline" className="bg-white/20 text-white hover:bg-white/30">
                  Explore
                </CustomButton>
              </Link>
              <Link to="/video-maker">
                <CustomButton variant="primary" className="bg-green-500 hover:bg-green-600">
                  Make a Video
                </CustomButton>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            🎬 Make Videos Like Never Before!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Create amazing animated videos with our easy-to-use GoAnimate video maker. 
            Choose from thousands of characters, scenes, and animations!
          </p>
          <Link to="/video-maker">
            <CustomButton 
              variant="accent" 
              size="lg"
              className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold px-8 py-4 text-xl shadow-lg"
            >
              🚀 Start Making Videos Now
            </CustomButton>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/90 p-6 rounded-lg shadow-lg border-4 border-white">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Thousands of Characters</h3>
            <p className="text-gray-600">Choose from Comedy World, Anime, Space Citizens, and more!</p>
          </div>
          
          <div className="bg-white/90 p-6 rounded-lg shadow-lg border-4 border-white">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/2cfd1c2e-bb23-4de5-a49b-f37d78674ee8.png" 
                alt="GoAnimate Video Maker Interface"
                className="w-16 h-16 mx-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Amazing Scenes</h3>
            <p className="text-gray-600">Perfect backgrounds for any story you want to tell.</p>
          </div>
          
          <div className="bg-white/90 p-6 rounded-lg shadow-lg border-4 border-white">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Text-to-Speech</h3>
            <p className="text-gray-600">Make your characters talk with realistic voices!</p>
          </div>
        </div>

        {/* Sample Videos */}
        <div className="bg-white/90 p-8 rounded-lg shadow-lg border-4 border-white">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Featured Videos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">▶️</div>
                <p>Comedy World Sample</p>
              </div>
            </div>
            <div className="bg-gray-800 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">▶️</div>
                <p>Anime Adventure Sample</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-600 to-gray-700 text-white text-center py-6 mt-12">
        <p className="font-bold text-lg">🎭 GoAnimate - Make Videos Like Never Before!</p>
        <p className="text-gray-300 text-sm mt-1">© 2013 GoAnimate Inc. • Built with TypeScript & CSS</p>
      </footer>
    </div>
  );
};

export default Home;
