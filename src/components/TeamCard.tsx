import React from 'react';
import { TeamMember } from '../types';
import { ExternalLink, Tag } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  // Purposefully vary layout: alternating between centered boxy layout and left-aligned bordered layout
  const isCentered = index % 2 === 0;

  return (
    <div
      className={`border-3 p-4 flex flex-col justify-between transition-all ${
        isCentered
          ? 'bg-[#f8fafc] border-indigo-900 shadow-[4px_4px_0px_#312e81] text-center'
          : 'bg-[#fefce8] border-yellow-700 shadow-[3px_3px_0px_#854d0e] text-left'
      }`}
    >
      <div>
        {/* Fictional badge */}
        <div className="mb-2 flex items-center justify-between text-[10px] font-mono border-b pb-1">
          <span className="bg-gray-200 text-gray-700 px-1.5 py-0.5 border border-gray-400">
            Fictional Profile
          </span>
          <span className="bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 border border-blue-300">
            {member.department} Team
          </span>
        </div>

        {/* Photo Container with inconsistent styles */}
        <div
          className={`mb-3 ${
            isCentered ? 'flex justify-center' : 'flex justify-start'
          }`}
        >
          <div
            className={`overflow-hidden border-2 border-black ${
              isCentered
                ? 'w-28 h-28 rounded-full border-4 border-yellow-400 shadow-md'
                : 'w-24 h-24 rounded-none border-2 border-gray-800 shadow-[2px_2px_0px_#000]'
            }`}
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Member Name */}
        <h3 className="text-lg font-black text-gray-900 font-serif leading-tight">
          {member.name}
        </h3>

        {/* Role */}
        <div className="inline-block mt-1 mb-2 bg-[#1e293b] text-yellow-300 text-xs font-mono font-bold px-2 py-0.5 border border-black">
          {member.role}
        </div>

        {/* Bio */}
        <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">
          {member.bio}
        </p>

        {/* Skills Tag Cloud */}
        <div className="mb-3 pt-2 border-t border-gray-300">
          <div className="text-[11px] font-bold text-gray-500 uppercase flex items-center gap-1 mb-1">
            <Tag className="w-3 h-3" /> Focus Areas:
          </div>
          <div className="flex flex-wrap gap-1">
            {member.skills.map((skill, i) => (
              <span
                key={i}
                className="text-[10px] bg-white text-gray-800 px-1.5 py-0.5 border border-gray-400 font-mono"
              >
                [{skill}]
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-2 border-t-2 border-dotted border-gray-400 flex items-center justify-center gap-2 text-xs">
        {member.socialLinks.linkedin && (
          <a
            href={member.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 hover:text-blue-900 hover:underline font-bold flex items-center gap-0.5"
          >
            LinkedIn <ExternalLink className="w-3 h-3" />
          </a>
        )}
        {member.socialLinks.github && (
          <a
            href={member.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 hover:text-black hover:underline font-bold flex items-center gap-0.5"
          >
            GitHub <ExternalLink className="w-3 h-3" />
          </a>
        )}
        {member.socialLinks.twitter && (
          <a
            href={member.socialLinks.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 hover:text-sky-800 hover:underline font-bold flex items-center gap-0.5"
          >
            Twitter <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};
