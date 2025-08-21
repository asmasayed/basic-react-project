🧡 CareerAi - Your Smart Career Companion
An AI-powered career assessment platform that helps users discover personalized career paths based on their skills, interests, and work style.

✨ Features
Interactive Assessment – Multi-step questionnaire on interests, skills, and aspirations
AI Recommendations – Job matches using Hugging Face’s Mistral model
Modern UI/UX – Clean design, smooth animations, and responsive layout
Motivational Quotes – Auto-rotating career inspirations
Smart Results – Click-to-reveal suggestions (saves API calls)

🚀 Tech Stack
Frontend: React 18, React Router
Styling: CSS3 (gradients + animations)
AI Integration: Hugging Face Inference API (Mistral-8x7B-Instruct)
Build Tool: Vite

🛠️ Setup
# Clone repo
git clone <your-repo-url>
cd career-ai  

# Install dependencies
npm install  

# Add API key (Hugging Face)
echo "VITE_API_KEY=hf_your_api_key" > .env  

# Run dev server
npm run dev

📱 Usage
Take the career questionnaire
View AI-powered recommendations
Explore top 5 suggested career paths
Retake anytime for refined results

📂 Structure
src/
 ├── components/       # UI Components (Heading, Form, Results, etc.)
 ├── ai.js             # Hugging Face API integration
 ├── questionsData.js  # Assessment questions
 └── App.jsx           # Main app router

🚀 Deployment
npm run build


Deploy the dist folder on Vercel, Netlify, or GitHub Pages.

💡 Built with ❤️ to help people discover their perfect career path.
