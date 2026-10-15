import React, { useState } from 'react';
import { EventItem } from '../types';
import { X, Calendar, Clock, MapPin, Users, CheckCircle2 } from 'lucide-react';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [registered, setRegistered] = useState(false);

  if (!event) return null;

  const handleRegister = () => {
    setRegistered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-[#fffff8] border-4 border-black shadow-[8px_8px_0px_#000] max-h-[90vh] flex flex-col overflow-hidden">
        {/* Retro Header Bar */}
        <div className="bg-[#1e3a8a] text-yellow-300 px-4 py-2 flex items-center justify-between border-b-2 border-black">
          <div className="font-mono text-xs md:text-sm font-bold truncate">
            📂 EVENT_DETAILS.EXE - {event.id.toUpperCase()}
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-2 py-0.5 border border-white text-xs"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 md:p-6 overflow-y-auto space-y-4 text-left">
          {/* Cover Image */}
          <div className="w-full h-48 border-2 border-black overflow-hidden bg-gray-900">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="bg-yellow-400 text-black px-2 py-0.5 text-xs font-black uppercase border border-black font-mono">
              {event.category}
            </span>
            <span
              className={`px-2 py-0.5 text-xs font-bold uppercase text-white font-mono ${
                event.status === 'upcoming' ? 'bg-green-700' : 'bg-gray-700'
              }`}
            >
              {event.status === 'upcoming' ? 'Status: Upcoming Event' : 'Status: Past Concluded Event'}
            </span>
            <span className="bg-purple-200 text-purple-900 px-2 py-0.5 text-xs font-bold border border-purple-400">
              Format: {event.mode}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-black text-gray-900 font-serif leading-tight">
            {event.title}
          </h2>

          {/* Meta Information Box */}
          <div className="bg-[#e2e8f0] border-2 border-dashed border-gray-600 p-3 text-xs md:text-sm space-y-1.5 font-sans">
            <div className="flex items-center gap-2 text-blue-900 font-bold">
              <Calendar className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Date: {event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
              <Clock className="w-4 h-4 text-orange-700 shrink-0" />
              <span>Time: {event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
              <MapPin className="w-4 h-4 text-red-700 shrink-0" />
              <span>Location: {event.location}</span>
            </div>
            {event.speakers && (
              <div className="flex items-center gap-2 text-gray-800 pt-1 border-t border-gray-300">
                <Users className="w-4 h-4 text-indigo-700 shrink-0" />
                <span>Featured Speakers: {event.speakers.join(', ')}</span>
              </div>
            )}
          </div>

          {/* Full Description */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-400 pb-1 font-mono">
              Event Overview &amp; Key Takeaways
            </h4>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-serif">
              {event.fullDetails || event.description}
            </p>
          </div>

          {/* Agenda breakdown if present */}
          {event.agenda && event.agenda.length > 0 && (
            <div className="space-y-2 bg-[#f8fafc] border border-gray-400 p-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 font-mono">
                📅 Detailed Schedule &amp; Agenda
              </h4>
              <ul className="space-y-1 text-xs">
                {event.agenda.map((item, idx) => (
                  <li key={idx} className="flex gap-2 border-b border-gray-200 pb-1">
                    <span className="font-mono font-bold text-gray-800 w-20 shrink-0">
                      {item.time}
                    </span>
                    <span className="text-gray-700">{item.topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Registration / RSVP Action */}
          <div className="pt-3 border-t-2 border-black">
            {registered ? (
              <div className="bg-green-100 border-2 border-green-700 text-green-900 p-3 text-xs md:text-sm flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Registration Demo Successful!</div>
                  <div className="text-xs text-green-800 mt-0.5">
                    Note: This is a demo modal for the UI makeover challenge. In production, this would link to the official GDG community platform.
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#fef3c7] p-3 border border-yellow-600">
                <div className="text-xs text-yellow-900">
                  {event.status === 'upcoming' ? (
                    <span>Free community event. Open to all students &amp; professionals.</span>
                  ) : (
                    <span>This event has concluded. Check back for recording slides!</span>
                  )}
                </div>
                {event.status === 'upcoming' && (
                  <button
                    onClick={handleRegister}
                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase px-4 py-2 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5"
                  >
                    Simulate RSVP (Free)
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-200 px-4 py-2 border-t border-black flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-800 hover:bg-gray-900 text-white text-xs px-4 py-1.5 font-bold uppercase border border-black shadow-[2px_2px_0px_#000]"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
