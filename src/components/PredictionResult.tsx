import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PredictionResultProps {
  prediction: string | null;
}

export default function PredictionResult({ prediction }: PredictionResultProps) {
  if (!prediction) return null;

  return (
    <div className="mt-6 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-900 mb-2">学習プラン分析</h3>
        <div className="prose prose-sm max-w-none">
          <div className="whitespace-pre-wrap text-gray-700">{prediction}</div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h4 className="text-sm font-medium text-gray-900 mb-3">分析の見方</h4>
        <ul className="space-y-2">
          <li className="flex items-start text-sm text-gray-600">
            <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
            <span>現在の点数から判定された最適なクラス分けを確認できます</span>
          </li>
          <li className="flex items-start text-sm text-gray-600">
            <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
            <span>改善パターンは実現可能な上昇のみを表示しています</span>
          </li>
          <li className="flex items-start text-sm text-gray-600">
            <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
            <span>各教科の具体的な改善ステップを参考に学習を進めてください</span>
          </li>
        </ul>
      </div>
    </div>
  );
}