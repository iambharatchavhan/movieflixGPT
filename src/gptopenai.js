import OpenAI from 'openai';
import { API_KEY } from './utils/constant';


const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
  
  
});

export default openai;