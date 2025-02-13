# Environment Setup

## Setting up Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit the `.env` file and add your OpenAI API key:
```bash
OPENAI_API_KEY=your_api_key_here
```

**IMPORTANT: Never commit your `.env` file or share your API keys!**

The `.env` file contains sensitive information and is excluded from version control. Make sure to:
- Keep your API keys private
- Never commit the `.env` file to Git
- Never share your API keys in public repositories
- Regularly rotate your API keys for security

## Security Best Practices

1. API Key Management:
   - Store API keys in environment variables
   - Use different API keys for development and production
   - Regularly rotate API keys
   - Never hardcode API keys in source code

2. Environment Files:
   - Use `.env.example` as a template
   - Keep `.env` files out of version control
   - Document required environment variables
   - Use appropriate values for different environments (dev/staging/prod) 