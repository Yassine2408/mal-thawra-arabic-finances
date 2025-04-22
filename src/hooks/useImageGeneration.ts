
import { useState } from 'react';
import { RunwareService, GenerateImageParams } from '../services/runware';

const RUNWARE_API_KEY = "5lAcfKtLnr1RegBt3dPOmcUYkEWvbQ6z"; // This should be moved to Supabase secrets later

export const useImageGeneration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async (params: GenerateImageParams) => {
    setIsLoading(true);
    setError(null);

    try {
      const runwareService = new RunwareService(RUNWARE_API_KEY);
      const result = await runwareService.generateImage(params);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate image');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    generateImage,
    isLoading,
    error
  };
};
