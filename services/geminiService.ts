
import { GoogleGenAI } from "@google/genai";

const DATA_CONTEXT = `
Name: Hashan Anjana
Role: Web Developer / Software Developer
Experience: 
- WordPress Development (Commercial projects)
- UI/UX Design
- Research Project: CIADAD (Image Processing & ML based system for classification)
- Freelancing (15+ global projects)
- Sarvodaya Development Foundation (IT & project support)
Skills: React, TypeScript, Tailwind, Node.js, PHP, Python, OpenCV, TensorFlow.
Accomplishments: Developed CIADAD which reduced errors by 60%.
`;

export async function askAssistant(question: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context: ${DATA_CONTEXT}\n\nQuestion: ${question}\n\nAnswer the question as if you are Hashan's personal AI assistant. Be professional, concise, and enthusiastic.`,
    });
    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again!";
  }
}
