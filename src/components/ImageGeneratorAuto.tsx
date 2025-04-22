
import React from 'react';

interface ImageGeneratorAutoProps {
  prompt: string;
  defaultImage: string;
  onImageGenerated: (imageUrl: string) => void;
}

export const ImageGeneratorAuto: React.FC<ImageGeneratorAutoProps> = ({ 
  defaultImage,
  onImageGenerated 
}) => {
  // Use the defaultImage immediately and don't generate anything
  React.useEffect(() => {
    onImageGenerated(defaultImage);
  }, [defaultImage, onImageGenerated]);

  // Return null as we're not showing any UI
  return null;
};
