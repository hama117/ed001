import { OPENAI_API_ENDPOINT, OPENAI_MODEL } from '../constants/api';
import { SYSTEM_PROMPT } from '../constants/prompts';
import type { FormData, ApiResponse } from '../types';

export async function getPrediction(formData: FormData): Promise<string> {
  const response = await fetch(OPENAI_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${formData.apiKey}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `英語: ${formData.englishScore}点, 数学: ${formData.mathScore}点` }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    }),
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }

  const data = await response.json() as ApiResponse;
  return data.choices[0].message.content;
}