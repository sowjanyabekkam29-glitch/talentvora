// Talentvora - Supabase client (publishable key is safe in browser code; RLS protects data)
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm';

const SUPABASE_URL = 'https://oiweiyxrvhwcerscxsax.supabase.co';
const SUPABASE_KEY = 'sb_publishable_EFQ4rQSk8RKR7atXY990Dw_txujweX5';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
