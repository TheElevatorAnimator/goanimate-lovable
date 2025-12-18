
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/ui/CustomButton';

const Explore = () => {
  const featuredVideos = [
    {
      id: 'classroom-intro',
      title: 'My Blog Introduction',
      author: 'meteor_ads',
      thumbnail: '/lovable-uploads/c703a1fb-8ce5-40fe-8633-779a08af993e.png',
      duration: '00:39',
      views: 0,
      likes: 0,
      isPublic: true,
      description: 'A classic Comedy World classroom scene introduction video'
    },
    {
      id: 'obama-animation',
      title: 'Obama Animation',
      author: 'meteor_ads',
      thumbnail: '/lovable-uploads/2cfd1c2e-bb23-4de5-a49b-f37d78674ee8.png',
      duration: '01:24',
      views: 12,
      likes: 3,
      isPublic: true,
      description: 'Political figure animation in Comedy World style'
    },
    {
      id: 'trial-error',
      title: 'Trial Error',
      author: 'meteor_ads',
      thumbnail: '/lovable-uploads/c703a1fb-8ce5-40fe-8633-779a08af993e.png',
      duration: '02:15',
      views: 8,
      likes: 1,
      isPublic: true,
      description: 'Courtroom drama animation'
    },
    {
      id: 'anime-adventure',
      title: 'Anime Adventure',
      author: 'sakura_fan',
      thumbnail: '/lovable-uploads/2cfd1c2e-bb23-4de5-a49b-f37d78674ee8.png',
      duration: '03:42',
      views: 156,
      likes: 28,
      isPublic: true,
      description: 'Epic anime-style battle sequence'
    },
    {
      id: 'space-mission',
      title: 'Space Mission Alpha',
      author: 'cosmic_creator',
      thumbnail: '/lovable-uploads/c703a1fb-8ce5-40fe-8633-779a08af993e.png',
      duration: '02:58',
      views: 89,
      likes: 15,
      isPublic: true,
      description: 'Intergalactic adventure with Space Citizens'
    },
    {
      id: 'comedy-skit',
      title: 'Office Comedy Skit',
      author: 'funny_bones',
      thumbnail: '/lovable-uploads/2cfd1c2e-bb23-4de5-a49b-f37d78674ee8.png',
      duration: '01:47',
      views: 234,
      likes: 42,
      isPublic: true,
      description: 'Hilarious office workplace comedy'
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
                <p className="text-orange-100 text-sm">Explore Community Videos</p>
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
            🌟 Explore Community Videos
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover amazing animations created by our community! Watch, like, and get inspired!
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-8 bg-white/90 rounded-lg shadow-lg border-4 border-white overflow-hidden">
          <div className="bg-gradient-to-r from-purple-400 to-purple-500 p-4">
            <h3 className="text-xl font-bold text-white">🎬 Featured Video</h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                <img 
                  src={featuredVideos[0].thumbnail} 
                  alt={featuredVideos[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                    <span className="text-2xl ml-1">▶️</span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  {featuredVideos[0].duration}
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">{featuredVideos[0].title}</h4>
                <p className="text-gray-600 mb-4">by {featuredVideos[0].author}</p>
                <p className="text-gray-700 mb-4">{featuredVideos[0].description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>👁️ {featuredVideos[0].views} views</span>
                  <span>👍 {featuredVideos[0].likes} likes</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">PUBLIC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVideos.slice(1).map((video) => (
            <div key={video.id} className="bg-white/90 rounded-lg shadow-lg border-4 border-white overflow-hidden hover:transform hover:scale-105 transition-all duration-200">
              <div className="relative bg-gray-800 aspect-video flex items-center justify-center">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center cursor-pointer">
                    <span className="text-xl ml-1">▶️</span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">{video.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {video.author}</p>
                <p className="text-xs text-gray-700 mb-3 line-clamp-2">{video.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span>👁️ {video.views}</span>
                    <span>👍 {video.likes}</span>
                  </div>
                  {video.isPublic && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">PUBLIC</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Import TTS Section */}
        <div className="mt-12 bg-gradient-to-r from-orange-300 to-orange-400 p-6 rounded-lg shadow-lg border-4 border-orange-500">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">🎤 Import TTS Voice Clips</h3>
            <p className="text-orange-700 mb-4">
              Get professional voice clips from lazypy.ro and ttstool.com for your animations!
            </p>
            <div className="flex justify-center space-x-4">
              <CustomButton 
                variant="outline" 
                className="bg-white text-orange-600 border-orange-600 hover:bg-orange-50 font-bold"
              >
                Visit lazypy.ro
              </CustomButton>
              <CustomButton 
                variant="outline" 
                className="bg-white text-orange-600 border-orange-600 hover:bg-orange-50 font-bold"
              >
                Visit ttstool.com
              </CustomButton>
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

export default Explore;
