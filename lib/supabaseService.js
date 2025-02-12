import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://wmcfsndlcbmwnxyzyzrw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtY2ZzbmRsY2Jtd254eXp5enJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4NDE5MzcsImV4cCI6MjA1MzQxNzkzN30.2IGkRRkE04HuYDgnD3dCJNXw-KRgVqy8YwrvrbtXosY'; // Replace with your actual anon key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Check if the user is an admin
 * @param {string} userId - The ID of the user to check
 * @returns {Promise<boolean>} - Returns true if the user is an admin, false otherwise
 */
const isUserAdmin = async (userId) => {
    const { data, error } = await supabase
        .from('users')
        .select('role')
        .eq('id', userId)
        .single(); // Ensure we get a single record

    if (error) {
        console.error('Error checking user role:', error);
        return false; // Default to false if there's an error
    }

    return data?.role === 'admin'; // Check if the role is 'admin'
};

export { supabase, isUserAdmin };
