/**
 * TwinnieAI Server
 * Copyright (c) 2024 TwinnieAI
 * Licensed under CC-BY-NC-SA-4.0
 * See LICENSE file for details
 */

const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const dotenv = require('dotenv');
const path = require('path');
const { logger } = require('./utils/logger');

// טעינת משתני סביבה מהתיקייה הראשית
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// בדיקת טעינת המשתנים
let isOpenAIAvailable = true;
if (!process.env.OPENAI_API_KEY) {
  logger.warn('Missing OPENAI_API_KEY environment variable - AI features will be limited');
  isOpenAIAvailable = false;
}

const app = express();

// מצב משותף לטיפול בבקשות
const state = {
  requestQueue: [],
  activeRequests: 0,
  MAX_CONCURRENT_REQUESTS: 10
};

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 600 // 10 דקות של caching להגדרות CORS
}));

app.use(express.json());

// אתחול OpenAI רק אם יש מפתח
const openai = isOpenAIAvailable ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
}) : null;

// Utility Functions
const calculateTokens = async (completion) => {
  if (!isOpenAIAvailable) return null;
  try {
    return {
      total: completion.usage.total_tokens,
      prompt_tokens: completion.usage.prompt_tokens,
      completion_tokens: completion.usage.completion_tokens
    };
  } catch (error) {
    logger.error('Error calculating tokens:', error);
    return null;
  }
};

const processRequest = async (req, res) => {
  try {
    state.activeRequests++;
    const { message, role } = req.body;

    // אם אין OpenAI API key, נחזיר הודעה מוגדרת מראש
    if (!isOpenAIAvailable) {
      return `I apologize, but I am currently operating in limited mode without AI capabilities. Please try again later when the service is fully operational. In the meantime, I can still assist you with basic information about ${role}.`;
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: `You are a ${role}. Provide guidance and insights in that role.` },
        { role: "user", content: message }
      ],
      temperature: 0.8,
      max_tokens: 500
    });

    // חישוב הטוקנים אחרי קבלת התשובה
    const tokens = await calculateTokens(completion);
    if (tokens) {
      logger.info('Token usage:', tokens);
    }

    return completion.choices[0].message.content;
  } catch (error) {
    throw error;
  } finally {
    state.activeRequests--;
  }
};

// Health check endpoint
app.get('/health', (req, res) => {
  try {
    logger.info('Health check request received');
    res.json({ 
      status: 'ok',
      activeRequests: state.activeRequests,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Health check failed:', error);
    res.status(500).json({
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Chat endpoint
app.post('/chat', async (req, res) => {
  try {
    const { message, role } = req.body;
    logger.info('Chat request received', { role, messageLength: message?.length });

    if (!message || !role) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    if (state.activeRequests >= state.MAX_CONCURRENT_REQUESTS) {
      state.requestQueue.push({ req, res });
      logger.warning('Request queued - max concurrent requests reached');
      return;
    }

    const response_text = await processRequest(req, res);
    logger.success('OpenAI response received', { length: response_text.length });

    res.json({
      response: response_text,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error('Chat Error:', error);
    res.status(500).json({
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// הגדרת timeout ארוך יותר לבקשות express
app.use((req, res, next) => {
  res.setTimeout(35000, () => {
    res.status(504).json({
      error: 'Server Timeout',
      message: 'The request took too long to process',
      timestamp: new Date().toISOString()
    });
  });
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message,
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  logger.info(`CORS enabled for: http://localhost:3000`);
}); 

// פונקציה לטיפול בבקשות בזמן אמת
const handleRealTimeRequest = async (req, res) => {
  try {
    const { message, role } = req.body;
    
  } catch (error) {
    logger.error('Error handling real-time request:', error);
    res.status(500).json({
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
} 

// calculate the tokens are left in the openai account  minus the tokens used in the request in real time
const calculateTokensInRealTime = async () => {
  const response = await openai.usage.retrieve();
  return response.total_tokens - response.used_tokens;
}

// פונקציה לטיפול בבקשות בזמן אמת