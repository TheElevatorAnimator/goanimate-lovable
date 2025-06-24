
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/ui/CustomButton';

const Explore = () => {
  const videoMakers = [
    {
      id: 'comedy-world',
      name: 'Comedy World',
      description: 'Create hilarious videos with classic GoAnimate characters',
      thumbnail: '🎭',
      isPremium: true
    },
    {
      id: 'anime',
      name: 'Anime Studio',
      description: 'Make epic anime-style animations',
      thumbnail: '⚔️',
      isPremium: true
    },
    {
      id: 'space-citizens',
      name: 'Space Citizens',
      description: 'Explore the galaxy with futuristic characters',
      thumbnail: '🚀',
      isPremium: true
    },
    {
      id: 'plotagon',
      name: 'Plotagon',
      description: 'Simple 3D character animations',
      thumbnail: '🎬',
      isPremium: false
    },
    {
      id: 'scratchverse',
      name: 'ScratchVerse',
      description: 'Colorful Scratch-inspired animations',
      thumbnail: '🐱',
      isPremium: false
    },
    {
      id: 'inanimate-insanity',
      name: 'Inanimate Insanity',
      description: 'Object show style animations',
      thumbnail: '🏆',
      isPremium: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg border-b-4 border-orange-600">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl font-bold text-orange-500">G</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                  GoAnimate
                </h1>
                <p className="text-orange-100 text-sm">Explore Video Makers</p>
              </div>
            </Link>
            <nav className="flex items-center space-x-4">
              <Link to="/">
                <CustomButton variant="outline" className="bg-white/20 text-white hover:bg-white/30">
                  Home
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

      <main className="container mx-auto p-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            🌟 Explore Video Makers
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose from our collection of video makers, each with unique characters and themes!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoMakers.map((maker) => (
            <div key={maker.id} className="bg-white/90 rounded-lg shadow-lg border-4 border-white overflow-hidden">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-32 flex items-center justify-center">
                <span className="text-6xl">{maker.thumbnail}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{maker.name}</h3>
                  {maker.isPremium && (
                    <span className="bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
                      GoPlus
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{maker.description}</p>
                <Link to="/video-maker">
                  <CustomButton 
                    variant="primary" 
                    className="w-full bg-blue-500 hover:bg-blue-600"
                  >
                    Try This Maker
                  </CustomButton>
                </Link>
              </div>
            </div>
          ))}
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

export default Explore;
