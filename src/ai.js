import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are a career counselor AI that analyzes a user's career assessment responses and provides personalized job recommendations. 

Based on the user's interests, skills, work preferences, and career goals, suggest exactly 3 specific job titles that would be the best match for them. 

Format your response as a simple numbered list with just the job titles, like:
1. Software Engineer
2. Data Scientist  
3. UX Designer

Keep job titles concise and focus on roles that actually match their profile.`;

const hf = new HfInference(import.meta.env.VITE_API_KEY)

export async function getCareerRecommendations(userAnswers) {
  // Convert user answers to a readable string
  const answersString = Object.entries(userAnswers)
    .map(([questionId, answer]) => `Q${questionId}: ${answer}`)
    .join(", ");

  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `Here are my career assessment responses: ${answersString}. Please recommend 3 suitable career paths for me.` },
      ],
      max_tokens: 200,
    })

    return response.choices[0].message.content

  } catch (err) {
    console.error(err.message)
    // Fallback recommendations
    return `1. Software Engineer
2. Data Scientist  
3. UX Designer`
  }
}
