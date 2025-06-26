
import React, { useState } from 'react';
import { AnimationProject } from '@/types/animation';
import { AVAILABLE_CHARACTERS } from '@/constants/characters';
import { AVAILABLE_SCENES } from '@/constants/scenes';

interface GoAnimate2011VideoMakerProps {
  project: AnimationProject;
  onUpdateProject: (project: AnimationProject) => void;
}

const GoAnimate2011VideoMaker: React.FC<GoAnimate2011VideoMakerProps> = ({ project, onUpdateProject }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');
  const [selectedScene, setSelectedScene] = useState(project.scene || 'comedy-world-bedroom');

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
      default:
        return 'bg-gradient-to-br from-purple-200 to-indigo-300';
    }
  };

  return (
    <div className="h-screen bg-gray-200 flex flex-col">
      {/* Top Toolbar */}
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 border-b border-gray-300 p-2">
        <div className="flex items-center space-x-2">
          <select className="goanimate-2011-button px-3 py-1 text-sm">
            <option>Comedy World</option>
          </select>
          <button className="goanimate-2011-button px-3 py-1 text-sm">Import</button>
          <button className="goanimate-2011-button px-3 py-1 text-sm">Copy</button>
          <button className="goanimate-2011-button px-3 py-1 text-sm">Paste</button>
          <button className="goanimate-2011-button px-3 py-1 text-sm">Undo</button>
          <button className="goanimate-2011-button px-3 py-1 text-sm">Redo</button>
          <div className="flex-1"></div>
          <button className="goanimate-2011-button px-4 py-1 text-sm">Preview</button>
          <button className="goanimate-2011-button px-4 py-1 text-sm">Save</button>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Left Sidebar - Characters */}
        <div className="w-72 bg-white border-r border-gray-300 flex flex-col">
          {/* Sidebar Tabs */}
          <div className="bg-gradient-to-b from-gray-100 to-gray-200 border-b border-gray-300">
            <div className="flex">
              <button className="flex-1 p-2 text-xs border-r border-gray-300 bg-white font-bold">👤</button>
              <button className="flex-1 p-2 text-xs border-r border-gray-300 font-bold">💬</button>
              <button className="flex-1 p-2 text-xs border-r border-gray-300 font-bold">🖼️</button>
              <button className="flex-1 p-2 text-xs border-r border-gray-300 font-bold">🎵</button>
              <button className="flex-1 p-2 text-xs font-bold">FX</button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="p-2 border-b border-gray-200">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full px-3 py-1 text-sm border border-gray-300 rounded"
              />
              <button className="absolute right-1 top-1 text-gray-500">🔍</button>
            </div>
          </div>

          {/* Add Character Button */}
          <div className="p-2 border-b border-gray-200">
            <button className="w-full goanimate-2011-button-green text-xs py-2">
              ➕ ADD NEW CHARACTER
            </button>
          </div>

          {/* Character Categories */}
          <div className="p-2 border-b border-gray-200">
            <div className="text-xs font-bold mb-1">Custom char...</div>
            <div className="text-xs font-bold">Stock charac...</div>
          </div>

          {/* Character Grid */}
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
                  <div className="w-full h-full flex items-center justify-center text-2xl">
                    {character.name.includes('Eric') ? '👨' : 
                     character.name.includes('Jennifer') ? '👩' : 
                     character.name.includes('Joey') ? '👦' : 
                     character.name.includes('Sakura') ? '👧' : 
                     character.name.includes('Robot') ? '🤖' : '👤'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col">
          {/* Canvas */}
          <div className="flex-1 p-4 bg-gray-100">
            <div className={`w-full h-full rounded border-2 border-gray-400 ${getSceneBackground()} relative overflow-hidden`}>
              {/* Scene Preview */}
              <div className="absolute inset-0 flex items-center justify-center">
                {selectedCharacter ? (
                  <div className="w-20 h-20 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center text-3xl shadow-lg">
                    {AVAILABLE_CHARACTERS.find(c => c.id === selectedCharacter)?.name.includes('Eric') ? '👨' : 
                     AVAILABLE_CHARACTERS.find(c => c.id === selectedCharacter)?.name.includes('Jennifer') ? '👩' : 
                     AVAILABLE_CHARACTERS.find(c => c.id === selectedCharacter)?.name.includes('Joey') ? '👦' : '👤'}
                  </div>
                ) : (
                  <div className="text-gray-500 text-center">
                    <div className="text-4xl mb-2">🎬</div>
                    <p>Select a character to start</p>
                  </div>
                )}
              </div>

              {/* Canvas Controls */}
              <div className="absolute bottom-4 right-4">
                <div className="bg-white border border-gray-300 rounded px-2 py-1 text-sm">
                  100%
                </div>
              </div>

              {/* Scene Settings */}
              <div className="absolute top-4 right-4 space-x-2">
                <button className="goanimate-2011-button text-xs px-3 py-1">Scene Settings</button>
                <select 
                  className="goanimate-2011-button text-xs px-2 py-1"
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
          <div className="h-48 bg-gradient-to-b from-gray-300 to-gray-400 border-t border-gray-500">
            {/* Timeline Header */}
            <div className="h-8 bg-gradient-to-b from-gray-200 to-gray-300 border-b border-gray-400 flex items-center px-2">
              <div className="flex space-x-1">
                <button className="w-6 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center">🎬</button>
                <button className="w-6 h-6 bg-gray-400 rounded text-xs flex items-center justify-center">🎵</button>
              </div>
            </div>

            {/* Timeline Content */}
            <div className="flex-1 p-2">
              <div className="bg-blue-400 h-16 rounded border border-blue-600 mb-2 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded border-2 border-gray-300 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-500 h-12 rounded opacity-50"></div>
            </div>

            {/* Timeline Controls */}
            <div className="h-6 bg-gradient-to-b from-gray-400 to-gray-500 border-t border-gray-600 flex items-center justify-center">
              <div className="text-xs text-white">Timeline</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoAnimate2011VideoMaker;
