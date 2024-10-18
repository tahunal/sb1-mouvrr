"use client"

import TokenCreationForm from '@/components/TokenCreationForm';
import { Coins } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-blue-600 p-3 rounded-lg mb-4"
        >
          <Coins className="h-8 w-8 text-white" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4">Create Aptos Tokens</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Create and manage your Aptos tokens with ease.
        </p>
      </div>

      <TokenCreationForm />

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>&copy; 2023 APTCoins. All rights reserved.</p>
      </footer>
    </div>
  );
}