import React, { useState } from 'react';
import { sampleGallery } from '../data/communityData';
import { GalleryPhoto } from '../types';
import { Camera, Filter, X, ZoomIn, Heart, Share2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GalleryPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [filterEvent, setFilterEvent] = useState<string>('All');

  const eventCategories = [
    'All',
    'DevFest Ranchi',
    'Cloud Study Jam',
    'WTM Ranchi',
    'Build with AI',
    'Flutter Forward',
    'Google I/O Extended'
  ];

  const filteredPhotos =
    filterEvent === 'All'
      ? sampleGallery
      : sampleGallery.filter((p) => p.eventName === filterEvent);

  return (
    <div className="w-full bg-[#f8fafc] text-gray-800 font-sans pb-12">
      {/* Header Banner */}
      <div className="bg-[#0f172a] text-white py-8 px-4 border-b-4 border-yellow-400 text-center">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="inline-block bg-yellow-400 text-black px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-wider">
            OFFICIAL PHOTO ARCHIVE &amp; MEMORIES
          </div>
          <h1 className="text-3xl md:text-4xl font-black font-serif text-yellow-300">
            GDG Ranchi Meetup Gallery
          </h1>
          <p className="text-xs md:text-sm text-gray-300 font-sans max-w-2xl mx-auto">
            Glimpses of code, connection, keynotes, swag distributions, and hackathons from our developer community gatherings in Ranchi, Jharkhand.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6 space-y-6">
        {/* Filter Bar */}
        <div className="bg-white p-3 border-2 border-black flex flex-wrap items-center justify-between gap-3 shadow-[3px_3px_0px_#000]">
          <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-gray-700 uppercase">
            <Filter className="w-4 h-4 text-blue-700" />
            <span>Filter By Event Session:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {eventCategories.map((evt) => (
              <button
                key={evt}
                onClick={() => setFilterEvent(evt)}
                className={`text-xs px-3 py-1 font-bold uppercase border-2 transition-all ${
                  filterEvent === evt
                    ? 'bg-yellow-400 text-black border-black font-black shadow-[2px_2px_0px_#000]'
                    : 'bg-gray-100 text-gray-700 border-gray-400 hover:bg-gray-200'
                }`}
              >
                {evt}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with Outdated Polaroid / Bevel Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer bg-white p-3 border-3 border-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden border-2 border-gray-800 mb-2 bg-gray-900">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="bg-yellow-400 text-black text-xs font-bold font-mono px-2 py-1 border border-black flex items-center gap-1">
                      <ZoomIn className="w-3.5 h-3.5" /> Enlarge Photo
                    </span>
                  </div>
                  <div className="absolute top-2 left-2 bg-[#b91c1c] text-white text-[10px] font-mono px-1.5 py-0.5 uppercase font-bold border border-white">
                    {photo.eventName}
                  </div>
                </div>

                <h3 className="text-sm font-black text-gray-900 font-serif leading-tight">
                  {photo.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-snug line-clamp-2">
                  {photo.caption}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-dashed border-gray-400 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>Memory #{idx + 1}</span>
                <span className="text-blue-700 font-bold underline">Click To Open</span>
              </div>
            </div>
          ))}
        </div>

        {/* Community Photo Contribution Box */}
        <div className="bg-[#fef9c3] p-6 border-3 border-yellow-800 shadow-[4px_4px_0px_#713f12] text-center space-y-2">
          <div className="flex justify-center">
            <Camera className="w-6 h-6 text-yellow-800" />
          </div>
          <h3 className="text-lg font-black font-serif text-yellow-950">
            Have High-Res Photos From Our Past Meetups?
          </h3>
          <p className="text-xs text-yellow-900 max-w-xl mx-auto">
            We love featuring attendee photos and vlogs on our community archive! Share them with our social media volunteers or send a drive link through the contact page.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-xs uppercase px-5 py-2 border-2 border-black"
            >
              Submit Photo Drive Link &gt;
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white border-4 border-black shadow-[8px_8px_0px_#000] p-4 text-left space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-black pb-2 bg-[#1e293b] text-yellow-300 p-2">
              <span className="font-mono text-xs font-bold uppercase truncate">
                📷 PHOTO_VIEWER.EXE - {selectedPhoto.eventName}
              </span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="bg-red-600 hover:bg-red-700 text-white px-2 py-0.5 text-xs font-bold border border-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[65vh] overflow-hidden border-2 border-black bg-black">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 border border-black font-mono">
                  {selectedPhoto.eventName}
                </span>
                <h3 className="text-base font-bold text-gray-900 font-serif">
                  {selectedPhoto.title}
                </h3>
              </div>
              <p className="text-xs text-gray-700 font-sans">
                {selectedPhoto.caption}
              </p>
            </div>

            <div className="pt-2 border-t border-gray-300 flex justify-end">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="bg-black text-white text-xs font-bold uppercase px-4 py-1.5 border border-black"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
