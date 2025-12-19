
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VIDEO_TEMPLATES, TEMPLATE_CATEGORIES, VideoTemplate } from '@/constants/templates';

const QuickVideoMaker = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTemplate, setSelectedTemplate] = useState<VideoTemplate | null>(null);
  const [isSubscribed] = useState(false);

  const filteredTemplates = selectedCategory === 'All' 
    ? VIDEO_TEMPLATES 
    : VIDEO_TEMPLATES.filter(t => t.category === selectedCategory);

  const handleSelectTemplate = (template: VideoTemplate) => {
    if (template.isPremium && !isSubscribed) {
      alert('This template requires GoPlus subscription!');
      return;
    }
    setSelectedTemplate(template);
  };

  const handleUseTemplate = () => {
    if (selectedTemplate) {
      // Navigate to editor with template
      navigate('/full-video-maker', { state: { template: selectedTemplate } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-green-600 border-b-4 border-green-700">
        <div className="container mx-auto p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => navigate('/video-maker')}
                className="text-white hover:text-green-200"
              >
                ← Back
              </button>
              <div className="w-10 h-10 bg-white rounded border-2 border-gray-300 flex items-center justify-center shadow-md">
                <span className="text-xl font-bold text-green-600">G</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white drop-shadow-md">
                  Quick Video Maker
                </h1>
                <p className="text-green-200 text-xs">Select a template to get started!</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-yellow-400 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
                {VIDEO_TEMPLATES.length} Templates
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Category Filter */}
        <div className="mb-6">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
            <h3 className="font-bold text-gray-800 mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {TEMPLATE_CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-green-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map(template => (
            <div
              key={template.id}
              onClick={() => handleSelectTemplate(template)}
              className={`bg-white rounded-xl shadow-md border-2 overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
                selectedTemplate?.id === template.id 
                  ? 'border-green-500 ring-2 ring-green-200' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Template Thumbnail */}
              <div className="relative h-40 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-6xl">{template.thumbnail}</span>
                {template.isPremium && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">
                    ⭐ GoPlus
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {template.duration}
                </div>
                {selectedTemplate?.id === template.id && (
                  <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                      ✓
                    </div>
                  </div>
                )}
              </div>

              {/* Template Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800">{template.name}</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {template.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{template.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Template Actions */}
        {selectedTemplate && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg p-4 z-50">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{selectedTemplate.thumbnail}</span>
                <div>
                  <h4 className="font-bold text-gray-800">{selectedTemplate.name}</h4>
                  <p className="text-gray-600 text-sm">{selectedTemplate.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUseTemplate}
                  className="px-6 py-2 bg-gradient-to-b from-green-500 to-green-600 text-white rounded-lg font-bold shadow-md hover:from-green-600 hover:to-green-700"
                >
                  Use This Template →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No templates found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </main>

      {/* Bottom spacing for fixed action bar */}
      {selectedTemplate && <div className="h-24" />}
    </div>
  );
};

export default QuickVideoMaker;
