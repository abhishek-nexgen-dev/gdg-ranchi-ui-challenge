import React, { useState } from 'react';
import { sampleTeamMembers, sampleAlumniMembers } from '../data/team';
import { TeamCard } from '../components/TeamCard';
import { Users, Info, Sparkles, Award, UserCheck, CheckSquare, HeartHandshake } from 'lucide-react';

export const TeamPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', 'Core', 'Technical', 'Community', 'Design'];

  const filteredMembers =
    selectedDept === 'All'
      ? sampleTeamMembers
      : sampleTeamMembers.filter((m) => m.department === selectedDept);

  return (
    <div className="w-full bg-[#f3f4f6] text-gray-800 font-sans pb-12">
      {/* Header Banner */}
      <div className="bg-[#312e81] text-white py-8 px-4 border-b-4 border-yellow-400 text-center">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="inline-block bg-pink-500 text-white px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-wider">
            VOLUNTEERS &amp; TECH LEADS
          </div>
          <h1 className="text-3xl md:text-4xl font-black font-serif text-yellow-300">
            Meet The GDG Ranchi Organizing Team
          </h1>
          <p className="text-xs md:text-sm text-gray-300 font-sans max-w-2xl mx-auto">
            The passionate team of volunteers, developers, and educators organizing monthly meetups, hackathons, and technical workshops in Jharkhand.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6 space-y-8">
        {/* Fictional Data Disclaimer Alert */}
        <div className="bg-[#fefce8] border-2 border-yellow-600 p-3 text-xs text-yellow-900 flex items-start gap-2 shadow-[2px_2px_0px_#ca8a04]">
          <Info className="w-4 h-4 text-yellow-700 shrink-0 mt-0.5" />
          <div>
            <strong>Notice for UI Makeover Challenge Participants:</strong> All team member profiles, bios, photos, and social links on this page are <strong>fictional demonstration placeholders</strong> created specifically for this makeover starter project.
          </div>
        </div>

        {/* Filter Bar with Inconsistent Old-School Buttons */}
        <div className="bg-white p-3 border-2 border-black flex flex-wrap items-center justify-between gap-3 shadow-[3px_3px_0px_#000]">
          <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-gray-700 uppercase">
            <Users className="w-4 h-4 text-blue-700" />
            <span>Filter By Department:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`text-xs px-3 py-1 font-bold uppercase border-2 transition-all ${
                  selectedDept === dept
                    ? 'bg-yellow-400 text-black border-black font-black shadow-[2px_2px_0px_#000]'
                    : 'bg-gray-100 text-gray-700 border-gray-400 hover:bg-gray-200'
                }`}
              >
                {dept} ({dept === 'All' ? sampleTeamMembers.length : sampleTeamMembers.filter(m => m.department === dept).length})
              </button>
            ))}
          </div>
        </div>

        {/* Team Members Grid - Inconsistent styling applied via TeamCard */}
        <div>
          <div className="mb-3 flex items-center justify-between border-b-2 border-black pb-1">
            <h2 className="text-xl font-black font-serif text-gray-900">
              Active Organizing Council (2025 - 2026)
            </h2>
            <span className="text-xs font-mono text-gray-600">
              {filteredMembers.length} Leaders Listed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Community Alumni & Hall of Fame Section */}
        <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_#000] space-y-4">
          <div className="flex items-center gap-2 border-b-2 border-yellow-500 pb-2">
            <Award className="w-5 h-5 text-yellow-600 shrink-0" />
            <h2 className="text-xl font-black font-serif text-gray-900">
              Community Alumni &amp; Hall of Fame
            </h2>
          </div>
          <p className="text-xs text-gray-600">
            Honoring past organizers who founded and nurtured the GDG Ranchi chapter during 2018–2023 before transitioning into advisory roles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sampleAlumniMembers.map((alumni, idx) => (
              <div
                key={alumni.id}
                className="bg-[#f8fafc] border-2 border-gray-400 p-4 flex items-center gap-4 shadow-xs"
              >
                <img
                  src={alumni.photo}
                  alt={alumni.name}
                  className="w-16 h-16 rounded-full border-2 border-black object-cover shrink-0"
                />
                <div className="text-xs space-y-0.5">
                  <span className="text-[10px] bg-yellow-200 text-yellow-900 font-mono px-1 border border-yellow-400 font-bold">
                    PAST LEAD
                  </span>
                  <div className="font-bold text-sm text-gray-900 font-serif">
                    {alumni.name}
                  </div>
                  <div className="text-gray-700 font-mono text-[11px]">
                    {alumni.role}
                  </div>
                  <p className="text-gray-600 text-[11px] leading-snug">
                    {alumni.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Become an Organizer / Volunteer Section */}
        <div className="bg-[#fffbeb] p-6 border-3 border-yellow-700 shadow-[4px_4px_0px_#854d0e] space-y-4">
          <div className="flex items-center gap-2 text-yellow-900 font-bold border-b border-yellow-300 pb-2">
            <HeartHandshake className="w-5 h-5 text-yellow-800" />
            <h2 className="text-xl font-black font-serif">
              How to Volunteer or Join the GDG Ranchi Core Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-800">
            <div className="bg-white p-3 border border-yellow-400 space-y-1">
              <div className="font-mono font-bold text-blue-900 flex items-center gap-1">
                <CheckSquare className="w-4 h-4 text-blue-700" /> 1. Attend Meetups
              </div>
              <p className="text-gray-600">
                Be an active attendee at 2 or more GDG Ranchi meetups and introduce yourself to the organizers.
              </p>
            </div>

            <div className="bg-white p-3 border border-yellow-400 space-y-1">
              <div className="font-mono font-bold text-green-900 flex items-center gap-1">
                <CheckSquare className="w-4 h-4 text-green-700" /> 2. Volunteer at DevFest
              </div>
              <p className="text-gray-600">
                Help during our annual flagship conference with registrations, photography, audio/visuals, or speaker coordination.
              </p>
            </div>

            <div className="bg-white p-3 border border-yellow-400 space-y-1">
              <div className="font-mono font-bold text-purple-900 flex items-center gap-1">
                <CheckSquare className="w-4 h-4 text-purple-700" /> 3. Lead a Technology Track
              </div>
              <p className="text-gray-600">
                Host study jams or deliver CodeLabs in your area of expertise (Android, Flutter, Cloud, or AI/ML).
              </p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <a
              href="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-xs px-5 py-2.5 border-2 border-black shadow-[3px_3px_0px_#000]"
            >
              Submit Volunteer Application &gt;&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
