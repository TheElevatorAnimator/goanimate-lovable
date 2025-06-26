import React, { useState } from 'react';
import { AnimationProject } from '@/types/animation';
import { createNewProject } from '@/utils/animationUtils';
import { AVAILABLE_CHARACTERS } from '@/constants/characters';
import { AVAILABLE_SCENES } from '@/constants/scenes';
import CustomButton from './ui/CustomButton';

// Quick Video Maker Templates
const QUICK_TEMPLATES = [
  {
    id: 'office-gossipers',
    name: 'Office Gossipers',
    description: 'Workplace drama and conversations',
    thumbnail: '👔',
    category: 'Business'
  },
  {
    id: 'school-chronicles',
    name: 'The School Chronicles',
    description: 'School life and adventures',
    thumbnail: '🏫',
    category: 'Education'
  },
  {
    id: 'lil-petz-quick',
    name: "Lil' Petz Quick",
    description: 'Cute pets and animals',
    thumbnail: '🐱',
    category: 'Comedy'
  },
  {
    id: 'election-2012',
    name: 'Election 2012',
    description: 'Political themes and debates',
    thumbnail: '🗳️',
    category: 'Political'
  },
  {
    id: 'video-ecards',
    name: 'Video eCards',
    description: 'Greeting cards and celebrations',
    thumbnail: '💌',
    category: 'Holiday'
  },
  {
    id: 'at-school-manga',
    name: '@School - Manga Style',
    description: 'Anime-style school stories',
    thumbnail: '📚',
    category: 'Anime'
  },
  {
    id: 'epic-ninja-battle',
    name: 'Epic Ninja Battle',
    description: 'Action-packed ninja adventures',
    thumbnail: '🥷',
    category: 'Action'
  },
  {
    id: 'wildlife',
    name: 'Wildlife',
    description: 'Nature and animal documentaries',
    thumbnail: '🦌',
    category: 'Nature'
  },
  {
    id: 'space-odyssey',
    name: 'A Space Odyssey',
    description: 'Sci-fi space adventures',
    thumbnail: '🚀',
    category: 'Sci-Fi'
  },
  {
    id: 'slice-of-daily-life',
    name: 'Slice of Daily Life',
    description: 'Everyday situations and stories',
    thumbnail: '🏠',
    category: 'Slice of Life'
  },
  {
    id: 'elimination-time',
    name: 'Elimination Time!',
    description: 'Inanimate Insanity elimination ceremony',
    thumbnail: '🏆',
    category: 'Object Show'
  },
  {
    id: 'cake-at-stake',
    name: 'Cake at Stake!',
    description: 'BFDI elimination and competition',
    thumbnail: '🍰',
    category: 'Object Show'
  }
];

