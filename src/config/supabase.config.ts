import { registerAs } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export default registerAs('supabase', () => ({
  url: process.env.SUPABASE_URL || '',
  anonKey: process.env.SUPABASE_ANON_KEY || '',
}));

// Cliente Supabase para uso en servicios
export const createSupabaseClient = (): SupabaseClient | null => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.warn('Supabase credentials not configured');
    return null;
  }

  return createClient(url, key);
};
