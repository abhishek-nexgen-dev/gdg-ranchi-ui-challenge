import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Globe, Terminal, Cpu, Smartphone, Layers, HelpCircle, CheckCircle } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] text-gray-800 font-sans pb-12">
      {/* Page Header Banner - Inconsistent typography and styling */}
      <div className="bg-[#1e293b] text-white py-8 px-4 border-b-4 border-yellow-400 text-center">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="inline-block bg-yellow-400 text-black px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-wider">
            CHAPTER HISTORY &amp; CHARTER
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
        {/* Section 1: Introduction - Cluttered box style */}
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

        {/* Section 2: Mission and Vision - Clashing colored boxes */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
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

          {/* Vision */}
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

        {/* Section 3: Learning Tracks & Collaboration Activities */}
        <section className="bg-[#f1f5f9] p-6 border-2 border-gray-400">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold uppercase text-purple-700 bg-purple-100 px-2 py-0.5 border border-purple-300">
              What We Learn &amp; Build
            </span>
            <h2 className="text-2xl font-black font-serif text-gray-900 mt-1">
              Technology Tracks Covered at GDG Ranchi
            </h2>
            <p className="text-xs text-gray-600 mt-1 font-sans">
              We host hands-on labs and expert-led tech talks covering diverse technical domains:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Track 1 */}
            <div className="bg-white p-4 border border-gray-400 shadow-xs">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-1 font-mono">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>AI &amp; Machine Learning</span>
              </div>
              <p className="text-xs text-gray-600">
                Google Gemini API, Vertex AI, TensorFlow, fine-tuning large models, multimodal prompt design, and AI agents.
              </p>
            </div>

            {/* Track 2 */}
            <div className="bg-white p-4 border border-gray-400 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-1 font-mono">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Google Cloud &amp; DevOps</span>
              </div>
              <p className="text-xs text-gray-600">
                Cloud Run, Kubernetes, BigQuery, serverless architectures, Terraform, and cloud certification study groups.
              </p>
            </div>

            {/* Track 3 */}
            <div className="bg-white p-4 border border-gray-400 shadow-xs">
              <div className="flex items-center gap-2 text-sky-600 font-bold text-sm mb-1 font-mono">
                <Smartphone className="w-4 h-4 text-sky-600" />
                <span>Flutter &amp; Dart</span>
              </div>
              <p className="text-xs text-gray-600">
                Cross-platform mobile apps for Android, iOS, and Web using Flutter 3.x, Riverpod state management, and Firebase.
              </p>
            </div>

            {/* Track 4 */}
            <div className="bg-white p-4 border border-gray-400 shadow-xs">
              <div className="flex items-center gap-2 text-green-700 font-bold text-sm mb-1 font-mono">
                <Terminal className="w-4 h-4 text-green-700" />
                <span>Android Jetpack &amp; Kotlin</span>
              </div>
              <p className="text-xs text-gray-600">
                Jetpack Compose UI, Kotlin Coroutines, Clean Architecture, and Android 15 modernization patterns.
              </p>
            </div>

            {/* Track 5 */}
            <div className="bg-white p-4 border border-gray-400 shadow-xs">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-sm mb-1 font-mono">
                <Globe className="w-4 h-4 text-orange-600" />
                <span>Modern Web Technologies</span>
              </div>
              <p className="text-xs text-gray-600">
                React, TypeScript, Next.js, Core Web Vitals, PWA, WebGPU, and modern CSS frameworks.
              </p>
            </div>

            {/* Track 6 */}
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

        {/* Section 4: Why Participate in GDG Ranchi */}
        <section className="bg-[#fffbeb] p-6 border-3 border-yellow-700 shadow-[4px_4px_0px_#854d0e]">
          <h2 className="text-xl md:text-2xl font-black font-serif text-yellow-950 mb-3">
            Why Should You Participate in Our Community?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-gray-800">
            <div className="bg-white p-3 border border-yellow-300 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
              <div>
                <strong>Zero Membership Fees:</strong> All GDG Ranchi events, workshops, and study materials are 100% free of cost.
              </div>
            </div>
            <div className="bg-white p-3 border border-yellow-300 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
              <div>
                <strong>Direct Hands-On Coding:</strong> We emphasize interactive CodeLabs over long lectures. Bring your laptop and code!
              </div>
            </div>
            <div className="bg-white p-3 border border-yellow-300 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
              <div>
                <strong>Speaker Opportunities:</strong> First-time speakers are warmly encouraged with guidance from senior community mentors.
              </div>
            </div>
            <div className="bg-white p-3 border border-yellow-300 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
              <div>
                <strong>Official Google Swags:</strong> T-shirts, stickers, notebooks, and digital certificates for active participants.
              </div>
            </div>
          </div>

          <div className="mt-5 text-center flex flex-wrap justify-center gap-3">
            <Link
              to="/events"
              className="bg-green-700 hover:bg-green-800 text-white font-bold text-xs uppercase px-4 py-2 border-2 border-black"
            >
              Check Out Upcoming Events &gt;
            </Link>
            <Link
              to="/team"
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold text-xs uppercase px-4 py-2 border-2 border-black"
            >
              Meet Our Organizers &gt;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
