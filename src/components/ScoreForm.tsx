import React, { useState } from 'react';
import { KeyRound, RotateCcw } from 'lucide-react';

interface FormData {
  englishScore: number;
  mathScore: number;
  apiKey: string;
}

interface ScoreFormProps {
  onSubmit: (data: FormData) => void;
  onReset: () => void;
  isLoading: boolean;
}

export default function ScoreForm({ onSubmit, onReset, isLoading }: ScoreFormProps) {
  const [formData, setFormData] = useState<FormData>({
    englishScore: 0,
    mathScore: 0,
    apiKey: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'englishScore' || name === 'mathScore') {
      const numValue = Math.min(100, Math.max(0, parseInt(value) || 0));
      setFormData(prev => ({ ...prev, [name]: numValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
            OpenAI API Key
          </label>
          <div className="mt-1 relative">
            <input
              type="password"
              name="apiKey"
              id="apiKey"
              required
              value={formData.apiKey}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="sk-..."
            />
            <KeyRound className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="englishScore" className="block text-sm font-medium text-gray-700">
              英語の点数 (0-100)
            </label>
            <input
              type="number"
              name="englishScore"
              id="englishScore"
              required
              min="0"
              max="100"
              value={formData.englishScore}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="mathScore" className="block text-sm font-medium text-gray-700">
              数学の点数 (0-100)
            </label>
            <input
              type="number"
              name="mathScore"
              id="mathScore"
              required
              min="0"
              max="100"
              value={formData.mathScore}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? '分析中...' : '分析する'}
        </button>

        <button
          type="button"
          onClick={onReset}
          className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          リセット
        </button>
      </div>
    </form>
  );
}