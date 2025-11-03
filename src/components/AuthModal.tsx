import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ModernSignIn } from './ui/modern-sign-in';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const handleSubmit = (data: { email: string; password: string }) => {
    console.log('Sign in:', data);
    alert('Sign in successful!');
    onClose();
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    alert('Google login clicked');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors z-10"
            >
              <X size={24} />
            </button>
            
            <ModernSignIn onSubmit={handleSubmit} onGoogleLogin={handleGoogleLogin} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
