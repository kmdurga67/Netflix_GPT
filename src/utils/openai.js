import OpenAI from 'openai';
import { openAIKey } from './constants';

const openai = new OpenAI({
  apiKey: openAIKey,
  dangerouslyAllowBrowser:true
});

export default openai;