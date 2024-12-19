import React from 'react';
import ScoreForm from './components/ScoreForm';
import PredictionResult from './components/PredictionResult';
import { usePrediction } from './hooks/usePrediction';

export default function App() {
  const { prediction, isLoading, submitPrediction, resetPrediction } = usePrediction();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            個別学習支援
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            英語と数学の点数から最適な学習プランを提案します
          </p>
        </div>

        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <ScoreForm 
            onSubmit={submitPrediction} 
            onReset={resetPrediction}
            isLoading={isLoading} 
          />
          <PredictionResult prediction={prediction} />
        </div>
      </div>
    </div>
  );
}