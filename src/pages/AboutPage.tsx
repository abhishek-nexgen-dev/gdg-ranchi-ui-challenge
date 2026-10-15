import React from 'react';
import { Link } from 'react-router-dom';
import { sampleTimeline, samplePartnerCampuses } from '../data/communityData';
import {
  Target,
  Eye,
  Globe,
  Terminal,
  Cpu,
  Smartphone,
  Layers,
  HelpCircle,
  CheckCircle,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Heart
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] text-gray-800 font-sans pb-12">
      {/* Page Header Banner */}
      <div className="bg-[#1e293b] text-white py-8 px-4 border-b-4 border-yellow-400 text-center">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="inline-block bg-yellow-400 text-black px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-wider">
            CHAPTER CHARTER &amp; HISTORY
          </div>
          <h1 className="text-3xl md:text-4xl font-black font-serif text-yellow-300">
            About Google Developer Group (GDG) Ranchi
          </h1>
          <p className="text-xs md:text-sm text-gray-300 font-sans max-w-2xl mx-auto">
            Empowering the developer ecosystem in Ranchi, Jharkhand with open access to Google technology, technical workshops, and global developer networks.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8 space-y-8">
        {/* Section 1: Introduction */}
        <section className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_#000]">
          <div className="flex items-center gap-2 border-b-2 border-red-600 pb-2 mb-3">
            <Globe className="w-5 h-5 text-red-600 shrink-0" />
            <h2 className="text-xl md:text-2xl font-black font-serif text-gray-900">
              Who We Are &amp; Our History
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm leading-relaxed text-gray-700 font-sans">
            <p>
              Google Developer Group Ranchi (GDG Ranchi) was founded in 2018 by local engineers, tech educators, and college students who recognized the need for a collaborative developer platform in Jharkhand.
            </p>
            <p>
              Before the chapter was created, developers in Ranchi often had to travel to Kolkata, Bangalore, or Delhi to attend major developer conferences. GDG Ranchi bridged this gap by bringing official Google-backed events like <strong>DevFest</strong>, <strong>Google I/O Extended</strong>, <strong>Build with AI</strong>, and <strong>Android Study Jams</strong> directly to the heart of Ranchi.
            </p>
            <div className="bg-[#fefce8] p-3 border-l-4 border-yellow-500 text-xs italic font-serif text-yellow-900">
              "Our philosophy is simple: technology education should be accessible, free, and community-driven. No barriers, no elitism."
            </div>
          </div>
        </section>

        {/* Section 2: Mission and Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#eff6ff] p-5 border-3 border-blue-800 shadow-[3px_3px_0px_#1e40af]">
            <div className="flex items-center gap-2 mb-2 text-blue-900 font-mono font-bold">
              <Target className="w-5 h-5 text-blue-700" />
              <h3 className="text-lg font-black font-serif">Our Core Mission</h3>
            </div>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-sans">
              To build a collaborative, inclusive environment where passionate programmers, developers, and designers can learn and build solutions using Google developer tools, open source technology, and modern software engineering practices.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-blue-950 font-mono">
              <li>✔ Organize free monthly technical meetups</li>
              <li>✔ Provide hands-on cloud labs &amp; mentorship</li>
              <li>✔ Connect students with industry professionals</li>
            </ul>
          </div>

          <div className="bg-[#fdf2f8] p-5 border-3 border-pink-800 shadow-[3px_3px_0px_#9d174d]">
            <div className="flex items-center gap-2 mb-2 text-pink-900 font-mono font-bold">
              <Eye className="w-5 h-5 text-pink-700" />
              <h3 className="text-lg font-black font-serif">Our 2026 Vision</h3>
            </div>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-sans">
              To establish Ranchi as a prominent technology hub in Eastern India, nurturing homegrown tech startups, fostering open-source contributors, and helping developers transition from consumers of technology to creators of global digital solutions.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-pink-950 font-mono">
              <li>✔ 5,000+ active developers upskilled</li>
              <li>✔ Support for Women Techmakers (WTM) in STEM</li>
              <li>✔ Foster open-source contributions from Jharkhand</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Chapter Timeline / Journey */}
        <section className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_#000]">
          <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-4">
            <h2 className="text-xl md:text-2xl font-black font-serif text-gray-900">
              📜 GDG Ranchi Journey &amp; Milestones (2018 - 2026)
            </h2>
            <span className="text-xs font-mono bg-yellow-400 text-black px-2 py-0.5 font-bold uppercase">
              CHAPTER CHRONICLE
            </span>
          </div>

          <div className="space-y-4">
            {sampleTimeline.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-3 p-3 bg-[#f8fafc] border border-gray-400"
              >
                <div className="w-24 shrink-0 font-mono font-bold text-sm bg-[#1e293b] text-yellow-300 px-2 py-1 text-center border border-black">
                  {item.year}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-gray-900 font-serif">
                      {item.title}
                    </h4>
                    <span className="text-[10px] bg-red-100 text-red-800 font-mono px-1.5 py-0.2 border border-red-300">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Women Techmakers (WTM) Spotlight */}
        <section className="bg-gradient-to-r from-[#831843] to-[#be185d] text-white p-6 border-4 border-yellow-300 shadow-[5px_5px_0px_#000] space-y-3">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-pink-300 fill-pink-300" />
            <h2 className="text-xl md:text-2xl font-black font-serif">
              Women Techmakers (WTM) Ranchi Chapter
            </h2>
          </div>
          <p className="text-xs md:text-sm text-pink-100 leading-relaxed font-sans">
            Google’s Women Techmakers program provides visibility, community, and resources for women in technology. WTM Ranchi organizes dedicated mentorship programs, panel talks with female engineering leaders, and the annual International Women's Day (IWD) summit.
          </p>
          <div className="bg-black/30 p-3 border border-pink-300 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span>
              ★ All tech meetups are open to everyone, with special diversity scholarships and speaker tracks for women in tech.
            </span>
            <Link
              to="/team"
              className="bg-yellow-400 text-black font-black uppercase text-xs px-3 py-1.5 border border-black hover:bg-yellow-300"
            >
              Meet WTM Ambassadors &gt;
            </Link>
          </div>
        </section>

        {/* Section 5: Learning Tracks */}
        <section className="bg-[#f1f5f9] p-6 border-2 border-gray-400">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold uppercase text-purple-700 bg-purple-100 px-2 py-0.5 border border-purple-300">
              What We Learn &amp; Build
            </span>
            <h2 className="text-2xl font-black font-serif text-gray-900 mt-1">
              Technology Tracks Covered at GDG Ranchi
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 border border-gray-400 shadow-xs">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-1 font-mono">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>AI &amp; Machine Learning</span>
              </div>
              <p className="text-xs text-gray-600">
                Google Gemini API, Vertex AI, TensorFlow, fine-tuning large models, multimodal prompt design, and AI agents.
              </p>
            </div>

            <div className="bg-white p-4 border border-gray-400 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-1 font-mono">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Google Cloud &amp; DevOps</span>
              </div>
              <p className="text-xs text-gray-600">
                Cloud Run, Kubernetes, BigQuery, serverless architectures, Terraform, and cloud certification study groups.
              </p>
            </div>

            <div className="bg-white p-4 border border-gray-400 shadow-xs">
              <div className="flex items-center gap-2 text-sky-600 font-bold text-sm mb-1 font-mono">
                <Smartphone className="w-4 h-4 text-sky-600" />
                <span>Flutter &amp; Dart</span>
              </div>
              <p className="text-xs text-gray-600">
                Cross-platform mobile apps for Android, iOS, and Web using Flutter 3.x, Riverpod state management, and Firebase.
              </p>
            </div>

            <div className="bg-white p-4 border border-gray-400 shadow-xs">
              <div className="flex items-center gap-2 text-green-700 font-bold text-sm mb-1 font-mono">
                <Terminal className="w-4 h-4 text-green-700" />
                <span>Android Jetpack &amp; Kotlin</span>
              </div>
              <p className="text-xs text-gray-600">
                Jetpack Compose UI, Kotlin Coroutines, Clean Architecture, and Android 15 modernization patterns.
              </p>
            </div>

            <div className="bg-white p-4 border border-gray-400 shadow-xs">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-sm mb-1 font-mono">
                <Globe className="w-4 h-4 text-orange-600" />
                <span>Modern Web Technologies</span>
              </div>
              <p className="text-xs text-gray-600">
                React, TypeScript, Next.js, Core Web Vitals, PWA, WebGPU, and modern CSS frameworks.
              </p>
            </div>

            <div className="bg-white p-4 border border-gray-400 shadow-xs">
              <div className="flex items-center gap-2 text-purple-700 font-bold text-sm mb-1 font-mono">
                <HelpCircle className="w-4 h-4 text-purple-700" />
                <span>Career &amp; Open Source</span>
              </div>
              <p className="text-xs text-gray-600">
                Resume reviews, technical interview preparations, contributing to GitHub open-source, and public speaking mentorship.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Campus Outreach & University Partners */}
        <section className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_#000]">
          <div className="flex items-center gap-2 border-b-2 border-blue-600 pb-2 mb-3">
            <GraduationCap className="w-5 h-5 text-blue-600 shrink-0" />
            <h2 className="text-xl md:text-2xl font-black font-serif text-gray-900">
              Campus Outreach Network (Colleges in Ranchi)
            </h2>
          </div>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
            We partner actively with student developer clubs (GDSC / campus clubs) across premier universities in Ranchi to host hackathons, study jams, and campus tech festivals:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {samplePartnerCampuses.map((campus, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] p-3 border border-gray-400 text-xs space-y-1"
              >
                <div className="font-bold text-gray-900 font-sans">{campus.name}</div>
                <div className="text-[11px] text-gray-600 font-mono">
                  {campus.type} • {campus.city}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Community Code of Conduct */}
        <section className="bg-[#fff7ed] p-6 border-3 border-orange-600 shadow-[4px_4px_0px_#c2410c]">
          <div className="flex items-center gap-2 mb-2 text-orange-950 font-bold">
            <ShieldCheck className="w-5 h-5 text-orange-700" />
            <h2 className="text-lg md:text-xl font-black font-serif">
              GDG Ranchi Code of Conduct &amp; Community Values
            </h2>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">
            GDG Ranchi is dedicated to providing a harassment-free and welcoming event experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, race, ethnicity, or religion.
          </p>
          <ul className="space-y-1.5 text-xs text-orange-950 font-mono">
            <li>• Be respectful and inclusive of differing viewpoints and experiences.</li>
            <li>• Gracefully accept constructive criticism.</li>
            <li>• Focus on what is best for the overall developer community.</li>
            <li>• Zero tolerance for harassment or inappropriate conduct at our venues or online channels.</li>
          </ul>
        </section>

        {/* Final CTA */}
        <div className="text-center pt-4">
          <Link
            to="/events"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-xs px-6 py-3 border-2 border-black shadow-[3px_3px_0px_#000]"
          >
            Check Out Upcoming Events &gt;&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};
