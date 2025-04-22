
import React from 'react';
import { useImageGeneration } from '../hooks/useImageGeneration';
import { Button } from './ui/button';

interface ImageGeneratorProps {
  prompt: string;
  onImageGenerated: (imageUrl: string) => void;
}

export const ImageGenerator: React.FC<ImageGeneratorProps> = ({ prompt, onImageGenerated }) => {
  const { generateImage, isLoading, error } = useImageGeneration();

  const handleGenerate = async () => {
    try {
      const result = await generateImage({ positivePrompt: prompt });
      onImageGenerated(result.imageURL);
    } catch (err) {
      console.error('Failed to generate image:', err);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button 
        onClick={handleGenerate} 
        disabled={isLoading}
        className="bg-teal-600 hover:bg-teal-700 text-white"
      >
        {isLoading ? 'جاري توليد الصورة...' : 'توليد صورة جديدة'}
      </Button>
    </div>
  );
};
