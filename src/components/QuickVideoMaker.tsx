
import React, { useState } from 'react';
import { AnimationProject } from '@/types/animation';
import { createNewProject } from '@/utils/animationUtils';
import { AVAILABLE_CHARACTERS } from '@/constants/characters';
import { AVAILABLE_SCENES } from '@/constants/scenes';
import CustomButton from './ui/CustomButton';

const QuickVideoMaker: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [project, setProject] = useState<AnimationProject>(() => createNewProject('Quick Video'));
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');
  const [selectedScene, setSelectedScene] = useState<string>('office');
  const [videoText, setVideoText] = useState<string>('');

  const handleNext = () => {
    if (currentStep < 4) {
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
      case 1: return '1. Choose Your Character';
      case 2: return '2. Pick a Scene';
      case 3: return '3. Add Your Message';
      case 4: return '4. Preview Your Video';
      default: return 'Quick Video Maker';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-orange-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white drop-shadow-md">
              ⚡ Quick Video Maker
            </h2>
            <p className="text-orange-100 text-sm mt-1">
              Create a video in 4 easy steps!
            </p>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <span className="text-sm">Step {currentStep} of 4</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full ${
                    step <= currentStep ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Step Header */}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{getStepTitle()}</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="min-h-[400px] flex flex-col justify-center">
          {currentStep === 1 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {AVAILABLE_CHARACTERS.slice(0, 8).map((character) => (
                <div
                  key={character.id}
                  className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                    selectedCharacter === character.id
                      ? 'border-orange-500 bg-orange-50 scale-105'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => setSelectedCharacter(character.id)}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-b from-sky-400 to-sky-500 rounded-full flex items-center justify-center text-2xl">
                      😊
                    </div>
                    <h4 className="font-bold text-sm">{character.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {AVAILABLE_SCENES.slice(0, 6).map((scene) => (
                <div
                  key={scene.id}
                  className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                    selectedScene === scene.id
                      ? 'border-orange-500 bg-orange-50 scale-105'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => setSelectedScene(scene.id)}
                >
                  <div className="text-center">
                    <div className="w-full h-20 mb-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center text-2xl">
                      🏢
                    </div>
                    <h4 className="font-bold text-sm">{scene.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentStep === 3 && (
            <div className="max-w-md mx-auto">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  What should your character say?
                </label>
                <textarea
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                  rows={6}
                  placeholder="Enter your message here... (e.g., 'Hello everyone! Welcome to my video!')"
                  value={videoText}
                  onChange={(e) => setVideoText(e.target.value)}
                />
              </div>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
                <p className="text-sm text-yellow-700">
                  💡 Tip: Keep your message short and clear for the best results!
                </p>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="text-center">
              {/* Video Preview Container - matching the uploaded image style */}
              <div className="bg-black rounded-lg border-4 border-gray-600 shadow-xl mx-auto max-w-md aspect-video relative overflow-hidden mb-6">
                {/* Video Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-red-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-3xl">
                      😊
                    </div>
                    <div className="bg-black/60 p-2 rounded">
                      <p className="text-sm italic">"{videoText || 'Your message here'}"</p>
                    </div>
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="text-white text-xs">00:07 / 00:30</div>
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="bg-gray-600 h-1 rounded-full">
                      <div className="bg-white h-1 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-600 mb-2">Upgrade to publish all your videos to YouTube. <span className="text-orange-600 underline cursor-pointer">Get GoPlus now &gt;</span></p>
              </div>

              {/* Save Button - matching the red style from the image */}
              <CustomButton
                onClick={handleSave}
                className="bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full border-2 border-red-700 shadow-lg text-lg"
              >
                Save Now
              </CustomButton>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-4 border-t-2 border-gray-200">
          <CustomButton
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`px-6 py-2 ${
              currentStep === 1 
                ? 'opacity-50 cursor-not-allowed' 
                : 'border-orange-500 text-orange-600 hover:bg-orange-50'
            }`}
          >
            ← Back
          </CustomButton>
          
          {currentStep < 4 ? (
            <CustomButton
              variant="primary"
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !selectedCharacter) ||
                (currentStep === 2 && !selectedScene) ||
                (currentStep === 3 && !videoText.trim())
              }
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-6 py-2"
            >
              Next →
            </CustomButton>
          ) : (
            <CustomButton
              variant="outline"
              onClick={() => setCurrentStep(1)}
              className="border-gray-500 text-gray-600 hover:bg-gray-50 px-6 py-2"
            >
              Start Over
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickVideoMaker;
