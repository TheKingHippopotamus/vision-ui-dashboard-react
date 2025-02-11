import { logger } from 'services/logger';
import { sendMessage } from 'services/api';

export default function PsychicChat() {
  useEffect(() => {
    logger.route('PsychicChat', 'Mounted');
    const userId = "current-user-id";
    const lastChat = chatStorage.getUserChats(userId)[0];
    
    if (lastChat) {
      logger.info('Loading existing chat', lastChat);
      setCurrentChatId(lastChat.id);
      setMessages(lastChat.messages);
      setCurrentRole(prompts.roles.find(r => r.id === lastChat.roleId));
    } else {
      const randomRole = prompts.roles[Math.floor(Math.random() * prompts.roles.length)];
      logger.info('Starting new chat with role', randomRole.name);
      // ... rest of the code
    }

    return () => {
      logger.route('PsychicChat', 'Unmounted');
    };
  }, []);

  // Add to handleSendMessage
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !currentRole) {
      logger.warning('Invalid input', { 
        hasMessage: Boolean(inputMessage.trim()), 
        hasRole: Boolean(currentRole) 
      });
      return;
    }

    const userMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const response = await sendMessage(
        inputMessage,
        currentRole,
        messages.slice(-6)
      );

      const advisorMessage = {
        type: 'advisor',
        content: response.content,
        timestamp: response.timestamp
      };

      setMessages(prev => [...prev, advisorMessage]);
      logger.success('Message exchange completed', {
        role: currentRole.name,
        messagesSent: messages.length + 2
      });

    } catch (error) {
      logger.error('Chat error', error);
      setMessages(prev => [...prev, {
        type: 'advisor',
        content: "I apologize, but I'm having trouble connecting with the spiritual realm at the moment. Let's try again in a moment... 🔮✨",
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };
} 