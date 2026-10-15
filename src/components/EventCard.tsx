import React from 'react';
import { Link } from 'react-router-dom';
import { EventItem } from '../types';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

interface EventCardProps {
  event: EventItem;
  onSelect: (event: EventItem) => void;
  index?: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelect, index = 0 }) => {
  // Purposefully alternate clashing card styles based on index to demonstrate visual inconsistency
  const isAltStyle = index % 2 === 1;

  return (
    <div
      className={`flex flex-col justify-between transition-all ${
        isAltStyle
          ? 'bg-[#fffdf0] border-4 border-double border-yellow-700 shadow-[5px_5px_0px_#78350f]'
          : 'bg-[#f0f9ff] border-2 border-blue-900 shadow-[4px_4px_0px_#1e3a8a]'
      } p-3 md:p-4 text-left`}
    >
      <div>
        {/* Top Badges Bar - Clashing Colors */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-gray-300">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`text-xs font-bold px-2 py-0.5 uppercase tracking-wider font-mono border ${
                event.status === 'upcoming'
                  ? 'bg-green-600 text-white border-green-800'
                  : 'bg-gray-600 text-yellow-200 border-black'
              }`}
            >
              {event.status === 'upcoming' ? '⚡ UPCOMING' : 'COMPLETED'}
            </span>

            <span className="bg-yellow-300 text-blue-900 font-extrabold text-xs px-2 py-0.5 border border-yellow-500 uppercase">
              {event.category}
            </span>

            <span className="bg-purple-100 text-purple-900 font-semibold text-[11px] px-1.5 py-0.5 border border-purple-300">
              {event.mode}
            </span>
          </div>

          {event.seatsLeft && event.status === 'upcoming' && (
            <span className="text-[11px] bg-red-100 text-red-700 font-bold px-1.5 py-0.5 border border-red-400 animate-pulse font-mono">
              Only {event.seatsLeft} seats!
            </span>
          )}
        </div>

        {/* Awkward Image Thumbnail */}
        <div className="relative mb-3 border-2 border-black overflow-hidden bg-black h-40">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover opacity-90 hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/75 text-white text-[11px] px-2 py-1 font-mono truncate">
            📍 {event.location}
          </div>
        </div>

        {/* Title - Outdated font & sizing with link to single event page */}
        <h3 className="text-lg md:text-xl font-black text-[#1e1b4b] font-serif leading-snug mb-2 hover:text-blue-700">
          <Link to={`/events/${event.id}`} className="hover:underline">
            {event.title}
          </Link>
        </h3>

        {/* Info Grid with awkward borders */}
        <div className="space-y-1 text-xs text-gray-700 mb-3 bg-white p-2 border border-gray-400 font-sans">
          <div className="flex items-center gap-1.5 text-blue-900 font-semibold">
            <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-700">
            <Clock className="w-3.5 h-3.5 text-orange-600 shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-700 truncate">
            <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
          {event.speakers && event.speakers.length > 0 && (
            <div className="flex items-center gap-1.5 text-gray-600 text-[11px] pt-1 border-t border-gray-200">
              <Users className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span className="truncate">Speakers: {event.speakers.join(', ')}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-gray-800 line-clamp-2 leading-relaxed mb-4 font-serif">
          {event.description}
        </p>
      </div>

      {/* Action Buttons: View Single Page & Quick Popup */}
      <div className="pt-2 border-t border-dashed border-gray-400 flex flex-wrap gap-2">
        <Link
          to={`/events/${event.id}`}
          className={`flex-1 py-2 px-2.5 text-xs font-bold uppercase transition-transform flex items-center justify-center gap-1 ${
            isAltStyle
              ? 'bg-[#d97706] text-white border-2 border-black hover:bg-[#b45309]'
              : 'bg-[#2563eb] text-white border-2 border-black hover:bg-[#1d4ed8]'
          } shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 text-center`}
        >
          <span>View Event Page</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <button
          type="button"
          onClick={() => onSelect(event)}
          className="bg-white hover:bg-gray-100 text-gray-900 border-2 border-black text-xs font-bold px-2.5 py-2 uppercase shadow-[2px_2px_0px_#000]"
          title="Open Quick Popup Modal"
        >
          Quick Popup
        </button>
      </div>
    </div>
  );
};
