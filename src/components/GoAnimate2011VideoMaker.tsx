import React, { useState } from 'react';
import { AVAILABLE_CHARACTERS } from '@/constants/characters';
import { AVAILABLE_PROPS } from '@/constants/props';
import { AnimationProject } from '@/types/animation';

interface GoAnimate2011VideoMakerProps {
  project: AnimationProject;
  onUpdateProject: (project: AnimationProject) => void;
}

const GoAnimate2011VideoMaker = ({ project, onUpdateProject }: GoAnimate2011VideoMakerProps) => {
  const [activeTab, setActiveTab] = useState<'characters' | 'speech' | 'props' | 'sounds' | 'effects'>('characters');
  const [charactersOnCanvas, setCharactersOnCanvas] = useState([]);

  const addCharacterToCanvas = (character: any) => {
    setCharactersOnCanvas([...charactersOnCanvas, character]);
  };

  const renderCharacterLibrary = () => {
    const filteredCharacters = AVAILABLE_CHARACTERS.filter(char => {
      if (activeTab === 'characters') return true;
      return false;
    });

    return (
      <div className="p-3">
        <div className="grid grid-cols-2 gap-2">
          {filteredCharacters.map((character) => (
            <div
              key={character.id}
              className="bg-white border border-gray-300 rounded p-2 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => addCharacterToCanvas(character)}
            >
              <div className="w-full h-16 bg-gray-100 rounded mb-2 flex items-center justify-center overflow-hidden">
                {character.imageUrl ? (
                  <img 
                    src={character.imageUrl} 
                    alt={character.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<span class="text-2xl">🎭</span>';
                      }
                    }}
                  />
                ) : (
                  <span className="text-2xl">🎭</span>
                )}
              </div>
              <p className="text-xs text-center font-medium">{character.name}</p>
              {character.isPremium && (
                <div className="text-center mt-1">
                  <span className="bg-yellow-400 text-black text-xs px-1 rounded font-bold">
                    GoPlus+
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSpeechTab = () => {
    return (
      <div className="p-3">
        <div className="space-y-2">
          <button className="w-full bg-blue-500 text-white p-2 rounded text-sm font-bold">
            📢 Text to Speech
          </button>
          <button className="w-full bg-green-500 text-white p-2 rounded text-sm font-bold">
            🎤 Record Voice
          </button>
          <button className="w-full bg-purple-500 text-white p-2 rounded text-sm font-bold">
            🎵 Upload Audio
          </button>
        </div>
      </div>
    );
  };

  const renderPropsTab = () => {
    return (
      <div className="p-3">
        <div className="grid grid-cols-2 gap-2">
          {AVAILABLE_PROPS.slice(0, 12).map((prop) => (
            <div
              key={prop.id}
              className="bg-white border border-gray-300 rounded p-2 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="w-full h-12 bg-gray-100 rounded mb-1 flex items-center justify-center">
                <span className="text-lg">{prop.emoji}</span>
              </div>
              <p className="text-xs text-center font-medium">{prop.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSoundsTab = () => {
    return (
      <div className="p-3">
        <div className="space-y-2">
          <div className="bg-gray-100 p-2 rounded">
            <p className="text-xs font-bold">Sound Effects</p>
            <div className="grid grid-cols-1 gap-1 mt-2">
              {['Applause', 'Laugh Track', 'Whoosh', 'Pop', 'Ding'].map((sound) => (
                <button key={sound} className="text-left p-1 hover:bg-gray-200 rounded text-xs">
                  🔊 {sound}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderEffectsTab = () => {
    return (
      <div className="p-3">
        <div className="space-y-2">
          <div className="bg-gray-100 p-2 rounded">
            <p className="text-xs font-bold">Visual Effects</p>
            <div className="grid grid-cols-1 gap-1 mt-2">
              {['Fade In', 'Fade Out', 'Zoom In', 'Zoom Out', 'Slide Left'].map((effect) => (
                <button key={effect} className="text-left p-1 hover:bg-gray-200 rounded text-xs">
                  ✨ {effect}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen bg-gray-200 flex flex-col">
      {/* Site Moving Warning */}
      <div className="bg-red-600 text-white p-2 text-center font-bold animate-pulse">
        ⚠️ NOTICE: This site is moving to a new home! Stay tuned for updates. ⚠️
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 border-b-2 border-orange-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded border border-gray-400 flex items-center justify-center">
              <span className="text-lg font-bold text-orange-600">G</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">GoAnimate Video Maker</h1>
              <p className="text-orange-100 text-xs">Create Amazing Videos Online!</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="goanimate-2011-button px-3 py-1 text-sm">Save</button>
            <button className="goanimate-2011-button-green px-3 py-1 text-sm text-white">Preview</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-64 bg-white border-r border-gray-300 flex flex-col">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-300">
            {['characters', 'speech', 'props', 'sounds', 'effects'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-2 py-2 text-xs font-bold capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'characters' && renderCharacterLibrary()}
            {activeTab === 'speech' && renderSpeechTab()}
            {activeTab === 'props' && renderPropsTab()}
            {activeTab === 'sounds' && renderSoundsTab()}
            {activeTab === 'effects' && renderEffectsTab()}
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="bg-gray-100 border-b border-gray-300 p-2">
            <div className="flex items-center space-x-2">
              <button className="goanimate-2011-button px-2 py-1 text-xs">↶ Undo</button>
              <button className="goanimate-2011-button px-2 py-1 text-xs">↷ Redo</button>
              <div className="border-l border-gray-400 h-6 mx-2"></div>
              <button className="goanimate-2011-button px-2 py-1 text-xs">✂️ Cut</button>
              <button className="goanimate-2011-button px-2 py-1 text-xs">📋 Copy</button>
              <button className="goanimate-2011-button px-2 py-1 text-xs">📄 Paste</button>
              <div className="border-l border-gray-400 h-6 mx-2"></div>
              <button className="goanimate-2011-button px-2 py-1 text-xs">🔍 Zoom</button>
              <select className="goanimate-2011-button px-2 py-1 text-xs">
                <option>100%</option>
                <option>75%</option>
                <option>50%</option>
              </select>
            </div>
          </div>

          {/* Canvas */}
          <div className="flex-1 bg-gray-300 p-4 overflow-hidden">
            <div className="w-full h-full bg-white border-2 border-gray-400 rounded shadow-lg relative">
              <div className="absolute inset-2 bg-gradient-to-b from-blue-200 to-blue-300 rounded">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-gray-600 font-bold">Your animation canvas</p>
                  <p className="text-gray-500 text-sm mt-2">Drag characters and props here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="h-32 bg-gray-200 border-t border-gray-300 p-2">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-sm">Timeline</h3>
              <div className="flex items-center space-x-2">
                <button className="goanimate-2011-button px-2 py-1 text-xs">▶️ Play</button>
                <button className="goanimate-2011-button px-2 py-1 text-xs">⏸️ Pause</button>
                <button className="goanimate-2011-button px-2 py-1 text-xs">⏹️ Stop</button>
              </div>
            </div>
            <div className="bg-white border border-gray-300 rounded h-20 relative">
              <div className="absolute inset-1 bg-gray-50 rounded flex items-center justify-center">
                <p className="text-gray-500 text-sm">Timeline - Drag elements here to sequence your animation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoAnimate2011VideoMaker;
