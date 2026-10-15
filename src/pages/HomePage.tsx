import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sampleEvents } from '../data/events';
import { EventItem } from '../types';
import { EventCard } from '../components/EventCard';
import { EventModal } from '../components/EventModal';
import { AlertTriangle, Users, Award, Code, Compass, ArrowRight, Zap, CheckSquare } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Take the 3 top upcoming or recent events
  const featuredEvents = sampleEvents.slice(0, 3);

  return (
    <div className="w-full bg-[#f1f5f9] text-gray-800 font-sans">
      {/* Challenge Alert Ribbon */}
      <div className="bg-[#fef08a] border-b-2 border-dashed border-[#854d0e] p-2 text-center text-xs md:text-sm font-mono text-[#713f12] flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 text-orange-600 shrink-0" />
        <span>
          <strong>UI MAKEOVER CHALLENGE:</strong> Redesign this website using Gemini CLI in 5–10 mins! Keep logic intact.
        </span>
      </div>

      {/* Hero Section - Cluttered, clashing colors, outdated typography */}
      <section className="bg-gradient-to-b from-[#172554] to-[#1e3a8a] text-white py-10 px-4 border-b-4 border-yellow-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Hero Column */}
          <div className="w-full md:w-3/5 space-y-4 text-center md:text-left">
            <div className="inline-block bg-red-600 text-yellow-300 px-3 py-1 text-xs font-mono font-black uppercase tracking-widest border-2 border-yellow-300 rotate-[-1deg] shadow-[3px_3px_0px_#000]">
              ★★★ OFFICIAL CHAPTER PORTAL • JHARKHAND ★★★
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight leading-tight text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Welcome To <span className="text-[#60a5fa] underline decoration-yellow-400">GDG Ranchi</span>{' '}
              Developer Community!
            </h1>

            <p className="text-sm md:text-base text-gray-200 font-sans leading-relaxed bg-[#0f172a]/70 p-3 border-l-4 border-yellow-400">
              Google Developer Groups (GDG) Ranchi is an inclusive group of local programmers, students, university researchers, and industry tech leaders interested in Google’s developer technologies and open-source stacks.
            </p>

            {/* Clashing CTA Buttons */}
            <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                to="/events"
                className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-black uppercase text-sm px-5 py-3 border-3 border-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none flex items-center gap-2"
              >
                <span>🔥 Explore Upcoming Events</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/about"
                className="bg-[#eab308] hover:bg-[#ca8a04] text-black font-bold uppercase text-sm px-4 py-3 border-2 border-white shadow-[3px_3px_0px_#fff]"
              >
                About Our Chapter &gt;&gt;
              </Link>

              <Link
                to="/contact"
                className="bg-purple-700 hover:bg-purple-800 text-white font-mono text-xs px-3 py-3 border border-purple-300"
              >
                Become A Speaker 🎤
              </Link>
            </div>
          </div>

          {/* Right Hero Graphic / Notice Card */}
          <div className="w-full md:w-2/5">
            <div className="bg-[#fffbeb] border-4 border-black p-4 text-black shadow-[6px_6px_0px_#000] space-y-3">
              <div className="bg-[#1e293b] text-yellow-300 px-3 py-1 font-mono text-xs font-bold uppercase flex justify-between items-center">
                <span>⚡ COMMUNITY NOTICE BOARD</span>
                <span className="text-red-400">● LIVE</span>
              </div>

              <div className="border border-gray-300 p-2 bg-white">
                <div className="font-bold text-sm text-red-700 font-serif">
                  📣 Next Big Meetup: Build with AI Summit
                </div>
                <div className="text-xs text-gray-700 mt-1">
                  November 15, 2025 at Aryabhatta Auditorium, Ranchi. Hands-on Gemini workshops &amp; Cloud Labs!
                </div>
                <div className="mt-2 text-right">
                  <Link
                    to="/events"
                    className="text-xs text-blue-700 underline font-bold"
                  >
                    Click for Schedule &gt;
                  </Link>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-300 p-2 text-xs text-blue-900 space-y-1">
                <div className="font-bold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-blue-700" />
                  <span>Free Membership for All!</span>
                </div>
                <p className="text-[11px] text-gray-600">
                  No subscription fee. Join our community to attend meetups, receive study credits, and build projects.
                </p>
              </div>

              <div className="text-center pt-1">
                <span className="text-[10px] text-gray-500 font-mono">
                  [GDG Ranchi Chapter Code: IN-RAN-01]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats Section - Boxy table style */}
      <section className="py-6 px-4 bg-[#e2e8f0] border-b-2 border-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-3">
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-gray-600">
              📊 CHAPTER ANALYTICS &amp; COMMUNITY STATS
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
              <Users className="w-5 h-5 mx-auto text-blue-600 mb-1" />
              <div className="text-2xl font-black text-gray-900 font-serif">1,450+</div>
              <div className="text-xs font-bold text-gray-600 font-mono">Community Members</div>
            </div>

            <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
              <Code className="w-5 h-5 mx-auto text-green-600 mb-1" />
              <div className="text-2xl font-black text-gray-900 font-serif">48+</div>
              <div className="text-xs font-bold text-gray-600 font-mono">Meetups &amp; CodeLabs</div>
            </div>

            <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
              <Award className="w-5 h-5 mx-auto text-yellow-600 mb-1" />
              <div className="text-2xl font-black text-gray-900 font-serif">600+</div>
              <div className="text-xs font-bold text-gray-600 font-mono">Cloud Badges Earned</div>
            </div>

            <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
              <Compass className="w-5 h-5 mx-auto text-purple-600 mb-1" />
              <div className="text-2xl font-black text-gray-900 font-serif">7+</div>
              <div className="text-xs font-bold text-gray-600 font-mono">Years in Ranchi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-6 pb-2 border-b-2 border-black gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-red-600 bg-red-100 px-2 py-0.5 border border-red-300">
              Featured Sessions
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 font-serif mt-1">
              Top Featured Community Events
            </h2>
          </div>
          <Link
            to="/events"
            className="text-xs md:text-sm font-bold text-blue-700 hover:text-blue-900 underline uppercase font-mono"
          >
            Browse All 8+ Events &gt;&gt;
          </Link>
        </div>

        {/* 3 Featured event cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.map((event, idx) => (
            <EventCard
              key={event.id}
              event={event}
              index={idx}
              onSelect={(evt) => setSelectedEvent(evt)}
            />
          ))}
        </div>
      </section>

      {/* About Chapter Preview / Reasons to Participate */}
      <section className="py-10 px-4 bg-[#f8fafc] border-t-2 border-b-2 border-gray-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side: Community info */}
          <div className="bg-[#fef9c3] p-5 border-3 border-yellow-800 shadow-[4px_4px_0px_#713f12]">
            <h3 className="text-xl font-black text-yellow-900 font-serif mb-3">
              What is Google Developer Group Ranchi?
            </h3>
            <p className="text-xs md:text-sm text-gray-800 leading-relaxed font-sans mb-3">
              We are a volunteer-led developers community in Ranchi, Jharkhand. Our goal is to create a vibrant platform for technologists to connect, learn Google developer technologies (like Android, Flutter, TensorFlow, Google Cloud, and Web technologies), and share experiences.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed font-sans mb-4">
              Whether you are an engineering student taking your first steps in coding, an experienced software engineer looking to learn machine learning, or an entrepreneur building the next tech startup from Jharkhand, GDG Ranchi has something for you.
            </p>
            <Link
              to="/about"
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-xs uppercase px-4 py-2 border-2 border-black"
            >
              Read Full Story &gt;
            </Link>
          </div>

          {/* Right side: Why Attend */}
          <div className="bg-[#ecfeff] p-5 border-3 border-cyan-800 shadow-[4px_4px_0px_#155e75]">
            <h3 className="text-xl font-black text-cyan-950 font-serif mb-3">
              Why Attend GDG Ranchi Meetups?
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-gray-800 font-sans">
              <li className="flex items-start gap-2 bg-white p-2 border border-cyan-300">
                <CheckSquare className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                <span>
                  <strong>100% Free Knowledge Sharing:</strong> Learn modern tech directly from Google Developer Experts and senior engineers.
                </span>
              </li>
              <li className="flex items-start gap-2 bg-white p-2 border border-cyan-300">
                <CheckSquare className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Hands-on Labs &amp; Swag:</strong> Get free credits for Google Cloud Skills Boost and win Google developer t-shirts and stickers.
                </span>
              </li>
              <li className="flex items-start gap-2 bg-white p-2 border border-cyan-300">
                <CheckSquare className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Career &amp; Tech Networking:</strong> Connect with founders, tech recruiters, and fellow developers across Ranchi and nearby regions.
                </span>
              </li>
            </ul>
            <div className="mt-4 text-center">
              <Link
                to="/team"
                className="text-xs text-cyan-900 underline font-bold"
              >
                Meet the organizers behind GDG Ranchi &gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Retro Community Callout Footer Section */}
      <section className="py-8 px-4 text-center bg-[#1e1b4b] text-yellow-300 border-b-4 border-black">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-xl md:text-2xl font-black font-serif uppercase tracking-wide">
            Want to Host a Talk or Volunteer with GDG Ranchi?
          </h2>
          <p className="text-xs md:text-sm text-gray-300 font-sans">
            We are always looking for passionate speakers, campus ambassadors, and venue partners for our monthly workshops in Ranchi!
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase px-5 py-2.5 border-2 border-yellow-300 shadow-[3px_3px_0px_#fff]"
            >
              Get In Touch With The Organizers &gt;&gt;
            </Link>
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};
