// Use environment variable or fallback to a default URL
const API_URL = import.meta.env.VITE_BACKEND_URL || 'https://api.github.com';

export const chatWithAI = async (message: string) => {
  try {
    // For GitHub Pages, we'll use a mock response since we can't host a backend
    return `I received your message: "${message}". This is a mock response for GitHub Pages deployment.`;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}; 