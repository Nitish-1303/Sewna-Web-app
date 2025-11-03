import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

// Simple Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function ModernInput({ className, type, label, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium">
          {label} <span className="text-red-500">*</span>
        </label>
      )}
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent",
          className
        )}
        {...props}
      />
    </div>
  );
}

// Modern Sign In Form
interface ModernSignInProps {
  onSubmit?: (data: { email: string; password: string }) => void;
  onGoogleLogin?: () => void;
}

export function ModernSignIn({ onSubmit, onGoogleLogin }: ModernSignInProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};

    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email';
    if (password && password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (Object.keys(newErrors).length === 0) {
      onSubmit?.({ email, password });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Welcome to SEWNA</h2>
          <p className="text-gray-600 dark:text-gray-400">Sign in to your account</p>
        </div>

        {/* Google Login */}
        <button
          onClick={onGoogleLogin}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Login with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <hr className="flex-1 border-gray-300 dark:border-gray-700" />
          <span className="text-sm text-gray-500">or</span>
          <hr className="flex-1 border-gray-300 dark:border-gray-700" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <ModernInput
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <div className="relative">
              <ModernInput
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-accent to-green-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Sign in →
          </button>
        </form>

        {/* Footer */}
        <div className="text-center">
          <button className="text-sm text-accent hover:underline">
            Forgot password?
          </button>
        </div>
      </motion.div>
    </div>
  );
}
