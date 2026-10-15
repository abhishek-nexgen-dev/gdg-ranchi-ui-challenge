import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sampleEvents } from '../data/events';
import { EventCard } from '../components/EventCard';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  ArrowLeft,
  Share2,
  Laptop,
  CheckSquare,
  Sparkles,
  Ticket,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Send,
  Printer
} from 'lucide-react';

export const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = sampleEvents.find((e) => e.id === id);

  // Simulated RSVP registration state
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpCollege, setRsvpCollege] = useState('');
  const [rsvpLevel, setRsvpLevel] = useState('Beginner');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [rsvpError, setRsvpError] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="bg-red-600 text-yellow-300 font-mono font-bold text-xs uppercase py-1 border border-black inline-block px-3">
          ⚠ EVENT NOT FOUND
        </div>
        <h1 className="text-3xl font-black font-serif text-gray-900">
          The requested event could not be located!
        </h1>
        <p className="text-xs text-gray-600 font-mono">
          Event ID: "{id}" does not exist in our community database.
        </p>
        <div className="pt-4">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-xs px-5 py-2.5 border-2 border-black shadow-[3px_3px_0px_#000]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Events Directory</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim() || !rsvpEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rsvpEmail)) {
      setRsvpError('Please provide your full name and a valid email address!');
      return;
    }
    setRsvpError('');
    setRsvpSubmitted(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Other related events
  const otherEvents = sampleEvents.filter((e) => e.id !== event.id).slice(0, 2);

  return (
    <div className="w-full bg-[#f8fafc] text-gray-800 font-sans pb-16">
      {/* Top Breadcrumb Bar */}
      <div className="bg-[#1e293b] text-gray-300 px-4 py-2 border-b-2 border-yellow-400 text-xs font-mono">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="text-yellow-400 hover:underline">Home</Link>
          <ChevronRight className="w-3 h-3 text-gray-500 shrink-0" />
          <Link to="/events" className="text-yellow-400 hover:underline">Events Directory</Link>
          <ChevronRight className="w-3 h-3 text-gray-500 shrink-0" />
          <span className="text-white font-bold truncate">{event.title}</span>
        </div>
      </div>

      {/* Hero / Event Banner - Clashing Dated Palette */}
      <div className="bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#312e81] text-white py-10 px-4 border-b-4 border-yellow-400">
        <div className="max-w-6xl mx-auto space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-yellow-400 text-black px-2 py-0.5 text-xs font-black uppercase border border-black font-mono">
              Track: {event.category}
            </span>
            <span
              className={`px-2 py-0.5 text-xs font-bold uppercase text-white font-mono border ${
                event.status === 'upcoming'
                  ? 'bg-green-600 border-green-300'
                  : 'bg-gray-600 border-gray-400'
              }`}
            >
              {event.status === 'upcoming' ? '⚡ UPCOMING SESSION' : 'COMPLETED SESSION (ARCHIVE)'}
            </span>
            <span className="bg-purple-600 text-white px-2 py-0.5 text-xs font-bold border border-white font-mono">
              Format: {event.mode}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black font-serif text-yellow-300 leading-tight">
            {event.title}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-gray-200 font-sans max-w-3xl leading-relaxed bg-[#0f172a]/60 p-3 border-l-4 border-yellow-400">
            {event.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-3 items-center">
            {event.status === 'upcoming' && (
              <a
                href="#rsvp-section"
                className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-black uppercase text-xs sm:text-sm px-5 py-2.5 border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5"
              >
                🎟️ Register For Free Pass
              </a>
            )}

            <button
              onClick={handleCopyLink}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold uppercase text-xs px-4 py-2.5 border-2 border-black shadow-[2px_2px_0px_#fff] flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Event Link'}</span>
            </button>

            <Link
              to="/events"
              className="text-xs font-mono text-yellow-300 hover:text-white underline ml-2"
            >
              &lt;&lt; Back to All Events
            </Link>
          </div>
        </div>
      </div>

      {/* Main Single Event Body Container */}
      <div className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
        {/* Left Column (2 Cols): Event Poster, Deep Overview, Schedule, Speakers */}
        <div className="lg:col-span-2 space-y-8">
          {/* Cover Photo */}
          <div className="bg-black border-4 border-black shadow-[6px_6px_0px_#000] overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-72 sm:h-96 object-cover opacity-95"
            />
            <div className="bg-[#1e293b] text-yellow-300 text-xs px-3 py-1.5 font-mono flex items-center justify-between">
              <span>📍 Venue: {event.location}</span>
              <span className="hidden sm:inline">GDG Ranchi Official Session</span>
            </div>
          </div>

          {/* Detailed Overview */}
          <div className="bg-white p-6 border-3 border-black shadow-[4px_4px_0px_#000] space-y-3">
            <div className="flex items-center gap-2 border-b-2 border-black pb-2">
              <Sparkles className="w-5 h-5 text-blue-700" />
              <h2 className="text-xl md:text-2xl font-black font-serif text-gray-900">
                Detailed Event Overview
              </h2>
            </div>
            <p className="text-xs md:text-sm text-gray-800 leading-relaxed font-sans">
              {event.fullDetails || event.description}
            </p>
            <div className="bg-[#fefce8] p-3 border-l-4 border-yellow-500 text-xs text-yellow-950 font-serif">
              "Whether you are just starting your engineering journey or have been shipping apps for years, GDG Ranchi events provide direct hands-on practice, code repos, and community discussions."
            </div>
          </div>

          {/* Agenda / Schedule Breakdown */}
          {event.agenda && event.agenda.length > 0 && (
            <div className="bg-white p-6 border-3 border-black shadow-[4px_4px_0px_#000] space-y-4">
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <h2 className="text-xl md:text-2xl font-black font-serif text-gray-900">
                    Official Event Agenda &amp; Timetable
                  </h2>
                </div>
                <span className="text-[11px] font-mono bg-yellow-400 text-black px-2 py-0.5 font-bold uppercase">
                  IST Timeline
                </span>
              </div>

              <div className="border-2 border-black overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#1e293b] text-yellow-300 font-mono uppercase">
                    <tr>
                      <th className="p-2.5 border-r border-gray-600 w-28">Time</th>
                      <th className="p-2.5">Session / Activity Topic</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
                    {event.agenda.map((item, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? 'bg-[#f8fafc]' : 'bg-[#fffbeb]'}
                      >
                        <td className="p-2.5 font-mono font-bold text-blue-900 border-r border-gray-300 whitespace-nowrap">
                          {item.time}
                        </td>
                        <td className="p-2.5 text-gray-800 font-sans">
                          {item.topic}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Featured Speakers Roster */}
          <div className="bg-white p-6 border-3 border-black shadow-[4px_4px_0px_#000] space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-black pb-2">
              <Users className="w-5 h-5 text-indigo-700" />
              <h2 className="text-xl md:text-2xl font-black font-serif text-gray-900">
                Featured Speakers &amp; Mentors
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.speakers.map((speaker, idx) => (
                <div
                  key={idx}
                  className="bg-[#f0f9ff] border-2 border-blue-800 p-3 flex items-start gap-3 shadow-[2px_2px_0px_#1e3a8a]"
                >
                  <div className="w-12 h-12 bg-yellow-400 border-2 border-black flex items-center justify-center font-bold font-mono text-lg shrink-0">
                    {speaker.charAt(0)}
                  </div>
                  <div className="text-xs space-y-0.5">
                    <span className="text-[10px] bg-blue-100 text-blue-900 font-mono px-1 border border-blue-300 font-bold">
                      SPEAKER
                    </span>
                    <div className="font-bold text-sm text-gray-900 font-serif">
                      {speaker}
                    </div>
                    <p className="text-gray-600 text-[11px]">
                      Industry expert &amp; community mentor delivering technical insights for this session.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Attendee Checklist / What to Bring */}
          <div className="bg-[#fffbeb] p-5 border-3 border-yellow-700 shadow-[4px_4px_0px_#854d0e] space-y-3">
            <div className="flex items-center gap-2 font-mono text-yellow-900 font-bold uppercase text-sm border-b border-yellow-300 pb-1">
              <Laptop className="w-4 h-4 text-yellow-800" />
              <span>Attendee Checklist — Prepare for the Session</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
              <div className="bg-white p-2 border border-yellow-400 flex items-start gap-1.5">
                <CheckSquare className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Laptop &amp; Power Cable:</strong> Fully charged for live coding.</span>
              </div>
              <div className="bg-white p-2 border border-yellow-400 flex items-start gap-1.5">
                <CheckSquare className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Photo Identity:</strong> Student ID or Govt ID card for venue security.</span>
              </div>
              <div className="bg-white p-2 border border-yellow-400 flex items-start gap-1.5">
                <CheckSquare className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Google / GitHub Account:</strong> Used for CodeLabs &amp; repo cloning.</span>
              </div>
              <div className="bg-white p-2 border border-yellow-400 flex items-start gap-1.5">
                <CheckSquare className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Community Spirit:</strong> Ready to code, ask questions, and network!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Quick Info, Live RSVP Registration, Venue & Map */}
        <div className="space-y-6">
          {/* Quick Info Box */}
          <div className="bg-[#fefce8] p-5 border-3 border-black shadow-[5px_5px_0px_#000] space-y-3">
            <div className="bg-[#1e293b] text-yellow-300 font-mono text-xs font-bold uppercase p-1.5 text-center">
              📅 EVENT LOGISTICS &amp; VENUE
            </div>

            <div className="space-y-2.5 text-xs text-gray-800 font-sans">
              <div className="flex items-start gap-2 bg-white p-2 border border-yellow-400">
                <Calendar className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900">Date:</div>
                  <div>{event.date}</div>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-white p-2 border border-yellow-400">
                <Clock className="w-4 h-4 text-orange-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900">Time:</div>
                  <div>{event.time}</div>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-white p-2 border border-yellow-400">
                <MapPin className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900">Location:</div>
                  <div>{event.location}</div>
                </div>
              </div>

              {event.seatsLeft && event.status === 'upcoming' && (
                <div className="bg-red-100 border-2 border-red-600 p-2 text-center text-xs text-red-800 font-mono font-bold animate-pulse">
                  ⚡ Seats Remaining: {event.seatsLeft} of 150
                </div>
              )}
            </div>
          </div>

          {/* Interactive Simulated RSVP / Ticket Pass Generator */}
          <div id="rsvp-section" className="bg-white p-5 border-3 border-black shadow-[5px_5px_0px_#000] space-y-3">
            <div className="border-b-2 border-black pb-2">
              <div className="text-[10px] font-mono font-bold uppercase bg-green-200 text-green-900 px-1.5 py-0.5 inline-block border border-green-400">
                FREE ATTENDEE PASS
              </div>
              <h3 className="text-lg font-black font-serif text-gray-900 mt-1">
                {event.status === 'upcoming' ? 'Simulate Event RSVP' : 'Event Concluded'}
              </h3>
            </div>

            {event.status === 'past' ? (
              <div className="bg-gray-100 border-2 border-gray-400 p-4 text-center text-xs text-gray-700 space-y-2">
                <div className="font-bold">This session has successfully concluded!</div>
                <p className="text-[11px] text-gray-600">
                  Slides and recordings are archived. Check our upcoming events to join future sessions!
                </p>
                <Link
                  to="/events"
                  className="inline-block bg-blue-700 text-white text-xs px-3 py-1.5 font-bold uppercase border border-black"
                >
                  View Upcoming Events
                </Link>
              </div>
            ) : rsvpSubmitted ? (
              /* Digital Pass / Admit Card Simulation */
              <div className="bg-[#fffbeb] border-3 border-yellow-700 p-4 text-xs space-y-2 shadow-[3px_3px_0px_#78350f]">
                <div className="flex items-center gap-1.5 text-green-800 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  <span>RSVP Registration Simulated!</span>
                </div>

                {/* Vintage Badge Ticket */}
                <div className="border-2 border-dashed border-black bg-white p-3 space-y-1 font-mono text-[11px]">
                  <div className="text-[10px] font-bold text-gray-500 uppercase border-b pb-1 flex justify-between">
                    <span>GDG RANCHI PASS</span>
                    <span>#RAN-{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>
                  <div className="font-bold text-sm text-blue-900 font-serif pt-1">
                    {rsvpName}
                  </div>
                  <div className="text-gray-700">{rsvpEmail}</div>
                  <div className="text-gray-600">{rsvpCollege || 'Independent Developer'}</div>
                  <div className="text-green-700 font-bold pt-1">
                    ✔ Confirmed Admission Pass
                  </div>
                </div>

                <p className="text-[10px] text-gray-500 italic">
                  Note: This is a frontend demonstration for the GDG Ranchi UI Makeover Challenge. No email was sent.
                </p>

                <button
                  onClick={() => setRsvpSubmitted(false)}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-black text-xs font-bold uppercase py-1 border border-black"
                >
                  Register Another Attendee (Demo)
                </button>
              </div>
            ) : (
              /* RSVP Form */
              <form onSubmit={handleRsvpSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-gray-800 uppercase font-mono mb-1">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    placeholder="e.g. Ankit Kumar"
                    className="w-full p-2 border-2 border-black bg-yellow-50/40 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-800 uppercase font-mono mb-1">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={rsvpEmail}
                    onChange={(e) => setRsvpEmail(e.target.value)}
                    placeholder="e.g. ankit@example.com"
                    className="w-full p-2 border-2 border-black bg-yellow-50/40 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-800 uppercase font-mono mb-1">
                    College / Organization
                  </label>
                  <input
                    type="text"
                    value={rsvpCollege}
                    onChange={(e) => setRsvpCollege(e.target.value)}
                    placeholder="e.g. BIT Mesra / Ranchi Univ"
                    className="w-full p-2 border-2 border-black bg-white text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-800 uppercase font-mono mb-1">
                    Experience Level
                  </label>
                  <select
                    value={rsvpLevel}
                    onChange={(e) => setRsvpLevel(e.target.value)}
                    className="w-full p-2 border-2 border-black bg-white text-xs font-bold"
                  >
                    <option value="Beginner">Beginner / Student</option>
                    <option value="Intermediate">Intermediate Developer</option>
                    <option value="Advanced">Senior / Working Professional</option>
                  </select>
                </div>

                {rsvpError && (
                  <div className="text-red-600 text-[11px] font-bold">
                    {rsvpError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-black font-black uppercase text-xs py-2.5 border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 flex items-center justify-center gap-1.5"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Reserve Free Ticket (Simulated)</span>
                </button>

                <div className="text-[10px] text-gray-500 font-mono text-center">
                  * Instant confirmation badge generated in browser.
                </div>
              </form>
            )}
          </div>

          {/* Ranchi Transit & Directions */}
          <div className="bg-white p-4 border-2 border-gray-600 shadow-[3px_3px_0px_#000] space-y-2 text-xs">
            <h4 className="font-bold text-gray-900 font-serif border-b pb-1 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>Venue Directions &amp; Transit</span>
            </h4>
            <p className="text-gray-700 leading-snug">
              <strong>Transit:</strong> Readily accessible via direct auto-rickshaws from Ranchi Railway Station and Kantatoli Bus Stand.
            </p>
            <p className="text-gray-700 leading-snug">
              <strong>Parking:</strong> On-campus vehicle parking for cars and two-wheelers available at venue gate.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom More Events Section */}
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t-2 border-gray-300">
        <div className="flex items-center justify-between mb-4 pb-1 border-b-2 border-black">
          <h3 className="text-xl font-black font-serif text-gray-900">
            More Events from GDG Ranchi
          </h3>
          <Link
            to="/events"
            className="text-xs font-mono font-bold text-blue-700 hover:underline uppercase"
          >
            View All Events &gt;&gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherEvents.map((ev, idx) => (
            <EventCard key={ev.id} event={ev} index={idx} onSelect={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
};
