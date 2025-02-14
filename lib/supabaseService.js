import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://wmcfsndlcbmwnxyzyzrw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtY2ZzbmRsY2Jtd254eXp5enJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4NDE5MzcsImV4cCI6MjA1MzQxNzkzN30.2IGkRRkE04HuYDgnD3dCJNXw-KRgVqy8YwrvrbtXosY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Check if the user is an admin
 * @param {string} userId - The ID of the user to check
 * @returns {Promise<boolean>} - Returns true if the user is an admin, false otherwise
 */
const isUserAdmin = async (userId) => {
    if (!userId) {
        console.warn('No user ID provided for admin check');
        return false;
    }

    try {
        const { data, error } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', userId)
            .single();

        if (error) {
            console.error('Error checking user role:', {
                message: error.message,
                code: error.code,
                details: error.details
            });
            return false;
        }

        if (!data) {
            console.warn('No user data found for ID:', userId);
            return false;
        }

        return data.role === 'admin';
    } catch (err) {
        console.error('Unexpected error in isUserAdmin:', {
            message: err.message,
            stack: err.stack
        });
        return false;
    }
};

export { supabase, isUserAdmin };
