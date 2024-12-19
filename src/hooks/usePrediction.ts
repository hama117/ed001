import { useState } from 'react';
import { getPrediction } from '../services/predictionService';
import type { FormData } from '../types';

export function usePrediction() {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const submitPrediction = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const result = await getPrediction(formData);
      setPrediction(result);
    } catch (error) {
      console.error('Error:', error);
      setPrediction('エラーが発生しました。APIキーを確認してください。');
    } finally {
      setIsLoading(false);
    }
  };

  const resetPrediction = () => setPrediction(null);

  return { prediction, isLoading, submitPrediction, resetPrediction };
}