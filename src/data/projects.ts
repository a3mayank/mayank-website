export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  tech: string[];
  liveUrl?: string;
  iosUrl?: string;
  androidUrl?: string;
  iosComingSoon?: boolean;
  androidComingSoon?: boolean;
  year: string;
  image?: string;
  logo?: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'trenzform',
    title: 'Trenzform',
    tagline: 'Fitness Coaching & Digital Transformation Platform',
    description: 'A comprehensive fitness platform where coaches manage client nutrition plans, workout programs, and check-in forms. Features a Next.js 16 web portal, React Native mobile app, and high-performance FastAPI backend with AWS ECS cloud infrastructure.',
    category: 'Fullstack / Mobile',
    tech: ['FastAPI (Python)', 'Next.js 16', 'React Native', 'PostgreSQL', 'Docker', 'AWS ECS'],
    liveUrl: 'https://app.trenzform.com',
    iosComingSoon: true,
    androidComingSoon: true,
    year: '2024',
    image: '/projects/trenzform.jpg',
    logo: '/projects/trenzform-logo.png'
  },
  {
    id: 'talented-ritu-insan',
    title: 'Talented Ritu Insan',
    tagline: 'Multi-Tenant E-Learning & Operations Platform',
    description: 'Enterprise multi-tenant learning system with a unified FastAPI backend serving an admin web dashboard and student React Native (Expo) mobile app. Integrated with Cloudflare R2 media streaming, WhatsApp OTP auth, and Terraform AWS infrastructure.',
    category: 'Backend & Systems',
    tech: ['FastAPI (Python 3.13)', 'Next.js 16', 'React Native (Expo 54)', 'PostgreSQL 16', 'Redis 7', 'Terraform AWS'],
    liveUrl: 'http://talentedrituinsan.com/',
    iosUrl: 'https://apps.apple.com/us/app/talented-ritu-insan/id6670782263',
    androidUrl: 'https://play.google.com/store/apps/details?id=co.diy14.goxgp&hl=en_IN',
    year: '2024',
    image: '/projects/talented-ritu-insan.jpg'
  },
  {
    id: 'customspro',
    title: 'CustomsPro',
    tagline: 'AI Customs Clearance & ICEGATE Filing Automation',
    description: 'Autonomous document understanding platform that parses commercial shipping invoices, performs multimodal OCR line-item extraction, verifies HS tariff codes, and outputs validated Indian Customs ICEGATE EDI flat files in under 30 seconds.',
    category: 'AI / Automation',
    tech: ['Next.js 15', 'TypeScript', 'FastAPI', 'Python', 'AI Vision / OCR', 'ICEGATE EDI'],
    liveUrl: 'https://custompro-landing.vercel.app',
    year: '2024',
    image: '/projects/customspro.jpg'
  },
  {
    id: 'gymai',
    title: 'GymAI',
    tagline: 'Multi-Tenant Fitness Club Management SaaS',
    description: 'Cloud SaaS for gym operators featuring real-time member check-ins, automated subscription billing, member retention alerts, and headless CMS content management with Sanity.',
    category: 'Fullstack SaaS',
    tech: ['Next.js', 'TanStack Query & Table', 'Sanity CMS', 'PostgreSQL', 'Tailwind CSS'],
    year: '2023',
    image: '/projects/gymai.jpg'
  },
  {
    id: 'vacaystack',
    title: 'VacayStack',
    tagline: 'Luxury Vacation Rental Direct-Booking Engine',
    description: 'A high-converting direct-booking platform for boutique vacation properties and stargazing desert escapes, featuring headless content management and Stripe checkout.',
    category: 'Web / E-Commerce',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Headless CMS'],
    year: '2023',
    image: '/projects/vacaystack.jpg'
  }
];
