
import React, { useState, useEffect } from 'react';
import CharacterSelector from '@/components/CharacterSelector';
import SceneEditor from '@/components/SceneEditor';
import VoiceGenerator from '@/components/VoiceGenerator';
import AnimationPreview from '@/components/AnimationPreview';
import CustomButton from '@/components/ui/CustomButton';
import { AnimationProject, createNewProject, AnimationSequence } from '@/utils/animationUtils';
import { SpeechOptions } from '@/utils/speechUtils';

const Index = () => {
  const [project, setProject] = useState<AnimationProject>(() => createNewProject('My Animation'));
  const [activeTab, setActiveTab] = useState<'characters' | 'editor' | 'voice' | 'preview'>('characters');
  const [savedVoices, setSavedVoices] = useState<Record<string, SpeechOptions>>({});
  const [selectedSequence, setSelectedSequence] = useState<AnimationSequence | null>(null);

  // Initialize speech synthesis
  useEffect(() => {
    if ('speechSynthesis' in window) {
      // Trigger voice loading
      window.speechSynthesis.getVoices();
    }
  }, []);

  const handleSelectCharacter = (characterId: string) => {
    if (!project.characters.includes(characterId)) {
      setProject({
        ...project,
        characters: [...project.characters, characterId],
      });
    }
  };

  const handleRemoveCharacter = (characterId: string) => {
    // Remove character from project
    setProject({
      ...project,
      characters: project.characters.filter(id => id !== characterId),
      // Also remove any sequences for this character
      sequences: project.sequences.filter(seq => seq.characterId !== characterId),
    });
  };

  const handleUpdateProject = (updatedProject: AnimationProject) => {
    setProject(updatedProject);
    
    // If a new sequence with speech was added, select it for voice editing
    const newSequence = updatedProject.sequences.find(
      seq => seq.speech && !project.sequences.some(s => s.id === seq.id)
    );
    
    if (newSequence) {
      setSelectedSequence(newSequence);
      setActiveTab('voice');
    }
  };

  const handleVoiceSelected = (options: SpeechOptions) => {
    if (selectedSequence) {
      setSavedVoices({
        ...savedVoices,
        [selectedSequence.id]: options,
      });
      setActiveTab('editor');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-dream-purple/20 to-dream-blue/20">
      {/* Header */}
      <header className="p-4 bg-dream-purple text-white shadow-md">
        <div className="container mx-auto">
          <h1 className="text-4xl font-comic text-center retro-text relative">
            <span className="glitch-effect" data-text="DreamWeave Motion Forge">
              DreamWeave Motion Forge
            </span>
          </h1>
          <p className="text-center text-dream-yellow animate-wobble">
            Create hilariously bad 3D animations!
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {/* Tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          <CustomButton
            variant={activeTab === 'characters' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('characters')}
          >
            Characters
          </CustomButton>
          <CustomButton
            variant={activeTab === 'editor' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('editor')}
          >
            Scene Editor
          </CustomButton>
          <CustomButton
            variant={activeTab === 'voice' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('voice')}
            disabled={!selectedSequence}
          >
            Voice Generator
          </CustomButton>
          <CustomButton
            variant={activeTab === 'preview' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </CustomButton>
        </div>
        
        {/* Dynamic Content based on Tab */}
        <div className="grid grid-cols-1 gap-6">
          {activeTab === 'characters' && (
            <CharacterSelector 
              selectedCharacters={project.characters}
              onSelectCharacter={handleSelectCharacter}
              onRemoveCharacter={handleRemoveCharacter}
            />
          )}
          
          {activeTab === 'editor' && (
            <SceneEditor 
              project={project}
              onUpdateProject={handleUpdateProject}
            />
          )}
          
          {activeTab === 'voice' && selectedSequence?.speech && (
            <VoiceGenerator 
              text={selectedSequence.speech}
              onVoiceSelected={handleVoiceSelected}
            />
          )}
          
          {activeTab === 'preview' && (
            <AnimationPreview 
              project={project}
              savedVoices={savedVoices}
            />
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p className="font-comic animate-pulse">
          DreamWeave Motion Forge - Making Bad Animations Since 2025
        </p>
      </footer>
    </div>
  );
};

export default Index;
