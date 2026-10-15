import React, { useState } from 'react';
import { sampleEvents } from '../data/events';
import { EventItem, EventCategory, EventStatus, EventMode } from '../types';
import { EventCard } from '../components/EventCard';
import { EventModal } from '../components/EventModal';
import {
  Calendar,
  Search,
  Filter,
  AlertCircle,
  MapPin,
  Laptop,
  CheckCircle2,
  Building,
  Navigation
} from 'lucide-react';

export const EventsPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | EventStatus>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | EventCategory>('all');
  const [modeFilter, setModeFilter] = useState<'all' | EventMode>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ('all' | EventCategory)[] = [
    'all',
    'AI / ML',
    'Cloud',
    'Flutter',
    'Android',
    'Web',
    'General'
  ];

  // Filter events based on status, category, mode, and search query
  const filteredEvents = sampleEvents.filter((event) => {
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    const matchesMode = modeFilter === 'all' || event.mode === modeFilter;
    const matchesSearch =
      searchQuery === '' ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesCategory && matchesMode && matchesSearch;
  });

  const upcomingCount = sampleEvents.filter((e) => e.status === 'upcoming').length;
  const pastCount = sampleEvents.filter((e) => e.status === 'past').length;

  return (
    <div className="w-full bg-[#f1f5f9] text-gray-800 font-sans pb-12">
      {/* Header Banner - Dated Navy and Yellow */}
      <div className="bg-[#0f172a] text-white py-8 px-4 border-b-4 border-yellow-400 text-center">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="inline-block bg-green-500 text-black px-2 py-0.5 text-xs font-mono font-black uppercase tracking-wider">
            COMMUNITY CALENDAR &amp; SESSIONS
          </div>
          <h1 className="text-3xl md:text-4xl font-black font-serif text-yellow-300">
            GDG Ranchi Events &amp; Meetups
          </h1>
          <p className="text-xs md:text-sm text-gray-300 font-sans max-w-2xl mx-auto">
            Browse upcoming workshops, DevFest conferences, Cloud Study Jams, and past session archives. Click any event to view agenda and details.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6 space-y-6">
        {/* Filter Controls Box - Cluttered and unaligned */}
        <div className="bg-[#ffffff] p-4 border-3 border-black shadow-[4px_4px_0px_#000] space-y-3">
          <div className="flex items-center justify-between border-b border-gray-300 pb-2">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-gray-800 uppercase">
              <Filter className="w-4 h-4 text-blue-600" />
              <span>Event Filter Center</span>
            </div>
            <div className="text-xs text-gray-500 font-mono">
              Showing {filteredEvents.length} of {sampleEvents.length} events
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {/* Status Tabs */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-600 uppercase font-mono block">
                Timeline Status:
              </label>
              <div className="flex gap-1">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`text-xs px-2 py-1.5 font-bold uppercase border-2 flex-1 ${
                    statusFilter === 'all'
                      ? 'bg-yellow-400 text-black border-black font-black'
                      : 'bg-gray-100 text-gray-700 border-gray-300'
                  }`}
                >
                  All ({sampleEvents.length})
                </button>
                <button
                  onClick={() => setStatusFilter('upcoming')}
                  className={`text-xs px-2 py-1.5 font-bold uppercase border-2 flex-1 ${
                    statusFilter === 'upcoming'
                      ? 'bg-green-600 text-white border-black font-black'
                      : 'bg-gray-100 text-gray-700 border-gray-300'
                  }`}
                >
                  Upcoming ({upcomingCount})
                </button>
                <button
                  onClick={() => setStatusFilter('past')}
                  className={`text-xs px-2 py-1.5 font-bold uppercase border-2 flex-1 ${
                    statusFilter === 'past'
                      ? 'bg-blue-800 text-white border-black font-black'
                      : 'bg-gray-100 text-gray-700 border-gray-300'
                  }`}
                >
                  Past ({pastCount})
                </button>
              </div>
            </div>

            {/* Category Select */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-600 uppercase font-mono block">
                Technology Track:
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value as 'all' | EventCategory)}
                className="w-full text-xs font-bold border-2 border-black p-1.5 bg-yellow-50 text-gray-900"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Tech Tracks' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Mode Select */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-600 uppercase font-mono block">
                Delivery Format:
              </label>
              <select
                value={modeFilter}
                onChange={(e) => setModeFilter(e.target.value as 'all' | EventMode)}
                className="w-full text-xs font-bold border-2 border-black p-1.5 bg-yellow-50 text-gray-900"
              >
                <option value="all">All Formats (In-Person / Online)</option>
                <option value="In-Person">In-Person Only</option>
                <option value="Online">Online / Virtual Only</option>
              </select>
            </div>

            {/* Search Input */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-600 uppercase font-mono block">
                Search Keyword:
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Gemini, Cloud, DevFest..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs border-2 border-black p-1.5 pl-7 bg-white text-gray-900"
                />
                <Search className="w-3.5 h-3.5 text-gray-500 absolute left-2 top-2.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Notice Banner */}
        <div className="bg-[#eff6ff] border border-blue-400 p-2.5 text-xs text-blue-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              All GDG Ranchi meetups are free and open to everyone. RSVPs are processed on a first-come, first-served basis.
            </span>
          </div>
          <span className="font-mono font-bold text-blue-700 hidden sm:inline">
            📍 Ranchi, Jharkhand
          </span>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-gray-400 p-12 text-center space-y-3">
            <Calendar className="w-10 h-10 text-gray-400 mx-auto" />
            <h3 className="text-lg font-bold font-serif text-gray-700">
              No Events Found Matching Your Filter
            </h3>
            <p className="text-xs text-gray-500">
              Try resetting the technology category or search query to see all events.
            </p>
            <button
              onClick={() => {
                setStatusFilter('all');
                setCategoryFilter('all');
                setModeFilter('all');
                setSearchQuery('');
              }}
              className="bg-yellow-400 text-black text-xs font-bold uppercase px-4 py-2 border-2 border-black"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, idx) => (
              <EventCard
                key={event.id}
                event={event}
                index={idx}
                onSelect={(evt) => setSelectedEvent(evt)}
              />
            ))}
          </div>
        )}

        {/* What to Bring Checklist Section */}
        <div className="bg-[#fffbeb] p-5 border-3 border-yellow-700 shadow-[4px_4px_0px_#854d0e] space-y-3">
          <div className="flex items-center gap-2 font-mono text-yellow-900 font-bold uppercase text-sm border-b border-yellow-300 pb-1">
            <Laptop className="w-4 h-4 text-yellow-800" />
            <span>CodeLab Attendee Checklist — What to Bring to Meetups</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-gray-700">
            <div className="bg-white p-2.5 border border-yellow-400 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
              <div>
                <strong>Laptop &amp; Charger:</strong> Required for hands-on sessions &amp; study jams.
              </div>
            </div>
            <div className="bg-white p-2.5 border border-yellow-400 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
              <div>
                <strong>Student / Photo ID:</strong> For campus security verification at entry gates.
              </div>
            </div>
            <div className="bg-white p-2.5 border border-yellow-400 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
              <div>
                <strong>Google Account:</strong> Used to access Google Cloud Skills Boost labs.
              </div>
            </div>
            <div className="bg-white p-2.5 border border-yellow-400 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
              <div>
                <strong>Curiosity &amp; Energy:</strong> Ready to network, code, and win swags!
              </div>
            </div>
          </div>
        </div>

        {/* Venue & Navigation Guide for Ranchi */}
        <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_#000] space-y-4">
          <div className="flex items-center gap-2 border-b-2 border-black pb-2">
            <Navigation className="w-5 h-5 text-blue-700 shrink-0" />
            <h2 className="text-xl font-black font-serif text-gray-900">
              Ranchi Venue Navigation &amp; Transit Guide
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-[#f8fafc] p-3 border border-gray-400 space-y-1">
              <div className="font-bold text-gray-900 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-600" /> Aryabhatta Auditorium
              </div>
              <p className="text-gray-600">
                Ranchi University Morabadi Campus. 4.5 km from Ranchi Railway Station. Ample two-wheeler and four-wheeler parking available.
              </p>
            </div>

            <div className="bg-[#f8fafc] p-3 border border-gray-400 space-y-1">
              <div className="font-bold text-gray-900 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-600" /> St. Xavier's Auditorium
              </div>
              <p className="text-gray-600">
                Dr. Camil Bulcke Path (Purulia Road). Central location near Albert Ekka Chowk with direct auto-rickshaw connectivity.
              </p>
            </div>

            <div className="bg-[#f8fafc] p-3 border border-gray-400 space-y-1">
              <div className="font-bold text-gray-900 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-600" /> BIT Mesra Seminar Halls
              </div>
              <p className="text-gray-600">
                Lalpur Extension Center &amp; Main Mesra Campus. Shuttle and bus services available from Kantatoli bus stand.
              </p>
            </div>
          </div>
        </div>

        {/* Host an Event Callout */}
        <div className="bg-[#1e1b4b] text-yellow-300 p-5 border-4 border-yellow-400 text-center space-y-2">
          <div className="flex justify-center">
            <Building className="w-5 h-5 text-yellow-400" />
          </div>
          <h3 className="text-lg font-bold font-serif">
            Want to Host a GDG Ranchi Meetup at your College or Co-Working Space?
          </h3>
          <p className="text-xs text-gray-300 max-w-xl mx-auto">
            We partner with academic institutions and corporate offices to bring technical workshops and speaker panels to diverse locations across Ranchi.
          </p>
          <div className="pt-1">
            <a
              href="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-xs px-4 py-2 border-2 border-black"
            >
              Propose Your Venue &gt;
            </a>
          </div>
        </div>
      </div>

      {/* Event Details Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};
