import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://sigzmlhcaqruvdrafcer.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpZ3ptbGhjYXFydXZkcmFmY2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2NzkxMDYsImV4cCI6MjA1MjI1NTEwNn0.p3tjzyFbaoI_dDTAIeCK9XqwtPWZI_d6lbMuo9kBneA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
