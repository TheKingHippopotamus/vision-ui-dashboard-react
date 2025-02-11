export const validateMessage = (message, role) => {
  if (!message?.trim()) {
    throw new Error('Message cannot be empty');
  }
  
  if (!role?.name || !role?.prompt) {
    throw new Error('Invalid role configuration');
  }
  
  return true;
}; 