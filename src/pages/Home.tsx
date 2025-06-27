
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Site Moving Warning */}
      <div className="bg-red-600 text-white p-3 text-center font-bold animate-pulse">
        ⚠️ IMPORTANT NOTICE: This site is moving to a new home! Stay tuned for updates. ⚠️
      </div>

      {/* Top Navigation Bar */}
      <nav className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-4 text-sm">
          <button className="text-blue-300 hover:text-white">Login with Facebook</button>
          <button className="text-gray-300 hover:text-white">Sign Up</button>
          <button className="text-gray-300 hover:text-white">Login</button>
          <Link to="/video-maker">
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-white">Create</button>
          </Link>
          <Link to="/explore">
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-white">Explore</button>
          </Link>
          <button className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-white">Forums</button>
          <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white font-bold">GoPlus+</button>
        </div>
      </nav>

      {/* Header with Logo */}
      <header className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold">
              <span className="text-orange-500">Go!</span>
              <span className="text-gray-600">Animate</span>
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Main Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Can you make Cartoons?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            GoAnimate is the easiest way to make animations exactly the way you want.
          </p>

          {/* Video Preview Placeholder */}
          <div className="bg-gray-200 aspect-video rounded-lg mb-8 max-w-2xl mx-auto flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl text-gray-400 mb-4">▶️</div>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold">
                Watch the Demo
              </button>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-700 mb-2">
              On GoAnimate you can make your own animated characters,
            </p>
            <p className="text-lg text-gray-700 mb-2">
              direct your own cartoons and watch others' creations.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              It's easy, fun and free!
            </p>
          </div>

          <Link to="/video-maker">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-xl font-semibold">
              Sign Up
            </button>
          </Link>
        </div>

        {/* As Seen On Section */}
        <div className="mb-12">
          <div className="text-left mb-4">
            <span className="text-orange-500 font-bold text-lg">AS SEEN ON</span>
            <hr className="border-gray-300 mt-2" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center opacity-60">
            <div className="bg-blue-500 text-white px-3 py-2 text-center font-bold text-sm rounded">Mashable</div>
            <div className="bg-green-600 text-white px-3 py-2 text-center font-bold text-sm rounded">TechCrunch</div>
            <div className="bg-red-600 text-white px-3 py-2 text-center font-bold text-sm rounded">CNN</div>
            <div className="bg-gray-600 text-white px-3 py-2 text-center font-bold text-sm rounded">Digg</div>
            <div className="bg-orange-500 text-white px-3 py-2 text-center font-bold text-sm rounded">EW.com</div>
            <div className="bg-gray-800 text-white px-3 py-2 text-center font-bold text-sm rounded">WIRED</div>
          </div>
        </div>

        {/* Contest Banner */}
        <div className="bg-gradient-to-r from-yellow-900 to-yellow-700 rounded-lg p-6 text-white mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎸</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">BRING ON THE NOISE CONTEST</h3>
                <p className="text-lg">
                  Create a <span className="font-bold text-yellow-200">MUSIC VIDEO</span>
                </p>
                <p className="text-lg">and win some fabulous prizes!!</p>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white bg-opacity-20 rounded p-2 mb-2">
                <span className="text-sm">iPod & iPhone</span>
              </div>
              <div className="text-xs opacity-75">Tribe of Noise</div>
            </div>
          </div>
        </div>

        {/* Quick Start Options */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">🎬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Video Maker</h3>
              <p className="text-gray-600 mb-4">Start with pre-made templates</p>
            </div>
            <Link to="/video-maker">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
                Browse Templates
              </button>
            </Link>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Full Video Maker</h3>
              <p className="text-gray-600 mb-4">Create from scratch</p>
            </div>
            <Link to="/video-maker">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold">
                Start Creating
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 text-center py-6 mt-12">
        <p className="text-gray-600">© 2011 GoAnimate Inc. • Built with Flash Technology</p>
        <p className="text-gray-500 text-sm mt-2">Make Videos Like Never Before!</p>
      </footer>
    </div>
  );
};

export default Home;
