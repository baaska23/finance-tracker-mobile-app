import axios from "axios"

const SUPABASE_URL = "https://your-project.supabase.co";
const SUPABASE_KEY = "your-anon-key"; 

const dbClient = axios.create({
  baseURL: `${SUPABASE_URL}/rest/v1`,
  headers: {
    "Content-Type": "application/json",
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
  },
});

export default dbClient