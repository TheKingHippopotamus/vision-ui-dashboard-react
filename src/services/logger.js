const getTimeStamp = () => new Date().toISOString();

const colors = {
  info: '\x1b[36m%s\x1b[0m',    // ציאן
  success: '\x1b[32m%s\x1b[0m', // ירוק
  warning: '\x1b[33m%s\x1b[0m', // צהוב
  error: '\x1b[31m%s\x1b[0m',   // אדום
  route: '\x1b[35m%s\x1b[0m',   // סגול
  api: '\x1b[34m%s\x1b[0m'      // כחול
};

export const logger = {
  info: (message, data = '') => {
    console.log(colors.info, `[INFO][${getTimeStamp()}] ${message}`, data);
  },
  
  success: (message, data = '') => {
    console.log(colors.success, `[SUCCESS][${getTimeStamp()}] ${message}`, data);
  },
  
  warning: (message, data = '') => {
    console.log(colors.warning, `[WARNING][${getTimeStamp()}] ${message}`, data);
  },
  
  error: (message, error = '') => {
    console.log(colors.error, `[ERROR][${getTimeStamp()}] ${message}`, error);
  },
  
  route: (component, action) => {
    console.log(colors.route, `[ROUTE][${getTimeStamp()}] ${component} - ${action}`);
  },
  
  api: (endpoint, method, data = '') => {
    console.log(colors.api, `[API][${getTimeStamp()}] ${method} ${endpoint}`, data);
  }
}; 