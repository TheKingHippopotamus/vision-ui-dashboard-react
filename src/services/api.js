import axios from 'axios';
import { logger } from './logger';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const sendMessage = async (message, role, conversationHistory = []) => {
  try {
    logger.info('Preparing to send message', { role: role.name });

    // וידוא שיש לנו את כל המידע הנדרש
    if (!message || !role || !role.name) {
      throw new Error('Missing required parameters');
    }

    const response = await api.post('/chat', {
      message,
      role: role.name,
      history: conversationHistory.map(msg => ({
        content: msg.content,
        type: msg.type
      }))
    });

    logger.success('Response received', response.data);

    if (!response.data || !response.data.response) {
      throw new Error('Invalid response format');
    }

    return {
      content: response.data.response,
      timestamp: response.data.timestamp || new Date().toISOString()
    };
  } catch (error) {
    logger.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw error;
  }
}; 