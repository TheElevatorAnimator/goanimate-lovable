
import React, { useState } from 'react';
import { AnimationProject } from '@/types/animation';
import { AVAILABLE_CHARACTERS } from '@/constants/characters';
import { AVAILABLE_SCENES } from '@/constants/scenes';
import { AVAILABLE_PROPS } from '@/constants/props';

interface GoAnimate2011VideoMakerProps {
  project: AnimationProject;
  onUpdateProject: (project: AnimationProject) => void;
}

const GoAnimate2011VideoMaker: React.FC<GoAnimate2011VideoMakerProps> = ({ project, onUpdateProject }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');
  const [selectedScene, setSelectedScene] = useState(project.scene || 'comedy-world-bedroom');
  const [activeTab, setActiveTab] = useState<'characters' | 'speech' | 'props' | 'sounds' | 'effects'>('characters');

  const handleSceneChange = (sceneId: string) => {
    setSelectedScene(sceneId);
    onUpdateProject({
      ...project,
      scene: sceneId
    });
  };

  const getSceneBackground = () => {
    const scene = AVAILABLE_SCENES.find(s => s.id === selectedScene);
    if (!scene) return 'bg-gradient-to-br from-gray-300 to-gray-500';
    
    switch (scene.background) {
      case 'office':
        return 'bg-gradient-to-br from-blue-100 to-blue-200';
      case 'park':
        return 'bg-gradient-to-br from-green-200 to-green-300';
      case 'beach':
        return 'bg-gradient-to-br from-yellow-100 to-blue-200';
      case 'city':
        return 'bg-gradient-to-br from-gray-300 to-gray-500';
      case 'school':
        return 'bg-gradient-to-br from-orange-200 to-yellow-300';
      case 'bedroom':
        return 'bg-gradient-to-br from-purple-200 to-pink-200';
      case 'dojo':
        return 'bg-gradient-to-br from-red-200 to-orange-300';
      case 'space-station':
        return 'bg-gradient-to-br from-purple-900 to-black';
      case 'street':
        return 'bg-gradient-to-br from-gray-400 to-gray-600';
      case 'scratch-stage':
        return 'bg-gradient-to-br from-blue-400 to-blue-600';
      case 'scratch-park':
        return 'bg-gradient-to-br from-green-400 to-yellow-300';
      case 'scratch-city':
        return 'bg-gradient-to-br from-orange-400 to-red-500';
      case 'hotel-lobby':
        return 'bg-gradient-to-br from-purple-200 to-pink-300';
      case 'bfdi-goiky':
        return 'bg-gradient-to-br from-green-300 to-blue-400';
      case 'bfdi-dream-island':
        return 'bg-gradient-to-br from-yellow-200 to-green-400';
      default:
        return 'bg-gradient-to-br from-purple-200 to-indigo-300';
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'characters':
        return (
          <div className="flex-1 overflow-y-auto p-2">
            <div className="grid grid-cols-3 gap-1">
              {AVAILABLE_CHARACTERS.slice(0, 15).map((character) => (
                <div 
                  key={character.id}
                  className={`aspect-square border-2 rounded cursor-pointer hover:border-blue-400 ${
                    selectedCharacter === character.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
                  }`}
                  onClick={() => setSelectedCharacter(character.id)}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-1">
                    {character.imageUrl ? (
                      <img 
                        src={character.imageUrl}
                        alt={character.name}
                        className="w-10 h-10 object-contain mb-1"
                        onError={(e) => {
                          // Fallback to emoji if image fails
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent && parent.querySelector('.fallback-emoji') === null) {
                            const fallback = document.createElement('div');
                            fallback.className = 'fallback-emoji text-2xl mb-1';
                            fallback.textContent = character.name.includes('Eric') ? '👨' : 
                                                 character.name.includes('Jennifer') ? '👩' : 
                                                 character.name.includes('Joey') ? '👦' : 
                                                 character.name.includes('Sakura') ? '👧' : 
                                                 character.name.includes('Robot') ? '🤖' : 
                                                 character.name.includes('Leafy') ? '🍃' : 
                                                 character.name.includes('Firey') ? '🔥' : 
                                                 character.name.includes('Bubble') ? '🫧' : 
                                                 character.name.includes('Bot') ? '🤖' : 
                                                 character.name.includes('Cat') ? '🐱' : '👤';
                            parent.insertBefore(fallback, parent.firstChild);
                          }
                        }}
                      />
                    ) : (
                      <div className="text-2xl mb-1">
                        {character.name.includes('Eric') ? '👨' : 
                         character.name.includes('Jennifer') ? '👩' : 
                         character.name.includes('Joey') ? '👦' : 
                         character.name.includes('Sakura') ? '👧' : 
                         character.name.includes('Robot') ? '🤖' : 
                         character.name.includes('Leafy') ? '🍃' : 
                         character.name.includes('Firey') ? '🔥' : 
                         character.name.includes('Bubble') ? '🫧' : 
                         character.name.includes('Bot') ? '🤖' : 
                         character.name.includes('Cat') ? '🐱' : '👤'}
                      </div>
                    )}
                    <div className="text-xs text-center font-medium truncate w-full">
                      {character.name}
                    </div>
                    {character.isPremium && (
                      <div className="text-xs text-yellow-600">⭐</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'speech':
        return (
          <div className="flex-1 p-4">
            <div className="bg-white border border-gray-300 rounded p-3 mb-3">
              <h4 className="font-bold text-sm mb-2">💬 Speech Bubbles</h4>
              <div className="space-y-2">
                <div className="bg-blue-100 p-2 rounded cursor-pointer hover:bg-blue-200">
                  <div className="text-xs">Standard Bubble</div>
                </div>
                <div className="bg-green-100 p-2 rounded cursor-pointer hover:bg-green-200">
                  <div className="text-xs">Thought Bubble</div>
                </div>
                <div className="bg-yellow-100 p-2 rounded cursor-pointer hover:bg-yellow-200">
                  <div className="text-xs">Shout Bubble</div>
                </div>
                <div className="bg-red-100 p-2 rounded cursor-pointer hover:bg-red-200">
                  <div className="text-xs">Angry Bubble</div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-300 rounded p-3">
              <h4 className="font-bold text-sm mb-2">🎤 Text-to-Speech</h4>
              <div className="space-y-2 mb-3">
                <select className="w-full text-xs border border-gray-300 rounded p-1">
                  <option>Eric - Adult Male</option>
                  <option>Jennifer - Adult Female</option>
                  <option>Joey - Teen Male</option>
                  <option>Kimberly - Teen Female</option>
                  <option>Grace - Child Female</option>
                  <option>James - Child Male</option>
                </select>
              </div>
              <textarea 
                className="w-full border border-gray-300 rounded p-2 text-xs" 
                rows={3}
                placeholder="Enter speech text..."
              />
              <button className="goanimate-2011-button text-xs px-3 py-1 mt-2">Add Speech</button>
            </div>
          </div>
        );
      
      case 'props':
        return (
          <div className="flex-1 p-4">
            <div className="bg-white border border-gray-300 rounded p-3 mb-3">
              <h4 className="font-bold text-sm mb-2">🎪 Props</h4>
              <div className="grid grid-cols-2 gap-2">
                {AVAILABLE_PROPS.slice(0, 8).map((prop) => (
                  <div key={prop.id} className="bg-gray-100 p-2 rounded cursor-pointer hover:bg-gray-200 text-center">
                    <div className="text-2xl mb-1">{prop.emoji}</div>
                    <div className="text-xs">{prop.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-300 rounded p-3">
              <h4 className="font-bold text-sm mb-2">📁 Categories</h4>
              <div className="space-y-1">
                <div className="text-xs cursor-pointer hover:bg-gray-100 p-1 rounded">🏢 Office</div>
                <div className="text-xs cursor-pointer hover:bg-gray-100 p-1 rounded">🏠 Home</div>
                <div className="text-xs cursor-pointer hover:bg-gray-100 p-1 rounded">🚗 Vehicles</div>
                <div className="text-xs cursor-pointer hover:bg-gray-100 p-1 rounded">🍕 Food</div>
                <div className="text-xs cursor-pointer hover:bg-gray-100 p-1 rounded">📱 Electronics</div>
              </div>
            </div>
          </div>
        );
      
      case 'sounds':
        return (
          <div className="flex-1 p-4">
            <div className="bg-white border border-gray-300 rounded p-3 mb-3">
              <h4 className="font-bold text-sm mb-2">🎵 Sound Effects</h4>
              <div className="space-y-2">
                <div className="bg-purple-100 p-2 rounded cursor-pointer hover:bg-purple-200">
                  <div className="text-xs">🔔 Bell Notification</div>
                </div>
                <div className="bg-purple-100 p-2 rounded cursor-pointer hover:bg-purple-200">
                  <div className="text-xs">👏 Crowd Applause</div>
                </div>
                <div className="bg-purple-100 p-2 rounded cursor-pointer hover:bg-purple-200">
                  <div className="text-xs">💥 Explosion Boom</div>
                </div>
                <div className="bg-purple-100 p-2 rounded cursor-pointer hover:bg-purple-200">
                  <div className="text-xs">🚗 Car Honking</div>
                </div>
                <div className="bg-purple-100 p-2 rounded cursor-pointer hover:bg-purple-200">
                  <div className="text-xs">📞 Phone Ring</div>
                </div>
                <div className="bg-purple-100 p-2 rounded cursor-pointer hover:bg-purple-200">
                  <div className="text-xs">🥁 Drum Roll</div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-300 rounded p-3">
              <h4 className="font-bold text-sm mb-2">🎼 Background Music</h4>
              <div className="space-y-2">
                <div className="bg-orange-100 p-2 rounded cursor-pointer hover:bg-orange-200">
                  <div className="text-xs">🎪 Comedy Central</div>
                </div>
                <div className="bg-orange-100 p-2 rounded cursor-pointer hover:bg-orange-200">
                  <div className="text-xs">🏢 Corporate Presentation</div>
                </div>
                <div className="bg-orange-100 p-2 rounded cursor-pointer hover:bg-orange-200">
                  <div className="text-xs">🎬 Drama Tension</div>
                </div>
                <div className="bg-orange-100 p-2 rounded cursor-pointer hover:bg-orange-200">
                  <div className="text-xs">🎉 Celebration</div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'effects':
        return (
          <div className="flex-1 p-4">
            <div className="bg-white border border-gray-300 rounded p-3 mb-3">
              <h4 className="font-bold text-sm mb-2">✨ Visual Effects</h4>
              <div className="space-y-2">
                <div className="bg-pink-100 p-2 rounded cursor-pointer hover:bg-pink-200">
                  <div className="text-xs">⭐ Sparkle Effect</div>
                </div>
                <div className="bg-pink-100 p-2 rounded cursor-pointer hover:bg-pink-200">
                  <div className="text-xs">💨 Smoke Cloud</div>
                </div>
                <div className="bg-pink-100 p-2 rounded cursor-pointer hover:bg-pink-200">
                  <div className="text-xs">💥 Impact Burst</div>
                </div>
                <div className="bg-pink-100 p-2 rounded cursor-pointer hover:bg-pink-200">
                  <div className="text-xs">🌟 Flash Effect</div>
                </div>
                <div className="bg-pink-100 p-2 rounded cursor-pointer hover:bg-pink-200">
                  <div className="text-xs">💫 Magic Sparkles</div>
                </div>
                <div className="bg-pink-100 p-2 rounded cursor-pointer hover:bg-pink-200">
                  <div className="text-xs">🌈 Rainbow Trail</div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-300 rounded p-3">
              <h4 className="font-bold text-sm mb-2">🎬 Scene Transitions</h4>
              <div className="space-y-2">
                <div className="bg-indigo-100 p-2 rounded cursor-pointer hover:bg-indigo-200">
                  <div className="text-xs">➡️ Slide Right</div>
                </div>
                <div className="bg-indigo-100 p-2 rounded cursor-pointer hover:bg-indigo-200">
                  <div className="text-xs">🌀 Fade In/Out</div>
                </div>
                <div className="bg-indigo-100 p-2 rounded cursor-pointer hover:bg-indigo-200">
                  <div className="text-xs">🎭 Wipe Left</div>
                </div>
                <div className="bg-indigo-100 p-2 rounded cursor-pointer hover:bg-indigo-200">
                  <div className="text-xs">🔄 Spin Transition</div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const getSelectedCharacterDisplay = () => {
    if (!selectedCharacter) return null;
    
    const character = AVAILABLE_CHARACTERS.find(c => c.id === selectedCharacter);
    if (!character) return null;

    return (
      <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-400 flex items-center justify-center text-4xl shadow-lg animate-pulse overflow-hidden">
        {character.imageUrl ? (
          <img 
            src={character.imageUrl}
            alt={character.name}
            className="w-full h-full object-contain p-2"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = character.name.includes('Eric') ? '👨' : 
                                 character.name.includes('Jennifer') ? '👩' : 
                                 character.name.includes('Joey') ? '👦' : 
                                 character.name.includes('Sakura') ? '👧' : 
                                 character.name.includes('Robot') ? '🤖' : 
                                 character.name.includes('Leafy') ? '🍃' : 
                                 character.name.includes('Firey') ? '🔥' : 
                                 character.name.includes('Bubble') ? '🫧' : 
                                 character.name.includes('Bot') ? '🤖' : 
                                 character.name.includes('Cat') ? '🐱' : '👤';
              }
            }}
          />
        ) : (
          <span>
            {character.name.includes('Eric') ? '👨' : 
             character.name.includes('Jennifer') ? '👩' : 
             character.name.includes('Joey') ? '👦' : 
             character.name.includes('Sakura') ? '👧' : 
             character.name.includes('Robot') ? '🤖' : 
             character.name.includes('Leafy') ? '🍃' : 
             character.name.includes('Firey') ? '🔥' : 
             character.name.includes('Bubble') ? '🫧' : 
             character.name.includes('Bot') ? '🤖' : 
             character.name.includes('Cat') ? '🐱' : '👤'}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="h-screen bg-gray-200 flex flex-col">
      {/* Top Toolbar */}
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 border-b-2 border-gray-400 p-2 shadow-sm">
        <div className="flex items-center space-x-2">
          <select className="goanimate-2011-button px-3 py-1 text-sm font-bold">
            <option>Comedy World</option>
            <option>Business Friendly</option>
            <option>Anime</option>
            <option>Space Citizens</option>
            <option>Lil' Peepz</option>
          </select>
          <div className="w-px h-6 bg-gray-400"></div>
          <button className="goanimate-2011-button px-3 py-1 text-sm font-bold">Import</button>
          <button className="goanimate-2011-button px-3 py-1 text-sm font-bold">Copy</button>
          <button className="goanimate-2011-button px-3 py-1 text-sm font-bold">Paste</button>
          <div className="w-px h-6 bg-gray-400"></div>
          <button className="goanimate-2011-button px-3 py-1 text-sm font-bold">Undo</button>
          <button className="goanimate-2011-button px-3 py-1 text-sm font-bold">Redo</button>
          <div className="flex-1"></div>
          <button className="goanimate-2011-button-green px-4 py-1 text-sm font-bold">Preview</button>
          <button className="goanimate-2011-button-blue px-4 py-1 text-sm font-bold">Save</button>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-72 bg-white border-r-2 border-gray-400 flex flex-col shadow-sm">
          {/* Sidebar Tabs */}
          <div className="bg-gradient-to-b from-gray-100 to-gray-200 border-b-2 border-gray-400">
            <div className="flex">
              <button 
                className={`flex-1 p-3 text-sm font-bold border-r border-gray-300 transition-colors ${
                  activeTab === 'characters' ? 'bg-white border-b-2 border-blue-500 text-blue-600' : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('characters')}
              >
                👤
              </button>
              <button 
                className={`flex-1 p-3 text-sm font-bold border-r border-gray-300 transition-colors ${
                  activeTab === 'speech' ? 'bg-white border-b-2 border-blue-500 text-blue-600' : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('speech')}
              >
                💬
              </button>
              <button 
                className={`flex-1 p-3 text-sm font-bold border-r border-gray-300 transition-colors ${
                  activeTab === 'props' ? 'bg-white border-b-2 border-blue-500 text-blue-600' : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('props')}
              >
                🎪
              </button>
              <button 
                className={`flex-1 p-3 text-sm font-bold border-r border-gray-300 transition-colors ${
                  activeTab === 'sounds' ? 'bg-white border-b-2 border-blue-500 text-blue-600' : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('sounds')}
              >
                🎵
              </button>
              <button 
                className={`flex-1 p-3 text-sm font-bold transition-colors ${
                  activeTab === 'effects' ? 'bg-white border-b-2 border-blue-500 text-blue-600' : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('effects')}
              >
                ✨
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {activeTab === 'characters' && (
            <div className="p-2 border-b border-gray-200 bg-gray-50">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search characters..." 
                  className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded shadow-inner"
                />
                <button className="absolute right-2 top-2 text-gray-500 hover:text-gray-700">🔍</button>
              </div>
            </div>
          )}

          {/* Add Button */}
          {activeTab === 'characters' && (
            <div className="p-2 border-b border-gray-200 bg-gray-50">
              <button className="w-full goanimate-2011-button-green text-sm py-2 font-bold">
                ➕ ADD NEW CHARACTER
              </button>
            </div>
          )}

          {/* Categories */}
          {activeTab === 'characters' && (
            <div className="p-2 border-b border-gray-200 bg-gray-50">
              <div className="text-sm font-bold mb-1 text-gray-700">Custom characters</div>
              <div className="text-sm font-bold text-gray-700">Stock characters</div>
            </div>
          )}

          {/* Tab Content */}
          {renderTabContent()}
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col">
          {/* Canvas */}
          <div className="flex-1 p-4 bg-gray-100">
            <div className={`w-full h-full rounded-lg border-4 border-gray-500 ${getSceneBackground()} relative overflow-hidden shadow-inner`}>
              {/* Scene Preview */}
              <div className="absolute inset-0 flex items-center justify-center">
                {selectedCharacter ? (
                  getSelectedCharacterDisplay()
                ) : (
                  <div className="text-gray-600 text-center">
                    <div className="text-5xl mb-3">🎬</div>
                    <p className="font-bold">Select a character to start creating</p>
                  </div>
                )}
              </div>

              {/* Canvas Controls */}
              <div className="absolute bottom-4 right-4">
                <div className="bg-white/90 border-2 border-gray-400 rounded px-3 py-1 text-sm font-bold shadow">
                  100%
                </div>
              </div>

              {/* Scene Settings */}
              <div className="absolute top-4 right-4 space-x-2">
                <button className="goanimate-2011-button text-sm px-3 py-1 font-bold">Scene Settings</button>
                <select 
                  className="goanimate-2011-button text-sm px-2 py-1 font-bold"
                  value={selectedScene}
                  onChange={(e) => handleSceneChange(e.target.value)}
                >
                  {AVAILABLE_SCENES.map(scene => (
                    <option key={scene.id} value={scene.id}>{scene.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="h-48 bg-gradient-to-b from-gray-300 to-gray-500 border-t-2 border-gray-600 shadow-inner">
            {/* Timeline Header */}
            <div className="h-8 bg-gradient-to-b from-gray-200 to-gray-300 border-b-2 border-gray-500 flex items-center px-2">
              <div className="flex space-x-1">
                <button className="w-7 h-6 bg-blue-500 rounded border border-blue-700 text-white text-xs flex items-center justify-center font-bold hover:bg-blue-600">
                  🎬
                </button>
                <button className="w-7 h-6 bg-gray-400 rounded border border-gray-600 text-xs flex items-center justify-center font-bold hover:bg-gray-500">
                  🎵
                </button>
              </div>
              <div className="flex-1"></div>
              <div className="text-xs font-bold text-gray-700">Timeline Controls</div>
            </div>

            {/* Timeline Content */}
            <div className="flex-1 p-3">
              <div className="bg-blue-400 h-16 rounded-lg border-2 border-blue-600 mb-3 relative shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-400 flex items-center justify-center shadow">
                    <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="absolute top-1 left-2 text-xs font-bold text-blue-900">Scene 1</div>
              </div>
              
              <div className="bg-gray-600 h-12 rounded-lg opacity-60 border-2 border-gray-700"></div>
            </div>

            {/* Timeline Controls */}
            <div className="h-8 bg-gradient-to-b from-gray-500 to-gray-600 border-t-2 border-gray-700 flex items-center justify-center">
              <div className="flex space-x-2">
                <button className="w-6 h-6 bg-green-500 rounded border border-green-700 text-white text-xs flex items-center justify-center hover:bg-green-600">
                  ▶
                </button>
                <button className="w-6 h-6 bg-red-500 rounded border border-red-700 text-white text-xs flex items-center justify-center hover:bg-red-600">
                  ⏸
                </button>
                <button className="w-6 h-6 bg-blue-500 rounded border border-blue-700 text-white text-xs flex items-center justify-center hover:bg-blue-600">
                  ⏹
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoAnimate2011VideoMaker;
