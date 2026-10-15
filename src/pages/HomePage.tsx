import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sampleEvents } from '../data/events';
import {
  sampleWhatWeDo,
  sampleSponsors,
  sampleTestimonials,
  sampleFAQs,
  sampleGallery
} from '../data/communityData';
import { sampleTeamMembers } from '../data/team';
import { EventItem, GalleryPhoto } from '../types';
import { EventCard } from '../components/EventCard';
import { EventModal } from '../components/EventModal';
import {
  AlertTriangle,
  Users,
  Award,
  Code,
  Compass,
  ArrowRight,
  Zap,
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle,
  ExternalLink,
  Flame,
  Radio,
  Camera,
  HeartHandshake,
  Calendar,
  CheckSquare,
  Sparkles,
  X
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<GalleryPhoto | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  // Countdown timer state for DevFest / Next Big Summit
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 14,
    minutes: 35,
    seconds: 40
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address!');
      return;
    }
    setNewsletterError('');
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  // Distinct Upcoming and Past events (as explicitly requested: no generic "featured" section)
  const upcomingEvents = sampleEvents.filter((e) => e.status === 'upcoming');
  const pastEvents = sampleEvents.filter((e) => e.status === 'past').slice(0, 3);

  // Key organizers to display on Home
  const featuredOrganizers = sampleTeamMembers.slice(0, 4);

  // Duplicate gallery array for continuous seamless left-to-right scrolling
  const scrollingPhotos = [...sampleGallery, ...sampleGallery];

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="w-full bg-[#f1f5f9] text-gray-800 font-sans">
      {/* Top Challenge Alert Ribbon */}
      <div className="bg-[#fef08a] border-b-2 border-dashed border-[#854d0e] p-2 text-center text-xs md:text-sm font-mono text-[#713f12] flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 text-orange-600 shrink-0" />
        <span>
          <strong>UI MAKEOVER CHALLENGE:</strong> Redesign this website using Gemini CLI in 5–10 mins! Keep logic intact.
        </span>
      </div>

      {/* Marquee Ticker - Classic Old Web Style */}
      <div className="bg-[#000080] text-yellow-300 py-1.5 px-4 text-xs font-mono border-b-2 border-black flex items-center justify-between overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-2 animate-pulse">
          <Radio className="w-3.5 h-3.5 text-red-400" />
          <span className="font-bold uppercase tracking-wider">
            ★ LATEST FLASH: DevFest Ranchi 2025 Call for Speakers is now OPEN! • Next Meetup: Build with AI Summit • Free Cloud Credits available for students! ★
          </span>
        </div>
        <span className="hidden lg:inline text-[11px] bg-red-600 text-white px-2 py-0.5 font-bold uppercase ml-4">
          LIVE TICKER
        </span>
      </div>

      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#172554] to-[#1e3a8a] text-white py-10 px-4 border-b-4 border-yellow-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Hero Column */}
          <div className="w-full md:w-3/5 space-y-4 text-center md:text-left">
            <div className="inline-block bg-red-600 text-yellow-300 px-3 py-1 text-xs font-mono font-black uppercase tracking-widest border-2 border-yellow-300 rotate-[-1deg] shadow-[3px_3px_0px_#000]">
              ★★★ OFFICIAL CHAPTER PORTAL • JHARKHAND ★★★
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight leading-tight text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Welcome To <span className="text-[#60a5fa] underline decoration-yellow-400">GDG Ranchi</span> Developer Community!
            </h1>

            <p className="text-sm md:text-base text-gray-200 font-sans leading-relaxed bg-[#0f172a]/70 p-3 border-l-4 border-yellow-400">
              Google Developer Groups (GDG) Ranchi is an inclusive group of local programmers, students, university researchers, and industry tech leaders interested in Google’s developer technologies and open-source stacks.
            </p>

            {/* Clashing CTA Buttons */}
            <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#upcoming-events"
                className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-black uppercase text-sm px-5 py-3 border-3 border-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none flex items-center gap-2"
              >
                <span>🔥 Jump to Upcoming Events</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/about"
                className="bg-[#eab308] hover:bg-[#ca8a04] text-black font-bold uppercase text-sm px-4 py-3 border-2 border-white shadow-[3px_3px_0px_#fff]"
              >
                About Our Chapter &gt;&gt;
              </Link>

              <Link
                to="/contact"
                className="bg-purple-700 hover:bg-purple-800 text-white font-mono text-xs px-3 py-3 border border-purple-300"
              >
                Become A Speaker 🎤
              </Link>
            </div>
          </div>

          {/* Right Hero Graphic / Countdown Board */}
          <div className="w-full md:w-2/5">
            <div className="bg-[#fffbeb] border-4 border-black p-4 text-black shadow-[6px_6px_0px_#000] space-y-3">
              <div className="bg-[#1e293b] text-yellow-300 px-3 py-1 font-mono text-xs font-bold uppercase flex justify-between items-center">
                <span>⚡ FLAGSHIP SUMMIT COUNTDOWN</span>
                <span className="text-red-400 animate-ping">●</span>
              </div>

              {/* Retro Digital Countdown Timer */}
              <div className="bg-black p-3 text-center border-2 border-gray-600">
                <div className="text-[10px] text-green-400 font-mono uppercase mb-1">
                  Build with AI: Gemini &amp; Cloud Summit
                </div>
                <div className="grid grid-cols-4 gap-1 text-center font-mono text-yellow-400 font-bold">
                  <div className="bg-gray-900 p-1 border border-gray-700">
                    <span className="text-xl block">{timeLeft.days}</span>
                    <span className="text-[9px] text-gray-400">DAYS</span>
                  </div>
                  <div className="bg-gray-900 p-1 border border-gray-700">
                    <span className="text-xl block">{timeLeft.hours}</span>
                    <span className="text-[9px] text-gray-400">HOURS</span>
                  </div>
                  <div className="bg-gray-900 p-1 border border-gray-700">
                    <span className="text-xl block">{timeLeft.minutes}</span>
                    <span className="text-[9px] text-gray-400">MINS</span>
                  </div>
                  <div className="bg-gray-900 p-1 border border-gray-700">
                    <span className="text-xl block">{timeLeft.seconds}</span>
                    <span className="text-[9px] text-gray-400">SECS</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-300 p-2 text-xs text-blue-900 space-y-1">
                <div className="font-bold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-blue-700" />
                  <span>Free Membership for All!</span>
                </div>
                <p className="text-[11px] text-gray-600">
                  No membership fee. Join our community to attend meetups, receive study credits, and build projects.
                </p>
              </div>

              <div className="text-center pt-1">
                <span className="text-[10px] text-gray-500 font-mono">
                  [GDG Ranchi Chapter Code: IN-RAN-01]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED ABOUT SECTION ON HOME */}
      <section className="py-10 px-4 bg-white border-b-2 border-gray-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-[#fefce8] p-6 border-3 border-yellow-800 shadow-[4px_4px_0px_#854d0e] space-y-3">
            <span className="bg-yellow-400 text-black px-2 py-0.5 text-xs font-mono font-bold uppercase border border-black">
              CHAPTER OVERVIEW &amp; STORY
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-serif text-yellow-950">
              About GDG Ranchi Chapter
            </h2>
            <p className="text-xs md:text-sm text-gray-800 leading-relaxed font-sans">
              Google Developer Group Ranchi (GDG Ranchi) is an independent community established in 2018 in Ranchi, Jharkhand. We exist to provide aspiring engineers, college students, and professional software developers direct access to Google technologies, mentorship, and industry networks.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed font-sans">
              From our very first meetup with 35 students at Aryabhatta Auditorium to hosting over 450 developers at DevFest Ranchi 2024, our community has grown into the leading tech hub of Jharkhand.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <Link
                to="/about"
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-xs uppercase px-4 py-2 border-2 border-black"
              >
                Read Full Mission &amp; History &gt;
              </Link>
              <Link
                to="/team"
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold text-xs uppercase px-4 py-2 border-2 border-black"
              >
                Meet Our Organizers &gt;
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#eff6ff] p-4 border-2 border-blue-800 shadow-[3px_3px_0px_#1e40af] space-y-2">
              <h3 className="text-base font-bold text-blue-900 font-serif flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Community Values &amp; Philosophy
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li className="flex items-start gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>100% Free Knowledge:</strong> Zero tuition or ticket charges for our workshops.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Code-First Learning:</strong> We favor hands-on interactive labs over theoretical slides.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Inclusive Community:</strong> Welcoming beginners, women in tech, and seasoned devs alike.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f0fdf4] p-4 border-2 border-green-800 shadow-[3px_3px_0px_#166534] space-y-1 text-xs text-green-950">
              <div className="font-bold font-mono uppercase text-green-800">
                🌱 Rooted in Jharkhand
              </div>
              <p className="text-gray-700">
                Active campus collaborations with BIT Mesra, Ranchi University, NIFFT Hatia, St. Xavier’s College, and local software incubators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "WHAT WE DO" SECTION */}
      <section className="py-10 px-4 bg-[#f8fafc] border-b-2 border-gray-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold uppercase text-purple-700 bg-purple-100 px-2 py-0.5 border border-purple-300">
              COMMUNITY ACTIVITIES
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-serif text-gray-900 mt-1">
              What We Do at GDG Ranchi
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto mt-1">
              Explore how we empower developers through year-round programming, conferences, and collaborative coding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleWhatWeDo.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 border-3 border-black shadow-[4px_4px_0px_#000] flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-[11px] font-mono font-bold text-blue-700 uppercase">
                    {item.subtitle}
                  </div>
                  <h3 className="text-lg font-black font-serif text-gray-900 mt-0.5 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-dashed border-gray-300">
                  <ul className="space-y-1 text-[11px] text-gray-600 font-mono">
                    {item.bulletPoints.map((pt, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <span className="text-green-600">✔</span> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "WHAT DEVELOPERS LEARN AT GDG RANCHI" */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-xs font-mono font-bold uppercase text-blue-700 bg-blue-100 px-2 py-0.5 border border-blue-300">
            TECHNICAL TRACKS
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-serif text-gray-900 mt-1">
            What Developers Learn At GDG Ranchi
          </h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto mt-1">
            Hands-on workshops, code-alongs, and study tracks powered by official Google curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#eff6ff] p-4 border-2 border-blue-900 shadow-[3px_3px_0px_#1e3a8a]">
            <div className="font-mono font-bold text-blue-900 text-sm mb-1 uppercase">
              🤖 Artificial Intelligence &amp; Gemini
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">
              Google Gemini 2.0 API, prompt engineering, multimodal reasoning, and building autonomous agentic workflows on Vertex AI.
            </p>
          </div>

          <div className="bg-[#ecfdf5] p-4 border-2 border-emerald-900 shadow-[3px_3px_0px_#065f46]">
            <div className="font-mono font-bold text-emerald-900 text-sm mb-1 uppercase">
              ☁️ Google Cloud Platform &amp; DevOps
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">
              Google Kubernetes Engine (GKE), serverless Cloud Run microservices, BigQuery analytics, and certification study jams.
            </p>
          </div>

          <div className="bg-[#fefce8] p-4 border-2 border-yellow-800 shadow-[3px_3px_0px_#854d0e]">
            <div className="font-mono font-bold text-yellow-900 text-sm mb-1 uppercase">
              📱 Flutter &amp; Multiplatform Mobile
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">
              Cross-platform apps for Android, iOS, web, and desktop from a single Dart codebase with Riverpod and Firebase.
            </p>
          </div>

          <div className="bg-[#f5f3ff] p-4 border-2 border-purple-900 shadow-[3px_3px_0px_#581c87]">
            <div className="font-mono font-bold text-purple-900 text-sm mb-1 uppercase">
              ⚡ Modern Android &amp; Jetpack Compose
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">
              Declarative UI with Compose, Kotlin Coroutines, reactive architecture, and modern Android 15 enhancements.
            </p>
          </div>

          <div className="bg-[#fff7ed] p-4 border-2 border-orange-800 shadow-[3px_3px_0px_#9a3412]">
            <div className="font-mono font-bold text-orange-900 text-sm mb-1 uppercase">
              🌐 Web Performance &amp; Modern CSS
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">
              Core Web Vitals, Progressive Web Apps (PWA), React 19, TypeScript, and modern responsive layouts.
            </p>
          </div>

          <div className="bg-[#fdf2f8] p-4 border-2 border-pink-900 shadow-[3px_3px_0px_#831843]">
            <div className="font-mono font-bold text-pink-900 text-sm mb-1 uppercase">
              👩‍💻 Women Techmakers (WTM) Ranchi
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">
              Visibility, community, and resources for women in technology through dedicated mentorship cohorts and IWD celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CHAPTER IMPACT NUMBERS (STATS) */}
      <section className="py-6 px-4 bg-[#e2e8f0] border-y-2 border-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-3">
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-gray-600">
              📊 CHAPTER ANALYTICS &amp; COMMUNITY STATS
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
            <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
              <Users className="w-5 h-5 mx-auto text-blue-600 mb-1" />
              <div className="text-2xl font-black text-gray-900 font-serif">1,450+</div>
              <div className="text-xs font-bold text-gray-600 font-mono">Community Members</div>
            </div>

            <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
              <Code className="w-5 h-5 mx-auto text-green-600 mb-1" />
              <div className="text-2xl font-black text-gray-900 font-serif">48+</div>
              <div className="text-xs font-bold text-gray-600 font-mono">Meetups &amp; Labs</div>
            </div>

            <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
              <Award className="w-5 h-5 mx-auto text-yellow-600 mb-1" />
              <div className="text-2xl font-black text-gray-900 font-serif">600+</div>
              <div className="text-xs font-bold text-gray-600 font-mono">Cloud Badges</div>
            </div>

            <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
              <Flame className="w-5 h-5 mx-auto text-red-600 mb-1" />
              <div className="text-2xl font-black text-gray-900 font-serif">850+</div>
              <div className="text-xs font-bold text-gray-600 font-mono">Pizzas Consumed</div>
            </div>

            <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000] col-span-2 md:col-span-1">
              <Compass className="w-5 h-5 mx-auto text-purple-600 mb-1" />
              <div className="text-2xl font-black text-gray-900 font-serif">7+ Years</div>
              <div className="text-xs font-bold text-gray-600 font-mono">Active in Ranchi</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. UPCOMING EVENTS SECTION */}
      <section id="upcoming-events" className="py-10 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-6 pb-2 border-b-2 border-black gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-green-700 bg-green-100 px-2 py-0.5 border border-green-300">
              ⚡ LIVE REGISTRATIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 font-serif mt-1">
              Upcoming Events &amp; Workshops
            </h2>
            <p className="text-xs text-gray-600 mt-0.5">
              RSVPs are free but capacity is limited per venue. Register to reserve your seat!
            </p>
          </div>
          <Link
            to="/events"
            className="text-xs md:text-sm font-bold text-blue-700 hover:text-blue-900 underline uppercase font-mono"
          >
            All Events Directory &gt;&gt;
          </Link>
        </div>

        {upcomingEvents.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-gray-400 p-8 text-center text-xs text-gray-500">
            No upcoming events at this moment. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, idx) => (
              <EventCard
                key={event.id}
                event={event}
                index={idx}
                onSelect={(evt) => setSelectedEvent(evt)}
              />
            ))}
          </div>
        )}
      </section>

      {/* 7. PAST EVENTS SECTION */}
      <section className="py-10 px-4 bg-[#f8fafc] border-y-2 border-gray-300">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-6 pb-2 border-b-2 border-gray-400 gap-2">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-gray-700 bg-gray-200 px-2 py-0.5 border border-gray-400">
                ARCHIVED CONFERENCES
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 font-serif mt-1">
                Past Events &amp; Meetup Recaps
              </h2>
              <p className="text-xs text-gray-600 mt-0.5">
                Browse past sessions, keynote recordings, and CodeLab slides from GDG Ranchi history.
              </p>
            </div>
            <Link
              to="/events"
              className="text-xs md:text-sm font-bold text-gray-700 hover:text-black underline uppercase font-mono"
            >
              Browse Complete Archive &gt;&gt;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, idx) => (
              <EventCard
                key={event.id}
                event={event}
                index={idx + 1}
                onSelect={(evt) => setSelectedEvent(evt)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. MOVING PHOTO MEMORIES REEL (FROM LEFT TO RIGHT) + DEDICATED GALLERY CTA */}
      <section className="py-10 px-4 bg-[#0d1b2a] text-white border-b-4 border-yellow-400 overflow-hidden">
        <div className="max-w-6xl mx-auto mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-yellow-300" />
              <span className="text-xs font-mono font-bold uppercase bg-yellow-400 text-black px-2 py-0.5 border border-black">
                COMMUNITY MEMORY STREAM
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black font-serif text-yellow-300 mt-1">
              Glimpses of GDG Ranchi Meetups
            </h2>
            <p className="text-xs text-gray-300">
              Moving reel of recent community sessions (Scrolls continuously from left to right. Hover to pause!).
            </p>
          </div>

          <Link
            to="/gallery"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-xs px-4 py-2.5 border-2 border-white shadow-[3px_3px_0px_#fff] whitespace-nowrap active:translate-x-0.5"
          >
            📸 View More Memories in Dedicated Gallery &gt;&gt;
          </Link>
        </div>

        {/* Continuous Left-to-Right Scrolling Container */}
        <div className="relative w-full overflow-hidden border-2 border-yellow-500 bg-black/60 py-3">
          <div className="animate-scroll-ltr flex gap-4">
            {scrollingPhotos.map((photo, i) => (
              <div
                key={`${photo.id}-${i}`}
                onClick={() => setSelectedGalleryPhoto(photo)}
                className="cursor-pointer w-64 shrink-0 bg-white p-2 border-2 border-gray-400 shadow-[3px_3px_0px_#000] text-black hover:scale-105 transition-transform"
              >
                <div className="h-36 overflow-hidden border border-black bg-gray-900 mb-1.5">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-[10px] font-mono font-bold text-red-700 uppercase truncate">
                  [{photo.eventName}]
                </div>
                <div className="text-xs font-bold font-serif text-gray-900 truncate">
                  {photo.title}
                </div>
                <p className="text-[10px] text-gray-600 line-clamp-1 mt-0.5">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
          <Link
            to="/gallery"
            className="text-xs font-mono text-yellow-300 hover:text-white underline font-bold"
          >
            ★ Click here to visit our full Dedicated Photo Gallery Page with Lightbox Viewer ★
          </Link>
        </div>
      </section>

      {/* 9. OUR ORGANIZERS SECTION ON HOME */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-6 pb-2 border-b-2 border-black gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-purple-700 bg-purple-100 px-2 py-0.5 border border-purple-300">
              COMMUNITY LEADERSHIP
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-serif text-gray-900 mt-1">
              Meet Our Organizers &amp; Tech Leads
            </h2>
            <p className="text-xs text-gray-600 mt-0.5">
              The volunteer team steering GDG Ranchi meetups, logistics, and speaker mentorship.
            </p>
          </div>
          <Link
            to="/team"
            className="text-xs md:text-sm font-bold text-blue-700 hover:text-blue-900 underline uppercase font-mono"
          >
            View All Organizers &amp; Alumni &gt;&gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredOrganizers.map((organizer, idx) => (
            <div
              key={organizer.id}
              className={`border-3 p-4 flex flex-col justify-between ${
                idx % 2 === 0
                  ? 'bg-[#f8fafc] border-indigo-900 shadow-[4px_4px_0px_#312e81] text-center'
                  : 'bg-[#fefce8] border-yellow-700 shadow-[3px_3px_0px_#854d0e] text-left'
              }`}
            >
              <div>
                <div className="text-[10px] font-mono bg-blue-100 text-blue-800 px-1 py-0.5 border border-blue-300 font-bold mb-2 inline-block">
                  {organizer.department} Lead
                </div>

                <div className={`mb-3 ${idx % 2 === 0 ? 'flex justify-center' : 'flex justify-start'}`}>
                  <img
                    src={organizer.photo}
                    alt={organizer.name}
                    className={`object-cover border-2 border-black ${
                      idx % 2 === 0 ? 'w-24 h-24 rounded-full border-4 border-yellow-400' : 'w-24 h-24'
                    }`}
                  />
                </div>

                <h3 className="text-base font-bold text-gray-900 font-serif">
                  {organizer.name}
                </h3>
                <div className="text-[11px] font-mono bg-gray-800 text-yellow-300 px-1.5 py-0.5 mt-1 inline-block">
                  {organizer.role}
                </div>
                <p className="text-xs text-gray-700 mt-2 line-clamp-2">
                  {organizer.bio}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-300 text-center">
                <Link
                  to="/team"
                  className="text-xs font-bold text-blue-700 hover:underline"
                >
                  View Profile &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. SPEAKER CFP BANNER */}
      <section className="py-8 px-4 bg-[#1e1b4b] text-yellow-300 border-b-4 border-yellow-500">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="bg-red-600 text-white text-[10px] font-mono uppercase px-2 py-0.5 font-bold">
              CALL FOR SPEAKERS (CFP)
            </span>
            <h3 className="text-2xl font-black font-serif text-white">
              Have An Exciting Tech Topic To Share?
            </h3>
            <p className="text-xs md:text-sm text-gray-300 max-w-xl">
              We welcome first-time and seasoned developers! Talk about Android, Cloud, AI, Open-Source, or web development at our next meetup.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-xs md:text-sm px-6 py-3 border-2 border-black shadow-[4px_4px_0px_#fff] whitespace-nowrap active:translate-x-0.5"
          >
            Submit Talk Proposal &gt;&gt;
          </Link>
        </div>
      </section>

      {/* 11. TESTIMONIALS SECTION */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-xs font-mono font-bold uppercase text-purple-700 bg-purple-100 px-2 py-0.5 border border-purple-300">
            COMMUNITY VOICES
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-serif text-gray-900 mt-1">
            What Jharkhand Developers Say
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            Hear from students, software engineers, and first-time speakers who grew through GDG Ranchi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sampleTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#fefce8] p-4 border-3 border-yellow-700 shadow-[4px_4px_0px_#854d0e] flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-500" />
                  ))}
                </div>
                <p className="text-xs text-gray-800 leading-relaxed font-serif italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-3 mt-3 border-t border-yellow-300">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-9 h-9 rounded-full border-2 border-black object-cover shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-gray-900 font-sans">{t.name}</div>
                  <div className="text-[10px] text-gray-600 font-mono truncate max-w-[130px]">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-10 px-4 bg-[#f8fafc] border-y-2 border-gray-400">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold uppercase text-blue-700 bg-blue-100 px-2 py-0.5 border border-blue-300">
              GOT QUESTIONS?
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-serif text-gray-900 mt-1">
              Frequently Asked Community Questions
            </h2>
            <p className="text-xs text-gray-600 mt-1">
              Everything you need to know about joining, attending, and speaking.
            </p>
          </div>

          <div className="space-y-3">
            {sampleFAQs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border-2 border-black shadow-[2px_2px_0px_#000] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-3.5 flex items-center justify-between font-bold text-xs md:text-sm text-gray-900 hover:bg-yellow-50"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-blue-700 font-mono font-black">Q:</span>
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gray-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-600 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-3.5 pt-0 text-xs text-gray-700 leading-relaxed font-sans border-t border-dashed border-gray-300 bg-yellow-50/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. SPONSORS & PARTNERS SECTION */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-xs font-mono font-bold uppercase text-gray-600 bg-gray-200 px-2 py-0.5 border border-gray-400">
            OUR SPONSORS &amp; SUPPORTERS
          </span>
          <h2 className="text-xl md:text-2xl font-black font-serif text-gray-900 mt-1">
            Our Community Partners &amp; Sponsors
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Generously providing venues, cloud credits, and event support for Jharkhand developers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sampleSponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-white p-4 border-2 border-black text-center shadow-[3px_3px_0px_#000] space-y-2 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold bg-gray-100 text-gray-700 px-1.5 py-0.5 border border-gray-300 uppercase">
                  {sponsor.category} Partner
                </span>
                <div className="mt-2 text-base font-black font-serif text-blue-900">
                  {sponsor.logoText}
                </div>
                <p className="text-[11px] text-gray-600 mt-1 leading-snug">
                  {sponsor.description}
                </p>
              </div>

              <a
                href={sponsor.website}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-blue-700 hover:underline"
              >
                <span>Visit Partner</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 14. NEWSLETTER & CHAPTER DISPATCH SUBSCRIPTION */}
      <section className="py-8 px-4 bg-[#e2e8f0] border-t-2 border-black">
        <div className="max-w-2xl mx-auto bg-white p-6 border-3 border-black shadow-[5px_5px_0px_#000] text-center space-y-3">
          <div className="inline-block bg-yellow-400 text-black px-2 py-0.5 text-xs font-mono font-bold uppercase">
            COMMUNITY DISPATCH (FREE)
          </div>
          <h3 className="text-xl font-black font-serif text-gray-900">
            Subscribe To GDG Ranchi Meetup Notifications
          </h3>
          <p className="text-xs text-gray-600 font-sans">
            Get early access to DevFest RSVP tickets, Cloud Study Jam coupons, and technical workshop notifications directly in your inbox.
          </p>

          {newsletterSubscribed ? (
            <div className="bg-green-100 border-2 border-green-700 text-green-900 p-3 text-xs flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-700 shrink-0" />
              <span>
                <strong>Subscription Successful! (Demo Mode):</strong> You are subscribed to GDG Ranchi updates.
              </span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email (e.g. dev@example.com)"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="p-2 border-2 border-black text-xs flex-1 bg-yellow-50/40"
                />
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-black uppercase text-xs px-5 py-2 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5"
                >
                  Join Mailing List
                </button>
              </div>
              {newsletterError && (
                <div className="text-red-600 text-[11px] font-bold">
                  {newsletterError}
                </div>
              )}
            </form>
          )}

          <div className="text-[10px] text-gray-500 font-mono">
            * No spam ever. One email every 2 weeks. Unsubscribe anytime.
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      {/* Lightbox Modal for Photo Clicked from Reel */}
      {selectedGalleryPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          onClick={() => setSelectedGalleryPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white border-4 border-black p-4 text-left space-y-3 shadow-[8px_8px_0px_#000]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-black pb-2 bg-[#1e293b] text-yellow-300 p-2">
              <span className="font-mono text-xs font-bold uppercase truncate">
                📷 {selectedGalleryPhoto.eventName} - Memory Preview
              </span>
              <button
                onClick={() => setSelectedGalleryPhoto(null)}
                className="bg-red-600 hover:bg-red-700 text-white px-2 py-0.5 text-xs font-bold border border-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-80 overflow-hidden border-2 border-black bg-black">
              <img
                src={selectedGalleryPhoto.imageUrl}
                alt={selectedGalleryPhoto.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            <div>
              <h4 className="font-bold text-sm text-gray-900 font-serif">
                {selectedGalleryPhoto.title}
              </h4>
              <p className="text-xs text-gray-700 mt-0.5">
                {selectedGalleryPhoto.caption}
              </p>
            </div>

            <div className="pt-2 border-t flex justify-between items-center text-xs">
              <Link
                to="/gallery"
                className="text-blue-700 underline font-bold"
              >
                Go to Dedicated Gallery Page &gt;&gt;
              </Link>
              <button
                onClick={() => setSelectedGalleryPhoto(null)}
                className="bg-black text-white text-xs px-3 py-1 font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
