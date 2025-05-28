import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xkxdrwnmkyansixqvdil.supabase.co'; // Replace with your Supabase Project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhreGRyd25ta3lhbnNpeHF2ZGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5OTIwMDYsImV4cCI6MjA2MzU2ODAwNn0.y37u0dhPUiWQJarKxhfmPxSpaDCiX54dE6VMdwSN3G4'; // Replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);