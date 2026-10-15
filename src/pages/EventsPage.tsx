import React, { useState } from 'react';
import { sampleEvents } from '../data/events';
import { EventItem, EventCategory, EventStatus } from '../types';
import { EventCard } from '../components/EventCard';
import { EventModal } from '../components/EventModal';
import { Calendar, Search, Filter, AlertCircle } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | EventStatus>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | EventCategory>('all');
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

  // Filter events based on status, category, and search query
  const filteredEvents = sampleEvents.filter((event) => {
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    const matchesSearch =
      searchQuery === '' ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesCategory && matchesSearch;
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Status Tabs */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-600 uppercase font-mono block">
                Timeline Status:
              </label>
              <div className="flex gap-1">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`text-xs px-2.5 py-1.5 font-bold uppercase border-2 flex-1 ${
                    statusFilter === 'all'
                      ? 'bg-yellow-400 text-black border-black font-black'
                      : 'bg-gray-100 text-gray-700 border-gray-300'
                  }`}
                >
                  All ({sampleEvents.length})
                </button>
                <button
                  onClick={() => setStatusFilter('upcoming')}
                  className={`text-xs px-2.5 py-1.5 font-bold uppercase border-2 flex-1 ${
                    statusFilter === 'upcoming'
                      ? 'bg-green-600 text-white border-black font-black'
                      : 'bg-gray-100 text-gray-700 border-gray-300'
                  }`}
                >
                  Upcoming ({upcomingCount})
                </button>
                <button
                  onClick={() => setStatusFilter('past')}
                  className={`text-xs px-2.5 py-1.5 font-bold uppercase border-2 flex-1 ${
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
                Filter By Technology:
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
      </div>

      {/* Event Details Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};
