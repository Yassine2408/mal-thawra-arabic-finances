
import React, { useEffect, useState } from 'react';
import { useImageGeneration } from '../hooks/useImageGeneration';

interface ImageGeneratorAutoProps {
  prompt: string;
  defaultImage: string;
  onImageGenerated: (imageUrl: string) => void;
}

export const ImageGeneratorAuto: React.FC<ImageGeneratorAutoProps> = ({ 
  prompt, 
  defaultImage,
  onImageGenerated 
}) => {
  const { generateImage, isLoading } = useImageGeneration();
  const [hasAttempted, setHasAttempted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const generateInitialImage = async () => {
      if (!hasAttempted && !isComplete) {
        try {
          setHasAttempted(true);
          const result = await generateImage({ positivePrompt: prompt });
          onImageGenerated(result.imageURL);
          setIsComplete(true);
        } catch (err) {
          console.error('Failed to generate image, using default:', err);
          onImageGenerated(defaultImage);
          setIsComplete(true);
        }
      }
    };

    generateInitialImage();
  }, [prompt, defaultImage, onImageGenerated, hasAttempted, isComplete]);

  return isLoading ? (
    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
      <div className="text-white text-sm">جاري توليد الصورة...</div>
    </div>
  ) : null;
};
