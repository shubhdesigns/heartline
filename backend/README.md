# Heartline Foundation Backend

This is the backend server for the Heartline Foundation website, providing AI-powered cardiovascular health solutions.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/heartline
OPENAI_API_KEY=your_openai_api_key_here
JWT_SECRET=your_jwt_secret_here
```

3. Start MongoDB locally or use a cloud MongoDB instance

## Development

Run the development server:
```bash
npm run dev
```

## Production

Build and start the production server:
```bash
npm run build
npm start
```

## API Endpoints

- `GET /`: Welcome message
- `POST /api/chat`: AI chat endpoint for cardiovascular health queries

## Technologies Used

- Node.js
- Express
- TypeScript
- MongoDB
- OpenAI API
- JWT for authentication 