export type EventMode = 'In-Person' | 'Online' | 'Hybrid';

export type EventCategory = 'Android' | 'Cloud' | 'AI / ML' | 'Flutter' | 'Web' | 'General';

export type EventStatus = 'upcoming' | 'past';

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  mode: EventMode;
  category: EventCategory;
  description: string;
  fullDetails?: string;
  speakers: string[];
  image: string;
  status: EventStatus;
  registrationUrl?: string;
  seatsLeft?: number;
  agenda?: { time: string; topic: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  department: 'Core' | 'Technical' | 'Community' | 'Design';
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}
