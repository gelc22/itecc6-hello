import { createClient } from '@supabase/supabase-js'
const supabaseURL = 'https://exuaygfclfaemnqlvzpn.supabase.com'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4dWF5Z2ZjbGZhZW1ucWx2enBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMzY1MTEsImV4cCI6MjA5MTkxMjUxMX0.igTD-8LkykkfjGPxoONHs8vJi8w8cNemjcpeSAQk_Hs'
export const supabase = createClient(supabaseURL, supabaseKey)