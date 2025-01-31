import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://wmcfsndlcbmwnxyzyzrw.supabase.co'; // Fixed URL typo
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtY2ZzbmRsY2Jtd254eXp5enJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4NDE5MzcsImV4cCI6MjA1MzQxNzkzN30.2IGkRRkE04HuYDgnD3dCJNXw-KRgVqy8YwrvrbtXosY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export the supabase client
export { supabase };

// Fetch products from Supabase
export const fetchProducts = async () => {
    const { data, error } = await supabase
        .from('Products')
        .select('*');

    if (error) {
        console.error('Error fetching products:', error);
        return [];
    }
    return data;
};

// Fetch testimonials from Supabase
export const fetchTestimonials = async () => {
    const { data, error } = await supabase
        .from('Testimonials')
        .select('*');

    if (error) {
        console.error('Error fetching testimonials:', error);
        return [];
    }
    return data;
};
