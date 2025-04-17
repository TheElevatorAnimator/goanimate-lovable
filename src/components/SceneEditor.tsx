
import React from 'react';
import { 
  AVAILABLE_SCENES, 
  AVAILABLE_CHARACTERS, 
  AnimationProject, 
  AnimationSequence,
  addSequence
} from '@/utils/animationUtils';
import CustomButton from './ui/CustomButton';

interface SceneEditorProps {
  project: AnimationProject;
  onUpdateProject: (updatedProject: AnimationProject) => void;
}

const SceneEditor: React.FC<SceneEditorProps> = ({ project, onUpdateProject }) => {
  const [selectedCharacterId, setSelectedCharacterId] = React.useState<string>('');
  const [selectedAnimation, setSelectedAnimation] = React.useState<string>('');
  const [startTime, setStartTime] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(3);
  const [speech, setSpeech] = React.useState<string>('');

  const handleSceneChange = (sceneId: string) => {
    onUpdateProject({
      ...project,
      scene: sceneId,
    });
  };

  const handleAddSequence = () => {
    if (!selectedCharacterId || !selectedAnimation) {
      alert('Please select a character and animation!');
      return;
    }

    const updatedProject = addSequence(
      project,
      selectedCharacterId,
      selectedAnimation,
      startTime,
      duration,
      speech
    );

    onUpdateProject(updatedProject);
    
    // Reset form
    setSpeech('');
  };

  const handleDeleteSequence = (sequenceId: string) => {
    const updatedSequences = project.sequences.filter(seq => seq.id !== sequenceId);
    onUpdateProject({
      ...project,
      sequences: updatedSequences,
    });
  };

  // Get character info if selected
  const getCharacterInfo = (characterId: string) => {
    return AVAILABLE_CHARACTERS.find(char => char.id === characterId);
  };
  
  // Get animations for selected character
  const getCharacterAnimations = (characterId: string) => {
    const character = getCharacterInfo(characterId);
    return character ? character.animations : [];
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg pixel-border">
      <h2 className="text-xl font-comic mb-4 text-dream-purple retro-text">Scene Editor</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-comic mb-2">Background</h3>
        <div className="grid grid-cols-2 gap-2">
          {AVAILABLE_SCENES.map(scene => (
            <div 
              key={scene.id}
              onClick={() => handleSceneChange(scene.id)}
              className={`p-2 rounded cursor-pointer text-center ${
                project.scene === scene.id 
                  ? 'bg-dream-purple text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {scene.name}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-comic mb-2">Timeline</h3>
        
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Timeline Ruler */}
            <div className="h-8 border-b border-gray-300 flex">
              {Array.from({ length: 11 }).map((_, index) => (
                <div key={index} className="flex-1 relative">
                  <div className="absolute bottom-0 w-px h-2 bg-gray-400"></div>
                  <div className="absolute bottom-3 w-full text-center text-xs">{index}s</div>
                </div>
              ))}
            </div>
            
            {/* Animation Sequences */}
            <div className="min-h-[100px] relative border-b border-gray-300">
              {project.sequences.map((sequence) => {
                const character = getCharacterInfo(sequence.characterId);
                const left = `${sequence.startTime * 10}%`;
                const width = `${sequence.duration * 10}%`;
                
                return (
                  <div 
                    key={sequence.id}
                    className="absolute bg-dream-blue rounded-md p-1 text-white text-xs"
                    style={{ 
                      left, 
                      width, 
                      top: '10px',
                      minWidth: '60px',
                    }}
                  >
                    <div className="flex justify-between">
                      <span>{character?.name}</span>
                      <button 
                        className="text-white hover:text-red-300"
                        onClick={() => handleDeleteSequence(sequence.id)}
                      >
                        ✕
                      </button>
                    </div>
                    <div>{sequence.animationName}</div>
                    {sequence.speech && (
                      <div className="truncate max-w-full">
                        "{sequence.speech.substring(0, 15)}..."
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-comic mb-2">Add Animation</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-1">Character</label>
            <select 
              className="w-full p-2 border rounded"
              value={selectedCharacterId}
              onChange={(e) => setSelectedCharacterId(e.target.value)}
            >
              <option value="">Select Character</option>
              {project.characters.map(charId => {
                const character = getCharacterInfo(charId);
                return character ? (
                  <option key={charId} value={charId}>
                    {character.name}
                  </option>
                ) : null;
              })}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-1">Animation</label>
            <select 
              className="w-full p-2 border rounded"
              value={selectedAnimation}
              onChange={(e) => setSelectedAnimation(e.target.value)}
              disabled={!selectedCharacterId}
            >
              <option value="">Select Animation</option>
              {getCharacterAnimations(selectedCharacterId).map(anim => (
                <option key={anim} value={anim}>
                  {anim.charAt(0).toUpperCase() + anim.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-1">Start Time (seconds)</label>
            <input 
              type="number" 
              className="w-full p-2 border rounded"
              value={startTime}
              onChange={(e) => setStartTime(Number(e.target.value))}
              min={0}
              max={10}
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-1">Duration (seconds)</label>
            <input 
              type="number" 
              className="w-full p-2 border rounded"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              min={1}
              max={10}
            />
          </div>
          
          <div className="col-span-2">
            <label className="block text-sm font-bold mb-1">Speech Text</label>
            <textarea 
              className="w-full p-2 border rounded"
              value={speech}
              onChange={(e) => setSpeech(e.target.value)}
              placeholder="What should the character say?"
              rows={2}
            />
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <CustomButton 
            onClick={handleAddSequence}
            disabled={!selectedCharacterId || !selectedAnimation}
          >
            Add to Timeline
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default SceneEditor;
