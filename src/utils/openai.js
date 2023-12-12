import OpenAI from 'openai';
import { openAIKey } from './constants';

const openai = new OpenAI({
  apiKey: openAIKey,
  dangerouslyAllowBrowser:true
});

export default openai;

// async function main() {
//   const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });
// }

// main();