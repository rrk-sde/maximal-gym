"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginMutation, useForgotPasswordMutation, useResetPasswordMutation } from "@/app/store/api/authApi";
import { toast } from "sonner";
import { Mail, Lock, LogIn, Key, ArrowLeft } from "lucide-react";

type ViewState = 'login' | 'forgot' | 'reset';

export default function AdminLoginPage() {
    const router = useRouter();
    const [view, setView] = useState<ViewState>('login');
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [resetData, setResetData] = useState({
        email: "",
        otp: "",
        newPassword: ""
    });

    const [login, { isLoading: isLoginLoading }] = useLoginMutation();
    const [forgotPassword, { isLoading: isForgotLoading }] = useForgotPasswordMutation();
    const [resetPassword, { isLoading: isResetLoading }] = useResetPasswordMutation();

    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login(formData).unwrap();
            localStorage.setItem("gym-token", response.data.token);
            localStorage.setItem("gym-user", JSON.stringify(response.data.user));
            toast.success("Login successful! Welcome back.");
            router.push("/admin");
        } catch (error: any) {
            toast.error(error?.data?.message || "Login failed. Please check your credentials.");
        }
    };

    const handleForgotSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await forgotPassword({ email: resetData.email }).unwrap();
            toast.success("OTP sent to your email!");
            setView('reset');
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to send OTP.");
        }
    };

    const handleResetSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await resetPassword(resetData).unwrap();

            // Auto login after reset
            localStorage.setItem("gym-token", response.data.token);
            localStorage.setItem("gym-user", JSON.stringify(response.data.user));

            toast.success("Password reset successful!");
            router.push("/admin");
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to reset password.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="w-full max-w-md p-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transition-all duration-300">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF4D00] rounded-full mb-4">
                            {view === 'login' ? <LogIn className="w-8 h-8 text-white" /> : <Key className="w-8 h-8 text-white" />}
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            {view === 'login' ? 'Admin Login' : view === 'forgot' ? 'Forgot Password' : 'Reset Password'}
                        </h1>
                        <p className="text-gray-600 mt-2">
                            {view === 'login' ? 'Sign in to access the admin panel' :
                                view === 'forgot' ? 'Enter your email to receive an OTP' :
                                    'Enter OTP and your new password'}
                        </p>
                    </div>

                    {/* Forms */}
                    {view === 'login' && (
                        <form onSubmit={handleLoginSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D00] focus:border-transparent"
                                        placeholder="admin@maximalgym.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D00] focus:border-transparent"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="flex justify-end mt-2">
                                    <button
                                        type="button"
                                        onClick={() => setView('forgot')}
                                        className="text-sm text-[#FF4D00] hover:text-[#FF4D00]/80 font-medium"
                                    >
                                        Forgot Password?
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoginLoading}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FF4D00] text-white font-semibold rounded-lg hover:bg-[#FF4D00]/90 transition-colors disabled:opacity-50"
                            >
                                {isLoginLoading ? 'Logging in...' : 'Sign In'}
                            </button>
                        </form>
                    )}

                    {view === 'forgot' && (
                        <form onSubmit={handleForgotSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={resetData.email}
                                        onChange={(e) => setResetData({ ...resetData, email: e.target.value })}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D00] focus:border-transparent"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isForgotLoading}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FF4D00] text-white font-semibold rounded-lg hover:bg-[#FF4D00]/90 transition-colors disabled:opacity-50"
                            >
                                {isForgotLoading ? 'Sending...' : 'Send OTP'}
                            </button>

                            <button
                                type="button"
                                onClick={() => setView('login')}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Login
                            </button>
                        </form>
                    )}

                    {view === 'reset' && (
                        <form onSubmit={handleResetSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">OTP Code</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Key className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        value={resetData.otp}
                                        onChange={(e) => setResetData({ ...resetData, otp: e.target.value })}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D00] focus:border-transparent"
                                        placeholder="Enter OTP (try 999999)"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        value={resetData.newPassword}
                                        onChange={(e) => setResetData({ ...resetData, newPassword: e.target.value })}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D00] focus:border-transparent"
                                        placeholder="Enter new password"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isResetLoading}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FF4D00] text-white font-semibold rounded-lg hover:bg-[#FF4D00]/90 transition-colors disabled:opacity-50"
                            >
                                {isResetLoading ? 'Resetting...' : 'Reset Password'}
                            </button>

                            <button
                                type="button"
                                onClick={() => setView('login')}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Login
                            </button>
                        </form>
                    )}

                    {/* Default Credentials Info - Only show on login */}
                    {view === 'login' && (
                        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-xs text-blue-800 font-medium mb-2">Default Admin Credentials:</p>
                            <p className="text-xs text-blue-700">Email: admin@maximalgym.com</p>
                            <p className="text-xs text-blue-700">Password: admin123</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
