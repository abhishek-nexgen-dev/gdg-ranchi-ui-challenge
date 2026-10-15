import React, { useState } from 'react';
import { sampleTeamMembers } from '../data/team';
import { TeamCard } from '../components/TeamCard';
import { Users, Info, Sparkles } from 'lucide-react';

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

      <div className="max-w-6xl mx-auto px-4 mt-6 space-y-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Callout box for community volunteering */}
        <div className="bg-[#1e1b4b] text-yellow-300 p-6 border-4 border-yellow-400 text-center space-y-3 mt-8">
          <div className="flex justify-center">
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
          <h3 className="text-xl font-bold font-serif">
            Want to Join the GDG Ranchi Organizing Team?
          </h3>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto font-sans">
            We open volunteer applications twice every year for tech enthusiasts who want to contribute in event operations, social media, photography, speaker outreach, and web development.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-xs px-5 py-2.5 border-2 border-black shadow-[3px_3px_0px_#fff]"
            >
              Apply as a Volunteer &gt;&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
