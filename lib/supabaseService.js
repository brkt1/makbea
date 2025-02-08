import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://wmcfsndlcbmwnxyzyzrw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtY2ZzbmRsY2Jtd254eXp5enJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4NDE5MzcsImV4cCI6MjA1MzQxNzkzN30.2IGkRRkE04HuYDgnD3dCJNXw-KRgVqy8YwrvrbtXosY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export the supabase client
export { supabase };

// Get current user session
export const getCurrentUser = async () => {
    try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
            console.error('Error getting user session:', error.message);
            throw error;
        }
        if (!session) {
            const error = new Error('No active session found');
            console.error(error.message);
            throw error;
        }
        return session.user;
    } catch (error) {
        console.error('Error in getCurrentUser:', error);
        throw error;
    }
};

// Check if user is admin
export const isUserAdmin = async () => {
    try {
        // Get current user and validate session
        const user = await getCurrentUser();
        if (!user?.id) {
            const error = new Error('Invalid or missing user ID');
            console.error(error.message);
            throw error;
        }

        // Query user role from database
const { data, error } = await supabase
    .from('user_roles')
            .select('role')
            .eq('id', user.id)
            .single();

        if (error) {
            // Enhanced error logging with full context
            console.error('Database error while checking user role:', {
                errorMessage: error.message,
                errorCode: error.code,
                details: error.details,
                hint: error.hint,
                userId: user.id
            });
            throw error;
        }

        if (!data?.role) {
            const error = new Error(`No role found for user ID: ${user.id}`);
            console.error(error.message);
            throw error;
        }

        return data.role === 'admin';
    } catch (error) {
        console.error('Error checking user role:', {
            error: error.message,
            stack: error.stack,
            name: error.name
        });
        throw error;
    }
};

// Fetch products from Supabase
export const fetchProducts = async () => {
    try {
        const { data, error } = await supabase
            .from('Products')
            .select('*');

        if (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error in fetchProducts:', error);
        throw error;
    }
};

// Fetch testimonials from Supabase
export const fetchTestimonials = async () => {
    try {
        const { data, error } = await supabase
            .from('Testimonials')
            .select('*');

        if (error) {
            console.error('Error fetching testimonials:', error);
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error in fetchTestimonials:', error);
        throw error;
    }
};
