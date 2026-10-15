import React from 'react';
import { Link } from 'react-router-dom';
import { AlertOctagon, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6 bg-[#f8fafc]">
      <div className="max-w-md w-full bg-white border-4 border-black p-6 shadow-[6px_6px_0px_#000] text-center space-y-4">
        <div className="bg-red-600 text-yellow-300 font-mono font-bold text-xs uppercase py-1 border border-black">
          ⚠ ERROR CODE 404
        </div>

        <div className="flex justify-center">
          <AlertOctagon className="w-16 h-16 text-red-600 animate-bounce" />
        </div>

        <h1 className="text-2xl font-black font-serif text-gray-900">
          Page Not Found (HTTP 404)
        </h1>

        <p className="text-xs text-gray-600 font-mono leading-relaxed bg-gray-100 p-3 border border-gray-400">
          The requested URL was not found on this server. It might have been moved, renamed, or deleted during webmaster maintenance.
        </p>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-xs px-5 py-2.5 border-2 border-black shadow-[3px_3px_0px_#000]"
          >
            <Home className="w-4 h-4" />
            <span>Return to GDG Ranchi Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