const QuickVideoMaker: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [project, setProject] = useState<AnimationProject>(() => createNewProject('Quick Video'));
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');
  const [selectedScene, setSelectedScene] = useState<string>('office');
  const [videoText, setVideoText] = useState<string>('');

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = () => {
    alert('Your Quick Video has been saved! In the full version, this would export your video.');
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return '1. Choose a Template';
      case 2: return '2. Choose Your Character';
      case 3: return '3. Pick a Scene';
      case 4: return '4. Add Your Message';
      case 5: return '5. Preview Your Video';
      default: return 'Quick Video Maker';
    }
  };

  return (
    <div className="goanimate-2011-card">
      {/* Header */}
      <div className="goanimate-2011-gradient-orange p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold goanimate-2011-text-white">
              ⚡ Quick Video Maker
            </h2>
            <p className="text-orange-200 text-sm mt-1">
              Create a video in 5 easy steps!
            </p>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <span className="text-sm">Step {currentStep} of 5</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`w-2 h-2 rounded-full ${
                    step <= currentStep ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* Step Header */}
        <div className="mb-5 text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2 goanimate-2011-text">{getStepTitle()}</h3>
          <div className="w-full bg-gray-300 rounded-full h-2 border border-gray-400">
            <div 
              className="goanimate-2011-gradient-orange h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="min-h-[350px] flex flex-col justify-center">
          {currentStep === 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {QUICK_TEMPLATES.map((template) => (
                <div
                  key={template.id}
                  className={`template-card p-3 text-center ${
                    selectedTemplate === template.id ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="text-2xl mb-2">{template.thumbnail}</div>
                  <h4 className="font-bold text-xs mb-1 goanimate-2011-text">{template.name}</h4>
                  <p className="text-xs text-gray-600">{template.category}</p>
                </div>
              ))}
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {AVAILABLE_CHARACTERS.slice(0, 8).map((character) => (
                <div
                  key={character.id}
                  className={`template-card p-3 text-center ${
                    selectedCharacter === character.id ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedCharacter(character.id)}
                >
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-b from-sky-400 to-sky-500 rounded border border-sky-600 flex items-center justify-center text-lg">
                    😊
                  </div>
                  <h4 className="font-bold text-xs goanimate-2011-text">{character.name}</h4>
                </div>
              ))}
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {AVAILABLE_SCENES.slice(0, 6).map((scene) => (
                <div
                  key={scene.id}
                  className={`template-card p-3 text-center ${
                    selectedScene === scene.id ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedScene(scene.id)}
                >
                  <div className="w-full h-16 mb-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded border flex items-center justify-center text-xl">
                    🏢
                  </div>
                  <h4 className="font-bold text-xs goanimate-2011-text">{scene.name}</h4>
                </div>
              ))}
            </div>
          )}

          {currentStep === 4 && (
            <div className="max-w-md mx-auto">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-gray-700 goanimate-2011-text">
                  What should your character say?
                </label>
                <textarea
                  className="w-full p-3 border-2 border-gray-400 rounded focus:border-orange-500 focus:outline-none"
                  rows={5}
                  placeholder="Enter your message here... (e.g., 'Hello everyone! Welcome to my video!')"
                  value={videoText}
                  onChange={(e) => setVideoText(e.target.value)}
                />
              </div>
              <div className="bg-yellow-100 border border-yellow-400 p-3 rounded">
                <p className="text-sm text-yellow-800">
                  💡 Tip: Keep your message short and clear for the best results!
                </p>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="text-center">
              {/* Video Preview Container */}
              <div className="bg-black rounded border-2 border-gray-600 shadow-lg mx-auto max-w-md aspect-video relative overflow-hidden mb-4">
                <div className="absolute inset-0 goanimate-2011-gradient-orange flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-3 bg-white rounded border border-gray-400 flex items-center justify-center text-2xl">
                      😊
                    </div>
                    <div className="bg-black/60 p-2 rounded">
                      <p className="text-sm italic">"{videoText || 'Your message here'}"</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="text-white text-xs">00:07 / 00:30</div>
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="bg-gray-600 h-1 rounded-full">
                      <div className="bg-white h-1 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-600 text-sm mb-2">Upgrade to publish all your videos to YouTube. <span className="text-orange-600 underline cursor-pointer">Get GoPlus now &gt;</span></p>
              </div>

              <button
                onClick={handleSave}
                className="goanimate-2011-button-green px-6 py-3 text-sm"
              >
                Save Now
              </button>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6 pt-4 border-t border-gray-300">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`goanimate-2011-button px-4 py-2 text-sm ${
              currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            ← Back
          </button>
          
          {currentStep < 5 ? (
            <button
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !selectedTemplate) ||
                (currentStep === 2 && !selectedCharacter) ||
                (currentStep === 3 && !selectedScene) ||
                (currentStep === 4 && !videoText.trim())
              }
              className="goanimate-2011-button-orange px-4 py-2 text-sm"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => setCurrentStep(1)}
              className="goanimate-2011-button px-4 py-2 text-sm"
            >
              Start Over
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickVideoMaker;
