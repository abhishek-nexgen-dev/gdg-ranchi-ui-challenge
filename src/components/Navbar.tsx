import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sparkles, AlertCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full font-sans border-b-4 border-yellow-500 bg-[#0d1b2a] text-white">
      {/* Outdated top announcement bar */}
      <div className="bg-[#b91c1c] text-[#fef08a] px-3 py-1 text-xs md:text-sm font-bold tracking-wider text-center border-b-2 border-black flex items-center justify-between overflow-hidden">
        <span className="hidden md:inline font-mono">⚡ GDG RANCHI CHAPTER ⚡</span>
        <div className="mx-auto flex items-center gap-2 animate-pulse">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span>★ ANNOUNCEMENT: DevFest & Build With AI Registrations Are OPEN! ★</span>
          <span className="bg-yellow-400 text-black px-1.5 py-0.5 text-[11px] rounded uppercase font-black">
            Limited Seats!
          </span>
        </div>
        <span className="hidden md:inline font-mono">ESTD. 2018</span>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2 group">
          {/* Outdated faux-3D badge */}
          <div className="bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 border-2 border-white p-2 shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
            <span className="text-xl font-black tracking-tighter text-yellow-300 font-mono">
              &lt;GDG/&gt;
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black tracking-tight font-serif text-[#4285F4]">G</span>
              <span className="text-2xl font-black tracking-tight font-serif text-[#EA4335]">D</span>
              <span className="text-2xl font-black tracking-tight font-serif text-[#FBBC05]">G</span>
              <span className="text-xl font-extrabold text-white ml-1 tracking-wider font-mono">RANCHI</span>
            </div>
            <span className="text-[10px] uppercase font-bold text-gray-300 tracking-widest bg-[#1e293b] px-1 border border-gray-600">
              Google Developer Group • Jharkhand
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Inconsistently styled on purpose */}
        <nav className="hidden md:flex items-center space-x-2 text-sm font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1.5 uppercase transition-all ${
                isActive
                  ? 'bg-yellow-400 text-black border-2 border-black font-black underline'
                  : 'text-gray-200 hover:text-yellow-300 hover:underline'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-1.5 uppercase transition-all ${
                isActive
                  ? 'bg-[#00ffff] text-black font-black border-2 border-blue-900'
                  : 'text-gray-200 hover:text-[#00ffff] hover:bg-gray-800'
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              `px-3 py-1.5 uppercase transition-all flex items-center gap-1 ${
                isActive
                  ? 'bg-green-500 text-white font-black border-2 border-white shadow-[2px_2px_0px_#000]'
                  : 'text-green-400 hover:text-green-300'
              }`
            }
          >
            Events
            <span className="bg-red-600 text-white text-[10px] px-1 py-0.2 rounded-full font-sans">
              HOT
            </span>
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `px-3 py-1.5 uppercase transition-all ${
                isActive
                  ? 'bg-orange-500 text-white font-black border-2 border-white'
                  : 'text-orange-300 hover:text-yellow-200'
              }`
            }
          >
            Memories
          </NavLink>

          <NavLink
            to="/team"
            className={({ isActive }) =>
              `px-3 py-1.5 uppercase transition-all ${
                isActive
                  ? 'bg-purple-600 text-white font-black border-2 border-yellow-300'
                  : 'text-gray-200 hover:text-purple-300'
              }`
            }
          >
            Team Roster
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-1.5 uppercase transition-all ${
                isActive
                  ? 'bg-white text-blue-900 font-black border-2 border-red-600'
                  : 'text-gray-200 hover:text-white'
              }`
            }
          >
            Contact
          </NavLink>

          {/* Outdated Action Button */}
          <Link
            to="/events"
            className="ml-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-extrabold px-3 py-1.5 text-xs uppercase border-2 border-yellow-300 shadow-[3px_3px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none"
          >
            👉 RSVP Free!
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            to="/events"
            className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 border border-black uppercase"
          >
            RSVP
          </Link>
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            className="p-1.5 bg-gray-800 border-2 border-gray-400 text-yellow-300 hover:bg-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Challenge Notice Pill */}
      <div className="bg-[#1e293b] border-t border-gray-700 px-4 py-1 text-center text-xs text-yellow-300 font-mono flex items-center justify-center gap-2">
        <AlertCircle className="w-3.5 h-3.5 text-yellow-400" />
        <span>UI Makeover Challenge Starter: Outdated design intentional! Clean code inside.</span>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1b263b] border-t-2 border-yellow-400 px-4 py-4 space-y-2">
          <div className="text-xs uppercase text-gray-400 font-mono pb-1 border-b border-gray-700">
            Navigation Menu (GDG Ranchi)
          </div>
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-sm font-bold uppercase border ${
                isActive ? 'bg-yellow-400 text-black border-black font-black' : 'text-white border-gray-700 hover:bg-gray-800'
              }`
            }
          >
            🏠 Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-sm font-bold uppercase border ${
                isActive ? 'bg-[#00ffff] text-black border-black font-black' : 'text-white border-gray-700 hover:bg-gray-800'
              }`
            }
          >
            ℹ️ About GDG Ranchi
          </NavLink>
          <NavLink
            to="/events"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-sm font-bold uppercase border ${
                isActive ? 'bg-green-500 text-white border-black font-black' : 'text-white border-gray-700 hover:bg-gray-800'
              }`
            }
          >
            📅 Community Events (Upcoming & Past)
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-sm font-bold uppercase border ${
                isActive ? 'bg-orange-500 text-white border-black font-black' : 'text-white border-gray-700 hover:bg-gray-800'
              }`
            }
          >
            📷 Photo Archive &amp; Memories
          </NavLink>
          <NavLink
            to="/team"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-sm font-bold uppercase border ${
                isActive ? 'bg-purple-600 text-white border-black font-black' : 'text-white border-gray-700 hover:bg-gray-800'
              }`
            }
          >
            👥 Core Team & Leads
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-sm font-bold uppercase border ${
                isActive ? 'bg-white text-blue-900 border-black font-black' : 'text-white border-gray-700 hover:bg-gray-800'
              }`
            }
          >
            ✉️ Contact & Feedback
          </NavLink>
        </div>
      )}
    </header>
  );
};
