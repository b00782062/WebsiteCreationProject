import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database

const supabaseURL = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

// @ts-ignore
export const supabase = createClient(supabaseURL, supabaseAnonKey);