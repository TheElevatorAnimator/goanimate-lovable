
import React, { useState } from 'react';
import CustomButton from './ui/CustomButton';
import { useToast } from "@/hooks/use-toast";

interface PropsPanelProps {
  selectedTheme: string;
  onPropImported?: (prop: any) => void;
}

const PropsPanel: React.FC<PropsPanelProps> = ({ selectedTheme, onPropImported }) => {
  const { toast } = useToast();
  const [importedProps, setImportedProps] = useState<any[]>([]);

  const handleImportProp = () => {
    // Mock prop import functionality
    const newProp = {
      id: `prop-${Date.now()}`,
      name: "Custom Prop",
      type: selectedTheme === 'comedy' ? 'banana-peel' : 'generic-prop',
      category: selectedTheme,
    };

    setImportedProps(prev => [...prev, newProp]);
    
    if (onPropImported) {
      onPropImported(newProp);
    }

    toast({
      title: "Prop Imported!",
      description: `${newProp.name} has been added to your props collection.`,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-green-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold text-white drop-shadow-md flex items-center">
          🎪 Props Collection
        </h2>
        <p className="text-green-100 text-sm mt-1">
          Import and manage your {selectedTheme} props
        </p>
      </div>
      
      <div className="p-6">
        {/* Import Button */}
        <div className="text-center mb-6">
          <CustomButton
            variant="primary"
            onClick={handleImportProp}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 shadow-lg"
          >
            📦 Import Prop
          </CustomButton>
        </div>

        {/* Props Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {importedProps.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-8">
              <div className="text-6xl mb-4">📦</div>
              <p>No props imported yet.</p>
              <p className="text-sm">Click "Import Prop" to add some props!</p>
            </div>
          ) : (
            importedProps.map((prop) => (
              <div
                key={prop.id}
                className="bg-gradient-to-b from-sky-400 to-sky-500 rounded-lg p-4 text-center border-2 border-sky-600"
              >
                <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-lg flex items-center justify-center text-2xl">
                  🎭
                </div>
                <h3 className="font-bold text-white text-sm">{prop.name}</h3>
                <p className="text-sky-100 text-xs">{prop.type}</p>
              </div>
            ))
          )}
        </div>

        {/* Info */}
        <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 p-3">
          <h4 className="font-bold text-blue-800 text-sm">💡 Pro Tip</h4>
          <p className="text-blue-700 text-xs mt-1">
            Props can be used to enhance your {selectedTheme} videos with interactive elements!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropsPanel;
