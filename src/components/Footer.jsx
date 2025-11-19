import React from 'react';

export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 w-full bg-white/20 backdrop-blur-xl border-t border-white/30 shadow-lg text-center py-4 select-none"
      style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-6xl mx-auto text-gray-700 dark:text-gray-300 text-sm sm:text-base">
        © {new Date().getFullYear()} Shiv Shankar Gupta. All rights reserved.
      </div>
    </footer>
  );
}
