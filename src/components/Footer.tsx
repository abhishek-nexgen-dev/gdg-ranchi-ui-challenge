import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1e293b] text-gray-300 font-sans border-t-4 border-double border-yellow-500 mt-12">
      {/* Top Clashing Banner in Footer */}
      <div className="bg-[#0284c7] text-white py-2 px-4 text-center text-xs md:text-sm font-mono border-b-2 border-black">
        🌟 Connect with Google Developer Group Ranchi — Learn. Connect. Grow. Together! 🌟
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          {/* Column 1: Outdated About Box */}
          <div className="bg-[#0f172a] p-4 border-2 border-gray-600 shadow-[3px_3px_0px_#000]">
            <h4 className="text-base font-bold text-yellow-400 font-serif border-b border-gray-700 pb-1 mb-2">
              GDG Ranchi Portal
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Google Developer Group Ranchi is an independent tech community for developers, students, and technology enthusiasts in Jharkhand interested in Google developer technologies.
            </p>
            <div className="mt-3 text-xs bg-yellow-950/60 text-yellow-300 p-2 border border-yellow-700 font-mono">
              ★ Status: Active Community Chapter 2025-2026
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="border border-dashed border-gray-500 p-3 bg-[#1e1b4b]">
            <h4 className="text-sm font-bold uppercase text-pink-400 font-mono mb-2 underline">
              Directory Pages
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/" className="text-blue-300 hover:text-white underline">
                  &gt; Chapter Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-300 hover:text-white underline">
                  &gt; About Us &amp; Mission
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-blue-300 hover:text-white underline">
                  &gt; All Events &amp; Meetups
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-blue-300 hover:text-white underline">
                  &gt; Community Organizers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-300 hover:text-white underline">
                  &gt; Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: External Communities */}
          <div className="border-2 border-gray-700 p-3 bg-[#182334]">
            <h4 className="text-sm font-bold uppercase text-emerald-400 font-mono mb-2">
              External Portals
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="https://gdg.community.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-yellow-300 hover:underline"
                >
                  <ExternalLink className="w-3 h-3" /> GDG Community Platform
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/community/wtm"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-yellow-300 hover:underline"
                >
                  <ExternalLink className="w-3 h-3" /> Women Techmakers
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-yellow-300 hover:underline"
                >
                  <ExternalLink className="w-3 h-3" /> Google Developers Portal
                </a>
              </li>
              <li>
                <a
                  href="https://cloud.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-yellow-300 hover:underline"
                >
                  <ExternalLink className="w-3 h-3" /> Google Cloud Platform
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Retro Hit Counter and Webmaster Notice */}
          <div className="bg-[#2a1b1b] border-2 border-red-700 p-3 text-center">
            <h4 className="text-xs font-bold text-red-300 uppercase tracking-wider mb-2 font-mono">
              Webmaster Stats
            </h4>
            
            {/* Retro 90s style digital counter */}
            <div className="inline-block bg-black border-2 border-gray-400 px-3 py-1 mb-2 font-mono text-green-400 font-bold tracking-widest text-lg shadow-inner">
              014,892
            </div>
            <div className="text-[11px] text-gray-400">Total Visits Since 2018</div>

            {/* Retro Badges */}
            <div className="mt-3 flex flex-wrap justify-center gap-1 text-[10px]">
              <span className="bg-gray-800 text-yellow-300 border border-gray-600 px-1 py-0.5 font-mono">
                1024x768 Optimized
              </span>
              <span className="bg-blue-900 text-white border border-blue-400 px-1 py-0.5 font-mono">
                React 19 Ready
              </span>
              <span className="bg-green-900 text-green-200 border border-green-500 px-1 py-0.5 font-mono">
                HTML5 Valid
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-6 pt-4 border-t border-gray-700 text-xs text-gray-400 space-y-2">
          <p className="bg-[#111827] p-2 border border-gray-800 text-[11px] text-gray-400 italic">
            Disclaimer: GDG Ranchi is an independent group; activities and opinions expressed on this website and in our meetups should in no way be linked to Google, the corporation. To learn more about the GDG program, visit developers.google.com/community/gdg.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 pt-2">
            <div>© 2018-2026 Google Developer Group (GDG) Ranchi. All Rights Reserved.</div>
            <div className="text-yellow-400 font-mono mt-1 md:mt-0 text-[11px]">
              UI Makeover Challenge Edition (Prepared for Gemini CLI Redesign)
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
