'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabaseService';

const AdminSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adminCode, setAdminCode] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const ADMIN_SECRET_CODE = 'MAKBEA2024'; // This should be stored securely in environment variables

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        if (adminCode !== ADMIN_SECRET_CODE) {
            setMessage('Invalid admin code');
            setLoading(false);
            return;
        }

        try {
            // 1. Create user account
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password,
            });

            if (authError) {
                console.error('Authentication error:', {
                    message: authError.message,
                    status: authError.status,
                    name: authError.name
                });
                throw authError;
            }

            if (!authData?.user?.id) {
                throw new Error('User creation failed - no user ID returned');
            }

            // 2. Add user to users table with admin role
            const { error: roleError } = await supabase
                .from('users')
                .insert([
                    {
                        id: authData.user.id,
                        email: email,
                        role: 'admin',
                    }
                ]);

            if (roleError) {
                console.error('Role assignment error:', {
                    message: roleError.message,
                    code: roleError.code,
                    details: roleError.details,
                    hint: roleError.hint
                });
                
                // If role assignment fails, attempt to clean up the auth user
                await supabase.auth.admin.deleteUser(authData.user.id)
                    .catch(cleanupError => {
                        console.error('Failed to clean up auth user after role assignment failure:', cleanupError);
                    });
                
                throw roleError;
            }

            setMessage('Admin account created successfully! Please check your email for verification.');
            
            // Clear form
            setEmail('');
            setPassword('');
            setAdminCode('');
            
        } catch (error) {
            console.error('Signup process error:', error);
            setMessage(error.message || 'An error occurred during signup. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 p-8 bg-navy-900/50 rounded-2xl backdrop-blur-lg border border-gray-700/50">
                <div>
                    <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Create Admin Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Please enter your details and the admin code
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="text-gray-300">Email</label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-700 rounded-lg bg-navy-900/50 placeholder-gray-500 text-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-gray-300">Password</label>
                            <input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-700 rounded-lg bg-navy-900/50 placeholder-gray-500 text-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div>
                            <label htmlFor="adminCode" className="text-gray-300">Admin Code</label>
                            <input
                                id="adminCode"
                                type="password"
                                required
                                value={adminCode}
                                onChange={(e) => setAdminCode(e.target.value)}
                                className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-700 rounded-lg bg-navy-900/50 placeholder-gray-500 text-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                                placeholder="Enter admin code"
                            />
                        </div>
                    </div>

                    {message && (
                        <div className={`text-sm ${message.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                            {message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50"
                    >
                        {loading ? 'Creating account...' : 'Create Admin Account'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminSignUp;
