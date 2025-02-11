const logger = {
  info: (message, data = {}) => {
    console.log(`[INFO][${new Date().toISOString()}] ${message}`, data);
  },
  
  error: (message, error = {}) => {
    console.error(`[ERROR][${new Date().toISOString()}] ${message}`, error);
  },
  
  success: (message, data = {}) => {
    console.log(`[SUCCESS][${new Date().toISOString()}] ${message}`, data);
  },
  
  warning: (message, data = {}) => {
    console.warn(`[WARNING][${new Date().toISOString()}] ${message}`, data);
  },
  
  route: (component, action) => {
    console.log(`[ROUTE][${new Date().toISOString()}] ${component} - ${action}`);
  }
};

module.exports = { logger }; 