export interface PredictionResponse {
  prediction: string;
}

export interface FormData {
  englishScore: number;
  mathScore: number;
  apiKey: string;
}

export interface ApiResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}